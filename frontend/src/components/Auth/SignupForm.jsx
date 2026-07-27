import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { Eye, EyeOff, Mail, Lock, User, Upload } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import AuthLayout from "./AuthLayout";

const GENRES = [
  "Fantasy", "Romance", "Mystery", "Sci-Fi", "Horror",
  "Thriller", "Historical", "Adventure", "Drama", "Poetry",
  "Literary Fiction", "Young Adult",
];

const STEP_CONTENT = {
  1: { title: "Create Your Account", subtitle: "Join 84,000+ writers and readers." },
  2: { title: "Secure Your Story", subtitle: "Choose a strong password." },
  3: { title: "Your Reading Tastes", subtitle: "Select genres you love to read." },
};

function SignupForm() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    photo: "",
    password: "",
    confirmPassword: "",
    genres: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setErrors({ ...errors, photo: "Image must be under 5MB." });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, photo: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const toggleGenre = (genre) => {
    setFormData((prev) => {
      const selected = prev.genres.includes(genre)
        ? prev.genres.filter((g) => g !== genre)
        : [...prev.genres, genre];
      return { ...prev, genres: selected };
    });
    setErrors({ ...errors, genres: "" });
  };

  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.username.trim()) {
        newErrors.username = "Username is required.";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (currentStep === 2) {
      if (!formData.password) {
        newErrors.password = "Password is required.";
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters.";
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password.";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match.";
      }
    }

    if (currentStep === 3) {
      if (formData.genres.length < 3) {
        newErrors.genres = "Pick at least 3 genres to continue.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    setErrors({});
    setStep((s) => s - 1);
  };
   
  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateStep(3)) return;
  try {
    await signup({
      username: formData.username,
      email: formData.email,
      photo: formData.photo,
      password: formData.password,
      genres: formData.genres,
    });
    navigate("/dashboard");
  } catch (err) {
    setErrors({ general: err.message });
  }
};
  
  const { title, subtitle } = STEP_CONTENT[step];

  return (
    <AuthLayout title={title} subtitle={subtitle} currentStep={step} totalSteps={3}>
      <form
        className="auth-form"
        onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()}
        noValidate
      >
        {errors.general && <p className="form-error-banner">{errors.general}</p>}

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <div className="photo-upload-row">
              <label className="photo-circle">
                {formData.photo ? (
                  <img src={formData.photo} alt="Profile preview" />
                ) : (
                  <>
                    <Upload size={18} />
                    Photo
                  </>
                )}
                <input
                  type="file"
                  accept="image/jpeg,image/png"
                  onChange={handlePhotoChange}
                  hidden
                />
              </label>
              <div className="photo-upload-info">
                <strong>Profile Picture</strong>
                <span>JPG, PNG up to 5MB</span>
              </div>
            </div>
            {errors.photo && <p className="error-text">{errors.photo}</p>}

            <div>
              <div className="input-group">
                <User className="input-icon" size={20} />
                <input
                  type="text"
                  name="username"
                  placeholder="your_pen_name"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              {errors.username && <p className="error-text">{errors.username}</p>}
            </div>

            <div>
              <div className="input-group">
                <Mail className="input-icon" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <button type="button" className="primary-auth-btn" onClick={handleNext}>
              Continue
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <div>
              <div className="input-group">
                <Lock className="input-icon" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="At least 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="error-text">{errors.password}</p>}
            </div>

            <div>
              <div className="input-group">
                <Lock className="input-icon" size={20} />
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Repeat password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="error-text">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="step-nav">
              <button type="button" className="btn-back" onClick={handleBack}>
                Back
              </button>
              <button type="button" className="primary-auth-btn" onClick={handleNext}>
                Continue
              </button>
            </div>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <p className="genre-hint">Pick at least 3 genres to personalize your feed.</p>

            <div className="genre-grid">
              {GENRES.map((genre) => (
                <button
                  type="button"
                  key={genre}
                  className={
                    "genre-chip " + (formData.genres.includes(genre) ? "selected" : "")
                  }
                  onClick={() => toggleGenre(genre)}
                >
                  {genre}
                </button>
              ))}
            </div>
            {errors.genres && <p className="error-text">{errors.genres}</p>}

            <div className="step-nav">
              <button type="button" className="btn-back" onClick={handleBack}>
                Back
              </button>
              <button type="submit" className="primary-auth-btn">
                Create Account
              </button>
            </div>
          </>
        )}

        <p className="bottom-text">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default SignupForm;