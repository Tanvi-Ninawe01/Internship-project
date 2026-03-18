import express from 'express';
import {
  getAllCertificates,
  getCertificateById,
  issueCertificate,
  updateCertificate,
  deleteCertificate,
  getInternCertificates,
  verifyCertificate,
  revokeCertificate,
} from '../controllers/certificatesController.js';
import { protect, restrictTo } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/verify/:credentialId', verifyCertificate);

// Admin routes
router.get('/', protect, restrictTo('admin'), getAllCertificates);
router.get('/:id', protect, restrictTo('admin'), getCertificateById);
router.post('/', protect, restrictTo('admin'), issueCertificate);
router.patch('/:id', protect, restrictTo('admin'), updateCertificate);
router.delete('/:id', protect, restrictTo('admin'), deleteCertificate);
router.patch('/:id/revoke', protect, restrictTo('admin'), revokeCertificate);

// Intern routes
router.get('/my-certificates', protect, restrictTo('intern'), getInternCertificates);

export default router;
