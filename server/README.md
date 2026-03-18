# Internship Hub Backend

This is the backend server for the Internship Hub application, built with Node.js, Express, and MongoDB.

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Update the `.env` file with your configuration:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/internship-hub
JWT_SECRET=your_secure_jwt_secret_key
JWT_EXPIRE=7d
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### Running the Server

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user profile
- `PATCH /api/auth/me/profile` - Update user profile

### Dashboard
- `GET /api/internship/dashboard/metrics` - Get dashboard metrics
- `GET /api/internship/dashboard/enrollment-trends` - Get enrollment trends
- `GET /api/internship/dashboard/tier-distribution` - Get tier distribution
- `GET /api/internship/dashboard/active-internships` - Get active internships
- `GET /api/internship/dashboard/upcoming-hackathons` - Get upcoming hackathons
- `GET /api/internship/dashboard/my-progress` - Get intern progress

### Levels
- `GET /api/internship/levels` - Get all levels
- `GET /api/internship/levels/:id` - Get level by ID
- `POST /api/internship/levels` - Create new level (admin)
- `PATCH /api/internship/levels/:id` - Update level (admin)
- `DELETE /api/internship/levels/:id` - Delete level (admin)
- `GET /api/internship/levels/progress/my-progress` - Get intern level progress

### Tasks
- `GET /api/internship/tasks` - Get all tasks
- `GET /api/internship/tasks/:id` - Get task by ID
- `POST /api/internship/tasks` - Create new task (admin)
- `PATCH /api/internship/tasks/:id` - Update task (admin)
- `DELETE /api/internship/tasks/:id` - Delete task (admin)
- `POST /api/internship/tasks/submit` - Submit task (intern)
- `GET /api/internship/tasks/progress/my-progress` - Get task progress

### Projects
- `GET /api/internship/projects` - Get all projects
- `GET /api/internship/projects/:id` - Get project by ID
- `POST /api/internship/projects` - Create new project (admin)
- `PATCH /api/internship/projects/:id` - Update project (admin)
- `DELETE /api/internship/projects/:id` - Delete project (admin)
- `POST /api/internship/projects/submit` - Submit project (intern)
- `GET /api/internship/projects/progress/my-progress` - Get project progress

### Evaluations
- `GET /api/internship/evaluations` - Get all evaluations (admin)
- `GET /api/internship/evaluations/:id` - Get evaluation by ID
- `POST /api/internship/evaluations` - Create evaluation (mentor)
- `PATCH /api/internship/evaluations/:id` - Update evaluation (mentor)
- `GET /api/internship/evaluations/pending` - Get pending evaluations (mentor)
- `GET /api/internship/evaluations/my-evaluations` - Get intern evaluations

### Certificates
- `GET /api/internship/certificates` - Get all certificates (admin)
- `GET /api/internship/certificates/:id` - Get certificate by ID
- `POST /api/internship/certificates` - Issue certificate (admin)
- `PATCH /api/internship/certificates/:id` - Update certificate (admin)
- `DELETE /api/internship/certificates/:id` - Delete certificate (admin)
- `GET /api/internship/certificates/verify/:credentialId` - Verify certificate (public)
- `GET /api/internship/certificates/my-certificates` - Get intern certificates
- `PATCH /api/internship/certificates/:id/revoke` - Revoke certificate (admin)

### Teams
- `GET /api/internship/teams` - Get all teams
- `GET /api/internship/teams/:id` - Get team by ID
- `POST /api/internship/teams` - Create team (intern)
- `PATCH /api/internship/teams/:id` - Update team (intern)
- `DELETE /api/internship/teams/:id` - Delete team (admin)
- `POST /api/internship/teams/:id/join` - Join team (intern)
- `POST /api/internship/teams/join/approve` - Approve join request (intern)
- `POST /api/internship/teams/:id/leave` - Leave team (intern)
- `GET /api/internship/teams/leaderboard` - Get team leaderboard
- `GET /api/internship/teams/my-teams` - Get intern teams

### Hackathons
- `GET /api/internship/hackathons` - Get all hackathons
- `GET /api/internship/hackathons/:id` - Get hackathon by ID
- `POST /api/internship/hackathons` - Create hackathon (admin)
- `PATCH /api/internship/hackathons/:id` - Update hackathon (admin)
- `DELETE /api/internship/hackathons/:id` - Delete hackathon (admin)
- `POST /api/internship/hackathons/:id/register` - Register for hackathon (intern)
- `POST /api/internship/hackathons/:id/unregister` - Unregister from hackathon (intern)
- `GET /api/internship/hackathons/my-hackathons` - Get intern hackathons
- `POST /api/internship/hackathons/:id/winners` - Set winners (admin)
- `GET /api/internship/hackathons/:id/winners` - Get hackathon winners

### Leaderboard
- `GET /api/internship/leaderboard` - Get leaderboard
- `GET /api/internship/leaderboard/my-rank` - Get intern rank
- `GET /api/internship/leaderboard/top-performers` - Get top performers
- `GET /api/internship/leaderboard/category/:category` - Get leaderboard by category
- `GET /api/internship/leaderboard/stats` - Get leaderboard statistics
- `POST /api/internship/leaderboard/recalculate` - Recalculate leaderboard (admin)

## Authentication

All protected endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

## Database Models

The application uses the following main models:
- **User** - User accounts with roles (intern, mentor, company, admin)
- **InternProfile** - Intern-specific profile information
- **Level** - Internship program levels
- **Task** - Tasks for interns to complete
- **Project** - Projects for interns to complete
- **Submission** - Task/project submissions
- **Evaluation** - Mentor evaluations of submissions
- **Certificate** - Issued certificates
- **Badge** - Achievements/badges
- **Team** - Team-based projects
- **Hackathon** - Hackathon events
- **Leaderboard** - Leaderboard rankings

## Error Handling

All endpoints return errors in the following format:
```json
{
  "error": "Error message"
}
```

## Contributing

When adding new endpoints:
1. Create a new controller in `/src/controllers`
2. Create routes in `/src/routes`
3. Import routes in `/src/server.js`
4. Update this README with new endpoints

## License

ISC
