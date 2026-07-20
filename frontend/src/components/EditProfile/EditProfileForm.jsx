import { Camera } from "lucide-react";

function EditProfileForm() {
  return (
    <form className="edit-profile-form">

      {/* Cover */}

      <div className="cover-upload">

        <div className="cover-preview">

          <button type="button" className="upload-btn">
            <Camera size={18} />
            Change Cover
          </button>

        </div>

      </div>

      {/* Avatar */}

      <div className="avatar-upload">

  <div className="avatar-placeholder">

    <div className="edit-avatar">
      <Camera size={52} strokeWidth={1.8} />
    </div>

    <p className="upload-text">
      No profile photo
    </p>

  </div>

  <button
    type="button"
    className="upload-btn"
  >
    <Camera size={18} />
    Change Photo
  </button>

</div>

      {/* Full Name */}

      <div className="form-group">

        <label>Full Name</label>

        <input
          type="text"
          defaultValue="Emily Carter"
        />

      </div>

      {/* Username */}

      <div className="form-group">

        <label>Username</label>

        <input
          type="text"
          defaultValue="@emilywrites"
        />

      </div>

      {/* Email */}

      <div className="form-group">

        <label>Email</label>

        <input
          type="email"
          defaultValue="emily@gmail.com"
        />

      </div>

      {/* Bio */}

      <div className="form-group">

        <label>Bio</label>

        <textarea
          rows="5"
          defaultValue="Fantasy writer • Dreamer • Coffee addict ☕ Creating worlds one chapter at a time."
        ></textarea>

      </div>

      <div className="button-group">

        <button
          type="button"
          className="cancel-btn"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="save-btn"
        >
          Save Changes
        </button>

      </div>

    </form>
  );
}

export default EditProfileForm;