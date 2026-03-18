import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';

// Import routes
import authRoutes from './routes/authRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import levelsRoutes from './routes/levelsRoutes.js';
import tasksRoutes from './routes/tasksRoutes.js';
import projectsRoutes from './routes/projectsRoutes.js';
import evaluationsRoutes from './routes/evaluationsRoutes.js';
import certificatesRoutes from './routes/certificatesRoutes.js';
import teamsRoutes from './routes/teamsRoutes.js';
import hackathonsRoutes from './routes/hackathonsRoutes.js';
import leaderboardRoutes from './routes/leaderboardRoutes.js';

// Load environment variables
dotenv.config();

const app = express();

// Connect to database
await connectDB();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/internship/dashboard', dashboardRoutes);
app.use('/api/internship/levels', levelsRoutes);
app.use('/api/internship/tasks', tasksRoutes);
app.use('/api/internship/projects', projectsRoutes);
app.use('/api/internship/evaluations', evaluationsRoutes);
app.use('/api/internship/certificates', certificatesRoutes);
app.use('/api/internship/teams', teamsRoutes);
app.use('/api/internship/hackathons', hackathonsRoutes);
app.use('/api/internship/leaderboard', leaderboardRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
