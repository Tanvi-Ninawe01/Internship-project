const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

class APIClient {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.token = localStorage.getItem('authToken');
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('authToken', token);
  }

  getToken() {
    return this.token || localStorage.getItem('authToken');
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('authToken');
  }

  getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };

    const token = this.getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      ...options,
      headers: {
        ...this.getHeaders(),
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'API request failed');
      }

      // Handle empty responses
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Auth endpoints
  async register(data) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async login(data) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getCurrentUser() {
    return this.request('/auth/me');
  }

  async updateProfile(data) {
    return this.request('/auth/me/profile', {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  // Dashboard endpoints
  async getDashboardMetrics() {
    return this.request('/internship/dashboard/metrics');
  }

  async getEnrollmentTrends() {
    return this.request('/internship/dashboard/enrollment-trends');
  }

  async getTierDistribution() {
    return this.request('/internship/dashboard/tier-distribution');
  }

  async getActiveInternships() {
    return this.request('/internship/dashboard/active-internships');
  }

  async getUpcomingHackathons() {
    return this.request('/internship/dashboard/upcoming-hackathons');
  }

  async getInternProgress() {
    return this.request('/internship/dashboard/my-progress');
  }

  // Levels endpoints
  async getAllLevels(tier = null) {
    let endpoint = '/internship/levels';
    if (tier) {
      endpoint += `?tier=${tier}`;
    }
    return this.request(endpoint);
  }

  async getLevelById(id) {
    return this.request(`/internship/levels/${id}`);
  }

  async createLevel(data) {
    return this.request('/internship/levels', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateLevel(id, data) {
    return this.request(`/internship/levels/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async deleteLevel(id) {
    return this.request(`/internship/levels/${id}`, {
      method: 'DELETE',
    });
  }

  async getInternLevelProgress() {
    return this.request('/internship/levels/progress/my-progress');
  }

  // Tasks endpoints
  async getAllTasks(filters = {}) {
    const params = new URLSearchParams(filters);
    return this.request(`/internship/tasks?${params}`);
  }

  async getTaskById(id) {
    return this.request(`/internship/tasks/${id}`);
  }

  async createTask(data) {
    return this.request('/internship/tasks', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateTask(id, data) {
    return this.request(`/internship/tasks/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async deleteTask(id) {
    return this.request(`/internship/tasks/${id}`, {
      method: 'DELETE',
    });
  }

  async submitTask(data) {
    return this.request('/internship/tasks/submit', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getInternTaskProgress() {
    return this.request('/internship/tasks/progress/my-progress');
  }

  // Projects endpoints
  async getAllProjects(filters = {}) {
    const params = new URLSearchParams(filters);
    return this.request(`/internship/projects?${params}`);
  }

  async getProjectById(id) {
    return this.request(`/internship/projects/${id}`);
  }

  async createProject(data) {
    return this.request('/internship/projects', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateProject(id, data) {
    return this.request(`/internship/projects/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async deleteProject(id) {
    return this.request(`/internship/projects/${id}`, {
      method: 'DELETE',
    });
  }

  async submitProject(data) {
    return this.request('/internship/projects/submit', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getInternProjectProgress() {
    return this.request('/internship/projects/progress/my-progress');
  }

  // Evaluations endpoints
  async getAllEvaluations(filters = {}) {
    const params = new URLSearchParams(filters);
    return this.request(`/internship/evaluations?${params}`);
  }

  async getEvaluationById(id) {
    return this.request(`/internship/evaluations/${id}`);
  }

  async createEvaluation(data) {
    return this.request('/internship/evaluations', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateEvaluation(id, data) {
    return this.request(`/internship/evaluations/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async getPendingEvaluations() {
    return this.request('/internship/evaluations/pending');
  }

  async getInternEvaluations() {
    return this.request('/internship/evaluations/my-evaluations');
  }

  // Certificates endpoints
  async getAllCertificates(filters = {}) {
    const params = new URLSearchParams(filters);
    return this.request(`/internship/certificates?${params}`);
  }

  async getCertificateById(id) {
    return this.request(`/internship/certificates/${id}`);
  }

  async issueCertificate(data) {
    return this.request('/internship/certificates', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateCertificate(id, data) {
    return this.request(`/internship/certificates/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async deleteCertificate(id) {
    return this.request(`/internship/certificates/${id}`, {
      method: 'DELETE',
    });
  }

  async getInternCertificates() {
    return this.request('/internship/certificates/my-certificates');
  }

  async verifyCertificate(credentialId) {
    return this.request(`/internship/certificates/verify/${credentialId}`);
  }

  async revokeCertificate(id) {
    return this.request(`/internship/certificates/${id}/revoke`, {
      method: 'PATCH',
    });
  }

  // Teams endpoints
  async getAllTeams() {
    return this.request('/internship/teams');
  }

  async getTeamById(id) {
    return this.request(`/internship/teams/${id}`);
  }

  async createTeam(data) {
    return this.request('/internship/teams', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateTeam(id, data) {
    return this.request(`/internship/teams/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async deleteTeam(id) {
    return this.request(`/internship/teams/${id}`, {
      method: 'DELETE',
    });
  }

  async joinTeam(id) {
    return this.request(`/internship/teams/${id}/join`, {
      method: 'POST',
    });
  }

  async approveJoinRequest(data) {
    return this.request('/internship/teams/join/approve', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async leaveTeam(id) {
    return this.request(`/internship/teams/${id}/leave`, {
      method: 'POST',
    });
  }

  async getTeamLeaderboard() {
    return this.request('/internship/teams/leaderboard');
  }

  async getInternTeams() {
    return this.request('/internship/teams/my-teams');
  }

  // Hackathons endpoints
  async getAllHackathons(filters = {}) {
    const params = new URLSearchParams(filters);
    return this.request(`/internship/hackathons?${params}`);
  }

  async getHackathonById(id) {
    return this.request(`/internship/hackathons/${id}`);
  }

  async createHackathon(data) {
    return this.request('/internship/hackathons', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateHackathon(id, data) {
    return this.request(`/internship/hackathons/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async deleteHackathon(id) {
    return this.request(`/internship/hackathons/${id}`, {
      method: 'DELETE',
    });
  }

  async registerForHackathon(id) {
    return this.request(`/internship/hackathons/${id}/register`, {
      method: 'POST',
    });
  }

  async unregisterFromHackathon(id) {
    return this.request(`/internship/hackathons/${id}/unregister`, {
      method: 'POST',
    });
  }

  async getInternHackathons() {
    return this.request('/internship/hackathons/my-hackathons');
  }

  async setHackathonWinners(id, data) {
    return this.request(`/internship/hackathons/${id}/winners`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getHackathonWinners(id) {
    return this.request(`/internship/hackathons/${id}/winners`);
  }

  // Leaderboard endpoints
  async getLeaderboard(filters = {}) {
    const params = new URLSearchParams(filters);
    return this.request(`/internship/leaderboard?${params}`);
  }

  async getInternRank() {
    return this.request('/internship/leaderboard/my-rank');
  }

  async getTopPerformers() {
    return this.request('/internship/leaderboard/top-performers');
  }

  async getLeaderboardByCategory(category) {
    return this.request(`/internship/leaderboard/category/${category}`);
  }

  async getLeaderboardStats() {
    return this.request('/internship/leaderboard/stats');
  }

  async recalculateLeaderboard() {
    return this.request('/internship/leaderboard/recalculate', {
      method: 'POST',
    });
  }
}

export default new APIClient();
