# Internship Hub - Backend Setup and Integration Guide

This guide explains how to set up and run the complete internship hub application with the frontend and backend.

## Project Structure

```
project-root/
├── src/                          # Frontend source code
│   ├── app/
│   ├── services/
│   │   └── apiClient.js          # Frontend API client
│   └── styles/
├── server/                       # Backend server
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js       # MongoDB connection
│   │   ├── controllers/          # Business logic
│   │   ├── models/               # MongoDB schemas
│   │   ├── middleware/           # Auth middleware
│   │   ├── routes/               # API endpoints
│   │   └── server.js             # Main server file
│   ├── package.json
│   ├── .env                      # Backend environment variables
│   └── README.md                 # Backend documentation
├── package.json                  # Frontend package.json
├── .env                          # Frontend environment variables
└── vite.config.ts                # Frontend config
```

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local instance or Atlas connection)
- npm or yarn
- Two terminal windows (one for frontend, one for backend)

## Setup Instructions

### Step 1: Install Dependencies

**Frontend:**
```bash
npm install
```

**Backend:**
```bash
cd server
npm install
cd ..
```

### Step 2: Configure Environment Variables

**Frontend (.env):**
```
VITE_API_URL=http://localhost:5000/api
```

**Backend (server/.env):**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/internship-hub
JWT_SECRET=your_secure_jwt_secret_key_change_in_production
JWT_EXPIRE=7d
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### Step 3: Set Up MongoDB

**Option A: Local MongoDB**
1. Install MongoDB locally
2. Start the MongoDB service:
   ```bash
   mongod
   ```
3. Use the default connection string in `.env`: `mongodb://localhost:27017/internship-hub`

**Option B: MongoDB Atlas (Cloud)**
1. Create an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster and database
3. Get your connection string
4. Update `.env` with your Atlas URI:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster-name.mongodb.net/internship-hub
   ```

### Step 4: Run the Application

**Terminal 1 - Backend Server:**
```bash
cd server
npm run dev
```
You should see:
```
Server is running on port 5000
MongoDB connected: localhost
```

**Terminal 2 - Frontend Development Server:**
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

## API Integration

The frontend automatically communicates with the backend using the `apiClient` service located at `src/services/apiClient.js`.

### Using the API Client in Components

```typescript
import apiClient from '@/services/apiClient';

// Example: Login
const response = await apiClient.login({
  email: 'user@example.com',
  password: 'password123'
});

// The token is automatically stored and used for subsequent requests
const user = await apiClient.getCurrentUser();
```

### Available API Methods

All API methods are available in `apiClient`:

**Authentication:**
- `register(data)` - Register new user
- `login(data)` - Login user
- `getCurrentUser()` - Get current user
- `updateProfile(data)` - Update user profile

**Dashboard:**
- `getDashboardMetrics()`
- `getEnrollmentTrends()`
- `getTierDistribution()`
- `getActiveInternships()`
- `getUpcomingHackathons()`
- `getInternProgress()`

**Levels:**
- `getAllLevels(tier?)`
- `getLevelById(id)`
- `getInternLevelProgress()`

**Tasks:**
- `getAllTasks(filters)`
- `getTaskById(id)`
- `submitTask(data)`
- `getInternTaskProgress()`

**Projects:**
- `getAllProjects(filters)`
- `getProjectById(id)`
- `submitProject(data)`
- `getInternProjectProgress()`

**Evaluations:**
- `getAllEvaluations(filters)`
- `createEvaluation(data)`
- `getPendingEvaluations()`
- `getInternEvaluations()`

**Certificates:**
- `getAllCertificates(filters)`
- `issueCertificate(data)`
- `getInternCertificates()`
- `verifyCertificate(credentialId)`

**Teams:**
- `getAllTeams()`
- `createTeam(data)`
- `joinTeam(id)`
- `getInternTeams()`
- `getTeamLeaderboard()`

**Hackathons:**
- `getAllHackathons(filters)`
- `registerForHackathon(id)`
- `getInternHackathons()`
- `setHackathonWinners(id, data)`

**Leaderboard:**
- `getLeaderboard(filters)`
- `getInternRank()`
- `getTopPerformers()`
- `getLeaderboardByCategory(category)`

## Testing the Backend

### Using curl

**Register a user:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "role": "intern"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Get current user (with token):**
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Using Postman or Insomnia

1. Import the provided API collection
2. Set the base URL to `http://localhost:5000/api`
3. For protected endpoints, add the Bearer token to the Authorization header

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod` (or check MongoDB Atlas connectivity)
- Check the `MONGODB_URI` in your `.env` file
- Verify credentials if using MongoDB Atlas

### CORS Error
- Ensure the backend CORS configuration includes your frontend URL
- Check that `CLIENT_URL` in backend `.env` matches your frontend URL
- For development, it should be: `http://localhost:5173`

### Authentication Token Issues
- Clear browser local storage: `localStorage.clear()`
- Log in again to get a new token
- Check that the token is being stored: `localStorage.getItem('authToken')`

### API Not Responding
- Check that backend is running on port 5000
- Verify `VITE_API_URL` in frontend `.env` matches backend URL
- Check browser Network tab for actual request URL

## Database Management

### Create Initial Data

You can add seed data by running scripts in MongoDB:

```javascript
// Add sample levels
db.levels.insertMany([
  {
    levelNumber: 1,
    title: "Foundations",
    tier: "basic",
    requiredTasks: [],
    requiredProjects: [],
    skills: ["HTML", "CSS", "JavaScript"]
  }
]);
```

### View Collections

Using MongoDB Shell:
```bash
mongosh
use internship-hub
db.collections.find()
```

## Production Deployment

### Backend Deployment (Example: Heroku)

1. Create `Procfile`:
   ```
   web: npm start
   ```

2. Set environment variables:
   ```bash
   heroku config:set MONGODB_URI=your_atlas_uri
   heroku config:set JWT_SECRET=your_secret_key
   heroku config:set NODE_ENV=production
   ```

3. Deploy:
   ```bash
   git push heroku main
   ```

### Frontend Deployment (Example: Vercel/Netlify)

1. Update `VITE_API_URL` to point to production backend
2. Deploy to Vercel/Netlify following their documentation

## Next Steps

1. Integrate the frontend pages with the API endpoints
2. Add error handling and loading states in UI components
3. Implement real-time notifications (optional)
4. Add file upload functionality for submissions
5. Set up automated testing
6. Configure production database backups

## Support

For backend API documentation, see `server/README.md`
For frontend setup, see the project's root README

## Key Features Implemented

### Authentication ✓
- User registration and login
- JWT token-based authentication
- Role-based access control (admin, mentor, intern, company)
- Protected routes

### Internship Hub Modules ✓
- **Dashboard** - Metrics and analytics
- **Levels** - Progression system with locked/unlocked states
- **Tasks** - Task management and submission
- **Projects** - Project management and team projects
- **Evaluation** - Mentor evaluation system
- **Certificates** - Certificate issuance and verification
- **Teams** - Team formation and management
- **Hackathons** - Hackathon registration and winners
- **Leaderboard** - Ranking system with multiple categories

### Data Management ✓
- MongoDB database with proper schemas
- Indexing for performance
- Transaction support for complex operations
- Data validation at the model level
