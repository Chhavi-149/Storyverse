import BackButton from "../../components/Common/BackButton";

import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileStats from "../../components/Profile/ProfileStats";
import StoryTabs from "../../components/Profile/StoryTabs";
import StoryGrid from "../../components/Profile/StoryGrid";

import "../../components/Profile/Profile.css";

function ProfilePage() {
  return (
    <main className="profile-page">

      <div className="page-top">
        <BackButton />
      </div>

      <ProfileHeader />

      <ProfileStats />

      <StoryTabs />

      <StoryGrid />

    </main>
  );
}

export default ProfilePage;