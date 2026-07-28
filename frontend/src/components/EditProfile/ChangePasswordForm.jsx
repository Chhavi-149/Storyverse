import { useState } from "react";
import { Save } from "lucide-react";
import { changePassword } from "../../services/authService";
import "./EditProfile.css";

export default function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState({ type: null, message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });

    if (newPassword.length < 6) {
      setStatus({ type: "error", message: "New password must be at least 6 characters." });
      return;
    }
    if (newPassword !== confirmPassword) {
      setStatus({ type: "error", message: "New password and confirmation don't match." });
      return;
    }

    setSubmitting(true);
    try {
      await changePassword(currentPassword, newPassword);
      setStatus({ type: "success", message: "Password updated successfully." });
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      const message =
        err.code === "auth/wrong-password" || err.code === "auth/invalid-credential"
          ? "Current password is incorrect."
          : err.code === "auth/requires-recent-login"
          ? "Please log out and log back in, then try again."
          : "Something went wrong. Please try again.";
      setStatus({ type: "error", message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="settings-panel" onSubmit={handleSubmit}>
      <h2>Change Password</h2>

      <div className="settings-field">
        <label htmlFor="currentPassword">Current Password</label>
        <input
          id="currentPassword"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
      </div>

      <div className="settings-field">
        <label htmlFor="newPassword">New Password</label>
        <input
          id="newPassword"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      </div>

      <div className="settings-field">
        <label htmlFor="confirmPassword">Confirm New Password</label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>

      {status.message && (
        <p style={{ color: status.type === "error" ? "#ff6b6b" : "#4ade80", marginBottom: "1rem" }}>
          {status.message}
        </p>
      )}

      <div className="settings-save-row">
        <button type="submit" className="settings-save-btn" disabled={submitting}>
          <Save size={16} />
          {submitting ? "Updating..." : "Update Password"}
        </button>
      </div>
    </form>
  );
}