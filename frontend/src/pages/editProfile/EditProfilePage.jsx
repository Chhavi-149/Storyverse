import EditProfileForm from "../../components/EditProfile/EditProfileForm";
import "../../components/EditProfile/EditProfile.css";

function EditProfilePage() {
  return (
    <main className="edit-profile-page">

      <div className="edit-profile-container">

        <div className="edit-profile-header">

          <h1>Edit Profile</h1>

          <p>
            Update your profile information and personalize
            your author page.
          </p>

        </div>

        <EditProfileForm />

      </div>

    </main>
  );
}

export default EditProfilePage;