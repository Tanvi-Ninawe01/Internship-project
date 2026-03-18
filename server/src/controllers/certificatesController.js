import Certificate from '../models/Certificate.js';
import crypto from 'crypto';

const generateCredentialId = () => {
  return crypto.randomBytes(16).toString('hex').toUpperCase();
};

export const getAllCertificates = async (req, res) => {
  try {
    const { status, tier } = req.query;
    let query = {};

    if (status) {
      query.status = status;
    }

    if (tier) {
      query.tier = tier;
    }

    const certificates = await Certificate.find(query)
      .populate('userId', 'name email')
      .populate('levelId', 'title levelNumber')
      .sort({ issueDate: -1 });

    res.json(certificates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCertificateById = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id)
      .populate('userId', 'name email')
      .populate('levelId');

    if (!certificate) {
      return res.status(404).json({ error: 'Certificate not found' });
    }

    res.json(certificate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const issueCertificate = async (req, res) => {
  try {
    const { userId, title, tier, levelId, skills } = req.body;

    const credentialId = generateCredentialId();
    const verificationUrl = `${process.env.BASE_URL || 'http://localhost:3000'}/verify/${credentialId}`;

    const certificate = await Certificate.create({
      userId,
      title,
      credentialId,
      tier,
      levelId,
      skills,
      status: 'issued',
      verificationUrl,
      issueDate: new Date(),
    });

    res.status(201).json(certificate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCertificate = async (req, res) => {
  try {
    const { title, status, expiryDate, pdfUrl, skills } = req.body;

    const certificate = await Certificate.findByIdAndUpdate(
      req.params.id,
      {
        title,
        status,
        expiryDate,
        pdfUrl,
        skills,
      },
      { new: true, runValidators: true }
    );

    if (!certificate) {
      return res.status(404).json({ error: 'Certificate not found' });
    }

    res.json(certificate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findByIdAndDelete(req.params.id);

    if (!certificate) {
      return res.status(404).json({ error: 'Certificate not found' });
    }

    res.json({ message: 'Certificate deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getInternCertificates = async (req, res) => {
  try {
    const userId = req.userId;

    const certificates = await Certificate.find({ userId })
      .populate('levelId', 'title levelNumber')
      .sort({ issueDate: -1 });

    const analytics = {
      total: certificates.length,
      issued: certificates.filter((c) => c.status === 'issued').length,
      inProgress: certificates.filter((c) => c.status === 'in-progress').length,
      locked: certificates.filter((c) => c.status === 'locked').length,
    };

    res.json({
      certificates,
      analytics,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const verifyCertificate = async (req, res) => {
  try {
    const { credentialId } = req.params;

    const certificate = await Certificate.findOne({ credentialId }).populate('userId', 'name').populate('levelId', 'title');

    if (!certificate) {
      return res.status(404).json({ error: 'Certificate not found' });
    }

    if (certificate.status !== 'issued') {
      return res.status(400).json({ error: 'Certificate is not valid' });
    }

    // Check if expired
    if (certificate.expiryDate && new Date() > certificate.expiryDate) {
      return res.status(400).json({ error: 'Certificate has expired' });
    }

    res.json({
      verified: true,
      certificate: {
        title: certificate.title,
        userName: certificate.userId.name,
        level: certificate.levelId?.title,
        issueDate: certificate.issueDate,
        credentialId: certificate.credentialId,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const revokeCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findByIdAndUpdate(
      req.params.id,
      { status: 'revoked' },
      { new: true }
    );

    if (!certificate) {
      return res.status(404).json({ error: 'Certificate not found' });
    }

    res.json(certificate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
