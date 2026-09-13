import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Backend URL
  // For local development:
  // http://localhost:5000
  //
  // When you deploy your backend, add VITE_API_URL
  // to your Vercel environment variables.
  const API_URL =
    import.meta.env.VITE_API_URL || 'http://localhost:5000';


  // =========================
  // LOGIN / SIGNUP
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage('');

    // Name validation
    if (isSignup && !name.trim()) {
      setMessage('error:Please enter your full name.');
      return;
    }

    // Email validation
    if (!email.trim()) {
      setMessage('error:Please enter your email address.');
      return;
    }

    // Password validation
    if (!password.trim()) {
      setMessage('error:Please enter your password.');
      return;
    }

    if (password.length < 6) {
      setMessage(
        'error:Password must contain at least 6 characters.'
      );
      return;
    }

    setLoading(true);

    try {
      const endpoint = isSignup
        ? '/api/signup'
        : '/api/login';

      const requestBody = isSignup
        ? {
            name: name.trim(),
            email: email.trim(),
            password,
          }
        : {
            email: email.trim(),
            password,
          };

      const response = await fetch(
        `${API_URL}${endpoint}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();

      // =========================
      // SUCCESS
      // =========================

      if (response.ok) {

        if (isSignup) {

          setMessage(
            'success:Account created successfully!'
          );

          // Switch to login
          setIsSignup(false);

          // Clear fields
          setName('');
          setEmail('');
          setPassword('');

        } else {

          // Store logged-in user
          const user = {
            name: data.name,
            email: email.trim(),
            role: data.role || 'user',
          };

          localStorage.setItem(
            'campuskartUser',
            JSON.stringify(user)
          );

          setMessage(
            `success:Welcome back, ${data.name || 'Student'}!`
          );

          // Go to home after login
          setTimeout(() => {
            navigate('/home');
          }, 700);
        }

      } else {

        setMessage(
          `error:${data.message || 'Something went wrong.'}`
        );

      }

    } catch (error) {

      console.error('Login error:', error);

      setMessage(
        'error:Could not connect to CampusKart server. Please make sure the backend is running.'
      );

    } finally {

      setLoading(false);

    }
  };


  // =========================
  // SWITCH LOGIN / SIGNUP
  // =========================

  const switchMode = () => {

    setIsSignup(!isSignup);

    setMessage('');

    setShowPassword(false);

    setName('');
    setEmail('');
    setPassword('');
  };


  // =========================
  // MESSAGE
  // =========================

  const isSuccess =
    message.startsWith('success:');

  const displayMessage =
    message.replace(/^(success|error):/, '');


  return (
    <div className="login-page">

      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Arial,
            sans-serif;

          background: #f6f3fc;
        }


        /* =========================
           PAGE
        ========================= */

        .login-page {

          min-height: 100vh;

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 25px;

          position: relative;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 10% 20%,
              rgba(113, 65, 210, 0.14),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(236, 72, 153, 0.10),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #faf9ff,
              #f0ebff
            );
        }


        /* =========================
           DECORATIVE BLOBS
        ========================= */

        .background-blob {

          position: absolute;

          border-radius: 50%;

          pointer-events: none;

          opacity: 0.45;
        }

        .blob-one {

          width: 300px;
          height: 300px;

          top: -140px;
          left: -100px;

          background: #d9ccff;
        }

        .blob-two {

          width: 350px;
          height: 350px;

          bottom: -180px;
          right: -120px;

          background: #ffd9eb;
        }


        /* =========================
           MAIN CONTAINER
        ========================= */

        .login-container {

          width: 100%;

          max-width: 1080px;

          min-height: 660px;

          display: grid;

          grid-template-columns: 1fr 1fr;

          background: white;

          border-radius: 30px;

          overflow: hidden;

          position: relative;

          z-index: 2;

          box-shadow:
            0 30px 80px
            rgba(55, 36, 95, 0.17);
        }


        /* =========================
           LEFT SECTION
        ========================= */

        .brand-section {

          padding: 50px;

          color: white;

          display: flex;

          flex-direction: column;

          justify-content: space-between;

          position: relative;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(255,255,255,0.17),
              transparent 25%
            ),
            radial-gradient(
              circle at 10% 90%,
              rgba(255,255,255,0.10),
              transparent 30%
            ),
            linear-gradient(
              145deg,
              #44229b,
              #6a3bd0 55%,
              #8a55df
            );
        }


        .brand-section::before {

          content: "";

          position: absolute;

          width: 330px;
          height: 330px;

          border: 1px solid
            rgba(255,255,255,0.14);

          border-radius: 50%;

          right: -170px;
          top: -110px;
        }


        .brand-section::after {

          content: "";

          position: absolute;

          width: 240px;
          height: 240px;

          border: 1px solid
            rgba(255,255,255,0.11);

          border-radius: 50%;

          left: -150px;
          bottom: -120px;
        }


        /* =========================
           LOGO
        ========================= */

        .brand-logo {

          display: flex;

          align-items: center;

          gap: 12px;

          position: relative;

          z-index: 2;
        }


        .brand-logo-icon {

          width: 48px;
          height: 48px;

          border-radius: 14px;

          display: flex;

          align-items: center;

          justify-content: center;

          background:
            rgba(255,255,255,0.16);

          border:
            1px solid
            rgba(255,255,255,0.20);

          font-size: 24px;
        }


        .brand-logo-name {

          font-size: 25px;

          font-weight: 850;

          letter-spacing: -0.5px;
        }


        /* =========================
           BRAND CONTENT
        ========================= */

        .brand-content {

          position: relative;

          z-index: 2;

          margin-top: 20px;
        }


        .brand-content h1 {

          margin: 0 0 20px;

          font-size: 48px;

          line-height: 1.07;

          letter-spacing: -1.7px;
        }


        .brand-content h1 span {

          color: #ffd86b;
        }


        .brand-content p {

          max-width: 430px;

          margin: 0;

          color:
            rgba(255,255,255,0.82);

          font-size: 16px;

          line-height: 1.7;
        }


        /* =========================
           FEATURES
        ========================= */

        .feature-list {

          display: flex;

          flex-wrap: wrap;

          gap: 10px;

          margin-top: 27px;
        }


        .feature {

          padding: 9px 13px;

          border-radius: 30px;

          background:
            rgba(255,255,255,0.12);

          border:
            1px solid
            rgba(255,255,255,0.15);

          font-size: 12px;

          color:
            rgba(255,255,255,0.92);
        }


        /* =========================
           MINI MARKET CARD
        ========================= */

        .market-card {

          width: 300px;

          margin: 30px auto 0;

          padding: 20px;

          border-radius: 20px;

          background:
            rgba(255,255,255,0.11);

          border:
            1px solid
            rgba(255,255,255,0.17);

          backdrop-filter: blur(10px);

          transform: rotate(-2deg);

          box-shadow:
            0 20px 40px
            rgba(0,0,0,0.10);

          position: relative;

          z-index: 2;
        }


        .market-header {

          display: flex;

          justify-content: space-between;

          align-items: center;

          margin-bottom: 14px;
        }


        .market-header small {

          font-size: 10px;

          color:
            rgba(255,255,255,0.65);

          letter-spacing: 1px;
        }


        .live {

          padding: 4px 8px;

          border-radius: 8px;

          background:
            rgba(255,216,107,0.20);

          color: #ffe28b;

          font-size: 9px;

          font-weight: 800;
        }


        .market-item {

          display: flex;

          align-items: center;

          gap: 10px;

          padding: 10px 0;

          border-bottom:
            1px solid
            rgba(255,255,255,0.10);
        }


        .market-item:last-child {

          border-bottom: none;
        }


        .market-icon {

          width: 38px;
          height: 38px;

          border-radius: 10px;

          background:
            rgba(255,255,255,0.13);

          display: flex;

          align-items: center;

          justify-content: center;

          font-size: 18px;
        }


        .market-info {

          flex: 1;
        }


        .market-info strong {

          display: block;

          font-size: 12px;
        }


        .market-info small {

          color:
            rgba(255,255,255,0.52);

          font-size: 9px;
        }


        .market-price {

          color: #ffe08a;

          font-size: 11px;

          font-weight: 750;
        }


        /* =========================
           FOOTER
        ========================= */

        .brand-footer {

          position: relative;

          z-index: 2;

          color:
            rgba(255,255,255,0.55);

          font-size: 11px;
        }


        /* =========================
           RIGHT FORM
        ========================= */

        .form-section {

          padding: 55px 65px;

          display: flex;

          flex-direction: column;

          justify-content: center;

          background: white;
        }


        .welcome-icon {

          width: 56px;
          height: 56px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 16px;

          background: #f0eaff;

          font-size: 27px;

          margin-bottom: 19px;
        }


        .form-header h2 {

          margin: 0;

          color: #251a3b;

          font-size: 32px;

          letter-spacing: -0.8px;
        }


        .form-header p {

          margin: 9px 0 29px;

          color: #82798c;

          font-size: 14px;

          line-height: 1.5;
        }


        /* =========================
           INPUT
        ========================= */

        .form-group {

          margin-bottom: 18px;
        }


        .form-group label {

          display: block;

          margin-bottom: 8px;

          color: #3d3449;

          font-size: 13px;

          font-weight: 700;
        }


        .input-wrapper {

          position: relative;
        }


        .input-icon {

          position: absolute;

          left: 15px;

          top: 50%;

          transform:
            translateY(-50%);

          font-size: 16px;

          opacity: 0.55;

          pointer-events: none;
        }


        .form-input {

          width: 100%;

          height: 52px;

          padding:
            0 15px 0 44px;

          border:
            1.5px solid #e5e0ec;

          border-radius: 13px;

          outline: none;

          background: #faf9fc;

          color: #292130;

          font-size: 14px;

          transition: 0.2s;
        }


        .form-input::placeholder {

          color: #aaa2b0;
        }


        .form-input:focus {

          background: white;

          border-color: #7043d5;

          box-shadow:
            0 0 0 4px
            rgba(112,67,213,0.09);
        }


        /* =========================
           PASSWORD
        ========================= */

        .password-input {

          padding-right: 50px;
        }


        .password-toggle {

          position: absolute;

          right: 12px;

          top: 50%;

          transform:
            translateY(-50%);

          border: none;

          background: transparent;

          cursor: pointer;

          padding: 5px;

          font-size: 17px;

          opacity: 0.55;
        }


        .password-toggle:hover {

          opacity: 1;
        }


        /* =========================
           OPTIONS
        ========================= */

        .form-options {

          display: flex;

          align-items: center;

          justify-content: space-between;

          margin:
            3px 0 22px;

          font-size: 12px;
        }


        .remember {

          display: flex;

          align-items: center;

          gap: 7px;

          color: #81798a;
        }


        .remember input {

          accent-color: #643ac4;
        }


        .forgot {

          color: #6339c1;

          font-weight: 700;

          cursor: pointer;
        }


        /* =========================
           SUBMIT BUTTON
        ========================= */

        .submit-button {

          width: 100%;

          height: 53px;

          border: none;

          border-radius: 14px;

          background:
            linear-gradient(
              135deg,
              #542bb5,
              #8050df
            );

          color: white;

          font-size: 15px;

          font-weight: 750;

          cursor: pointer;

          box-shadow:
            0 12px 25px
            rgba(84,43,181,0.23);

          transition: 0.25s;
        }


        .submit-button:hover:not(:disabled) {

          transform:
            translateY(-2px);

          box-shadow:
            0 16px 30px
            rgba(84,43,181,0.30);
        }


        .submit-button:disabled {

          opacity: 0.65;

          cursor: not-allowed;
        }


        /* =========================
           MESSAGE
        ========================= */

        .message {

          margin-top: 15px;

          padding: 12px 14px;

          border-radius: 10px;

          font-size: 13px;

          text-align: center;

          line-height: 1.4;
        }


        .success-message {

          color: #177448;

          background: #eaf8f0;

          border:
            1px solid #c9ecd9;
        }


        .error-message {

          color: #b4232c;

          background: #fff0f1;

          border:
            1px solid #ffd3d6;
        }


        /* =========================
           DIVIDER
        ========================= */

        .divider {

          display: flex;

          align-items: center;

          gap: 12px;

          margin: 23px 0 20px;

          color: #aaa2b0;

          font-size: 10px;

          letter-spacing: 0.5px;
        }


        .divider::before,
        .divider::after {

          content: "";

          height: 1px;

          background: #ece8f0;

          flex: 1;
        }


        /* =========================
           SWITCH
        ========================= */

        .switch-text {

          text-align: center;

          color: #827a89;

          font-size: 13px;
        }


        .switch-button {

          color: #6339c1;

          font-weight: 800;

          cursor: pointer;

          margin-left: 5px;
        }


        .switch-button:hover {

          text-decoration: underline;
        }


        .security-note {

          text-align: center;

          margin-top: 17px;

          color: #aaa2ae;

          font-size: 10px;
        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 850px) {

          .login-container {

            grid-template-columns: 1fr;

            max-width: 520px;
          }


          .brand-section {

            min-height: 390px;

            padding: 35px;
          }


          .brand-content h1 {

            font-size: 36px;
          }


          .market-card {

            display: none;
          }


          .form-section {

            padding: 38px 30px 45px;
          }

        }


        @media (max-width: 480px) {

          .login-page {

            padding: 12px;
          }


          .login-container {

            border-radius: 22px;
          }


          .brand-section {

            padding: 28px 22px;

            min-height: 330px;
          }


          .brand-content h1 {

            font-size: 31px;

            letter-spacing: -1px;
          }


          .brand-content p {

            font-size: 14px;
          }


          .form-section {

            padding: 30px 22px 35px;
          }


          .form-header h2 {

            font-size: 28px;
          }

        }

      `}</style>


      {/* BACKGROUND */}

      <div className="background-blob blob-one"></div>

      <div className="background-blob blob-two"></div>


      <div className="login-container">


        {/* =================================
            LEFT BRAND SECTION
        ================================= */}

        <section className="brand-section">


          {/* LOGO */}

          <div className="brand-logo">

            <div className="brand-logo-icon">
              🎓
            </div>

            <div className="brand-logo-name">
              CampusKart
            </div>

          </div>


          {/* CONTENT */}

          <div className="brand-content">

            <h1>
              Your Campus.
              <br />

              Your <span>Marketplace.</span>
            </h1>


            <p>
              Making campus life easier with projects,
              creative services, editing, designing and
              useful student essentials.
            </p>


            <div className="feature-list">

              <div className="feature">
                💻 Projects
              </div>

              <div className="feature">
                🎨 Design
              </div>

              <div className="feature">
                🎬 Editing
              </div>

              <div className="feature">
                🛒 Essentials
              </div>

            </div>


            {/* MINI CARD */}

            <div className="market-card">

              <div className="market-header">

                <small>
                  CAMPUSKART
                </small>

                <span className="live">
                  STUDENT HUB
                </span>

              </div>


              <div className="market-item">

                <div className="market-icon">
                  💻
                </div>

                <div className="market-info">

                  <strong>
                    Project Help
                  </strong>

                  <small>
                    Academic Support
                  </small>

                </div>

                <div className="market-price">
                  ₹150+
                </div>

              </div>


              <div className="market-item">

                <div className="market-icon">
                  🎨
                </div>

                <div className="market-info">

                  <strong>
                    Logo Design
                  </strong>

                  <small>
                    Creative Service
                  </small>

                </div>

                <div className="market-price">
                  ₹300+
                </div>

              </div>


              <div className="market-item">

                <div className="market-icon">
                  🎬
                </div>

                <div className="market-info">

                  <strong>
                    Video Editing
                  </strong>

                  <small>
                    Reels & Projects
                  </small>

                </div>

                <div className="market-price">
                  ₹400+
                </div>

              </div>

            </div>

          </div>


          <div className="brand-footer">

            © {new Date().getFullYear()}
            {' '}CampusKart • Making Campus Life Easier.

          </div>

        </section>


        {/* =================================
            RIGHT LOGIN SECTION
        ================================= */}

        <section className="form-section">


          <div className="form-header">

            <div className="welcome-icon">
              {isSignup ? '🚀' : '👋'}
            </div>


            <h2>
              {isSignup
                ? 'Join CampusKart'
                : 'Welcome back'}
            </h2>


            <p>
              {isSignup
                ? 'Create your account and get started with CampusKart.'
                : 'Sign in to continue to your campus marketplace.'}
            </p>

          </div>


          {/* FORM */}

          <form onSubmit={handleSubmit}>


            {/* NAME */}

            {isSignup && (

              <div className="form-group">

                <label>
                  Full Name
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    👤
                  </span>

                  <input
                    className="form-input"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    autoComplete="name"
                  />

                </div>

              </div>

            )}


            {/* EMAIL */}

            <div className="form-group">

              <label>
                Email Address
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  ✉️
                </span>

                <input
                  className="form-input"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  autoComplete="email"
                />

              </div>

            </div>


            {/* PASSWORD */}

            <div className="form-group">

              <label>
                Password
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  🔒
                </span>


                <input
                  className="form-input password-input"
                  type={
                    showPassword
                      ? 'text'
                      : 'password'
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  autoComplete={
                    isSignup
                      ? 'new-password'
                      : 'current-password'
                  }
                />


                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword
                    ? '🙈'
                    : '👁️'}
                </button>

              </div>

            </div>


            {/* LOGIN OPTIONS */}

            {!isSignup && (

              <div className="form-options">

                <label className="remember">

                  <input
                    type="checkbox"
                  />

                  Remember me

                </label>


                <span className="forgot">
                  Forgot password?
                </span>

              </div>

            )}


            {/* SUBMIT */}

            <button
              type="submit"
              className="submit-button"
              disabled={loading}
            >

              {loading
                ? 'Please wait...'
                : isSignup
                  ? 'Create My Account →'
                  : 'Login to CampusKart →'}

            </button>

          </form>


          {/* MESSAGE */}

          {message && (

            <div
              className={`message ${
                isSuccess
                  ? 'success-message'
                  : 'error-message'
              }`}
            >

              {isSuccess
                ? '✅ '
                : '❌ '}

              {displayMessage}

            </div>

          )}


          {/* DIVIDER */}

          <div className="divider">

            <span>
              SECURE CAMPUS ACCESS
            </span>

          </div>


          {/* SWITCH */}

          <div className="switch-text">

            {isSignup
              ? 'Already have a CampusKart account?'
              : "Don't have a CampusKart account?"}


            <span
              className="switch-button"
              onClick={switchMode}
            >

              {isSignup
                ? 'Login'
                : 'Create account'}

            </span>

          </div>


          <div className="security-note">

            🔐 Your information is securely handled.

          </div>

        </section>

      </div>

    </div>
  );
}

export default Login;