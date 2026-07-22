import { useState, useRef } from "react";
import { Save } from "lucide-react";
import "./EditProfile.css";

export default function EditProfileForm({ user, onSave }) {
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    displayName: user.displayName,
    username: user.username,
    email: user.email,
    website: user.website,
    bio: user.bio,
  });
  const [avatar, setAvatar] = useState(user.avatar);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setAvatar(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave?.({ ...formData, avatar });
  };

  return (
    <form className="settings-panel" onSubmit={handleSubmit}>
      <h2>Edit Profile</h2>

      <div className="settings-photo-row">
        <img src={avatar} alt={formData.displayName} />
        <div>
          <button
            type="button"
            className="settings-change-photo-btn"
            onClick={() => fileInputRef.current.click()}
          >
            Change Photo
          </button>
          <p className="settings-photo-hint">JPG, PNG up to 5MB</p>
        </div>
        <input
          type="file"
          accept="image/jpeg,image/png"
          ref={fileInputRef}
          onChange={handlePhotoChange}
          hidden
        />
      </div>

      <div className="settings-field">
        <label htmlFor="displayName">Display Name</label>
        <input
          id="displayName"
          name="displayName"
          type="text"
          value={formData.displayName}
          onChange={handleChange}
        />
      </div>

      <div className="settings-field">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div className="settings-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="settings-field">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="url"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      <div className="settings-field">
        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
        />
      </div>

      <div className="settings-save-row">
        <button type="submit" className="settings-save-btn">
          <Save size={16} />
          Save Changes
        </button>
      </div>
    </form>
  );
}