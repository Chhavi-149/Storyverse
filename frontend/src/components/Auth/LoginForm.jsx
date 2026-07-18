import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData);

      // Firebase Login Code goes here later
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate>

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

      {/* Remember Me */}

      <div className="remember-row">

        <label className="remember">

          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />

          Remember Me

        </label>

        <a href="#">Forgot Password?</a>

      </div>

      <button
        type="submit"
        className="primary-auth-btn"
      >
        Log In
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
        Don't have an account?{" "}
        <Link to="/signup">Sign Up</Link>
      </p>

    </form>
  );
}

export default LoginForm;