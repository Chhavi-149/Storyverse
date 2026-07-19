import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";

function SignupForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password.";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData);

      // Firebase Signup Code will come here later

      navigate("/profile");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate>

      {/* Full Name */}

      <div>

        <div className="input-group">

          <User className="input-icon" size={20} />

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />

        </div>

        {errors.fullName && (
          <p className="error-text">{errors.fullName}</p>
        )}

      </div>

      {/* Email */}

      <div>

        <div className="input-group">

          <Mail className="input-icon" size={20} />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

        </div>

        {errors.email && (
          <p className="error-text">{errors.email}</p>
        )}

      </div>

      {/* Password */}

      <div>

        <div className="input-group">

          <Lock className="input-icon" size={20} />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="button"
            className="eye-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>

        </div>

        {errors.password && (
          <p className="error-text">{errors.password}</p>
        )}

      </div>

      {/* Confirm Password */}

      <div>

        <div className="input-group">

          <Lock className="input-icon" size={20} />

          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button
            type="button"
            className="eye-btn"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>

        </div>

        {errors.confirmPassword && (
          <p className="error-text">
            {errors.confirmPassword}
          </p>
        )}

      </div>

      <button
        type="submit"
        className="primary-auth-btn"
      >
        Create Account
      </button>

      <div className="divider">
        <span>OR</span>
      </div>

      <button
        type="button"
        className="google-btn"
      >
        <FcGoogle size={22} />
        Continue with Google
      </button>

      <p className="bottom-text">
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </p>

    </form>
  );
}

export default SignupForm;