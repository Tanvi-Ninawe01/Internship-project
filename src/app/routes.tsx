import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import InternRegistration from "./pages/intern/InternRegistration";
import InternLayout from "./layouts/InternLayout";
import InternDashboard from "./pages/intern/InternDashboard";
import InternJourney from "./pages/intern/InternJourney";
import InternTasks from "./pages/intern/InternTasks";
import InternMentorInteraction from "./pages/intern/InternMentorInteraction";
import InternAnalytics from "./pages/intern/InternAnalytics";
import InternCertificates from "./pages/intern/InternCertificates";
import InternLeaderboard from "./pages/intern/InternLeaderboard";
import InternCareer from "./pages/intern/InternCareer";
import InternProfile from "./pages/intern/InternProfile";
import MentorLayout from "./layouts/MentorLayout";
import MentorDashboard from "./pages/mentor/MentorDashboard";
import MentorProfile from "./pages/mentor/MentorProfile";
import MentorBuilder from "./pages/mentor/MentorBuilder";
import MentorInterns from "./pages/mentor/MentorInterns";
import MentorEvaluation from "./pages/mentor/MentorEvaluation";
import MentorCommunication from "./pages/mentor/MentorCommunication";
import MentorAnalytics from "./pages/mentor/MentorAnalytics";
import MentorEarnings from "./pages/mentor/MentorEarnings";
import InternshipLayout from "./layouts/InternshipLayout";
import InternshipDashboard from "./pages/internship/InternshipDashboard";
import InternshipLevels from "./pages/internship/InternshipLevels";
import InternshipTasks from "./pages/internship/InternshipTasks";
import InternshipProjects from "./pages/internship/InternshipProjects";
import InternshipEvaluation from "./pages/internship/InternshipEvaluation";
import InternshipCertificates from "./pages/internship/InternshipCertificates";
import InternshipTeams from "./pages/internship/InternshipTeams";
import InternshipHackathon from "./pages/internship/InternshipHackathon";
import InternshipLeaderboard from "./pages/internship/InternshipLeaderboard";
import CompanyLayout from "./layouts/CompanyLayout";
import CompanyDashboard from "./pages/company/CompanyDashboard";
import CompanyProfile from "./pages/company/CompanyProfile";
import CompanyInternships from "./pages/company/CompanyInternships";
import CompanyApplicants from "./pages/company/CompanyApplicants";
import CompanyHiring from "./pages/company/CompanyHiring";
import CompanyAnalytics from "./pages/company/CompanyAnalytics";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/intern/register",
    Component: InternRegistration,
  },
  {
    path: "/intern",
    Component: InternLayout,
    children: [
      { index: true, Component: InternDashboard },
      { path: "journey", Component: InternJourney },
      { path: "tasks", Component: InternTasks },
      { path: "mentors", Component: InternMentorInteraction },
      { path: "analytics", Component: InternAnalytics },
      { path: "certificates", Component: InternCertificates },
      { path: "leaderboard", Component: InternLeaderboard },
      { path: "career", Component: InternCareer },
      { path: "profile", Component: InternProfile },
    ],
  },
  {
    path: "/mentor",
    Component: MentorLayout,
    children: [
      { index: true, Component: MentorDashboard },
      { path: "profile", Component: MentorProfile },
      { path: "builder", Component: MentorBuilder },
      { path: "interns", Component: MentorInterns },
      { path: "evaluation", Component: MentorEvaluation },
      { path: "communication", Component: MentorCommunication },
      { path: "analytics", Component: MentorAnalytics },
      { path: "earnings", Component: MentorEarnings },
    ],
  },
  {
    path: "/internship",
    Component: InternshipLayout,
    children: [
      { index: true, Component: InternshipDashboard },
      { path: "levels", Component: InternshipLevels },
      { path: "tasks", Component: InternshipTasks },
      { path: "projects", Component: InternshipProjects },
      { path: "evaluation", Component: InternshipEvaluation },
      { path: "certificates", Component: InternshipCertificates },
      { path: "teams", Component: InternshipTeams },
      { path: "hackathon", Component: InternshipHackathon },
      { path: "leaderboard", Component: InternshipLeaderboard },
    ],
  },
  {
    path: "/company",
    Component: CompanyLayout,
    children: [
      { index: true, Component: CompanyDashboard },
      { path: "profile", Component: CompanyProfile },
      { path: "internships", Component: CompanyInternships },
      { path: "applicants", Component: CompanyApplicants },
      { path: "hiring", Component: CompanyHiring },
      { path: "analytics", Component: CompanyAnalytics },
    ],
  },
]);