import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileStats from "../../components/Profile/ProfileStats";
import StoryTabs from "../../components/Profile/StoryTabs";
import StoryGrid from "../../components/Profile/StoryGrid";
import "../../components/Profile/Profile.css";

function ProfilePage() {
  return (
    <main className="profile-page">

      <ProfileHeader />

      <ProfileStats />

      <StoryTabs />

      <StoryGrid />

    </main>
  );
}

export default ProfilePage;