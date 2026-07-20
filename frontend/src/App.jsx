import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup/SignUpPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import ExplorePage from "./pages/explore/ExplorePage";
import EditorPage from "./pages/editor/EditorPage";
import ReaderPage from "./pages/reader/ReaderPage";
import ProfilePage from "./pages/profile/ProfilePage";
import EditProfilePage from "./pages/editProfile/EditProfilePage";
import StoryPage from "./pages/story/StoryPage";
import CompetitionsPage from "./pages/Competitions/CompetitionsPage";
import RankingsPage from "./pages/Rankings/RankingsPage";
import NotificationsPage from "./pages/Notifications/NotificationsPage";
import AboutPage from "./pages/About/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/editor" element={<EditorPage />} />
      <Route path="/reader" element={<ReaderPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/edit-profile" element={<EditProfilePage />} />
      <Route path="/story" element={<StoryPage />} />
      <Route path="/competitions" element={<CompetitionsPage />}/>
      <Route path="/rankings" element={<RankingsPage />}/>
      <Route path="/notifications" element={<NotificationsPage />}/>
      <Route path="/about" element={<AboutPage />}/>
      
    </Routes>
  );
}

export default App;