function ProfileHeader() {
  return (
    <section className="profile-header">

      <div className="cover-image"></div>

      <div className="profile-content">

        <img
          src="https://i.pravatar.cc/180"
          alt="Profile"
          className="profile-avatar"
        />

        <div className="profile-info">

          <h1>Emily Carter</h1>

          <p className="username">@emilywrites</p>

          <p className="bio">
            Fantasy writer • Dreamer • Coffee addict ☕
            Creating worlds one chapter at a time.
          </p>

          <button className="edit-profile-btn">
            Edit Profile
          </button>

        </div>

      </div>

    </section>
  );
}

export default ProfileHeader;