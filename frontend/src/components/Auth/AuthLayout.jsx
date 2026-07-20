import "./Auth.css";
import { BookOpen } from "lucide-react";

function AuthLayout({ children, title, subtitle, currentStep, totalSteps }) {
  return (
    <div className="auth-page">
      <div className="auth-left"></div>

      <div className="auth-right">
        <div className="auth-box">

          <div className="auth-logo">
            <span className="logo-icon">
              <BookOpen size={20} />
            </span>
            <span className="logo-text">Inkwell</span>
          </div>

          {totalSteps && (
            <div className="step-indicator">
              {Array.from({ length: totalSteps }, (_, i) => i + 1).map(
                (step, index) => (
                  <div className="step-item" key={step}>
                    <div
                      className={
                        "step-circle " +
                        (step < currentStep
                          ? "completed"
                          : step === currentStep
                          ? "active"
                          : "")
                      }
                    >
                      {step < currentStep ? "✓" : step}
                    </div>
                    {index < totalSteps - 1 && (
                      <div
                        className={
                          "step-line " + (step < currentStep ? "completed" : "")
                        }
                      ></div>
                    )}
                  </div>
                )
              )}
            </div>
          )}

          <h2>{title}</h2>
          <p>{subtitle}</p>

          {children}

        </div>
      </div>
    </div>
  );
}

export default AuthLayout;