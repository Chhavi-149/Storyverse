import "./Auth.css";

function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="auth-page">

      {/* Left Side */}
      <div className="auth-left">

        <div className="overlay"></div>

        <div className="left-content">

          <h1>Inkwell</h1>

          <h2>
            Where Stories
            <br />
            Come Alive.
          </h2>

          <p>
            Join thousands of writers and readers.
            Write your imagination.
            Read unforgettable stories.
          </p>

        </div>

      </div>

      {/* Right Side */}

      <div className="auth-right">

        <div className="auth-box">

          <h2>{title}</h2>

          <p>{subtitle}</p>

          {children}

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;