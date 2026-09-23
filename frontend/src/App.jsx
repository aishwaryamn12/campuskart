import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';

import Login from './Login';
import Gigs from './Gigs';
import GigDetail from './GigDetail';
import Admin from './Admin';

// ==========================================
// PROTECTED ROUTE
// ==========================================

function ProtectedRoute({ children }) {
  const user = localStorage.getItem('campuskartUser');

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// ==========================================
// HOME PAGE
// ==========================================

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('campuskartUser');
    navigate('/login', { replace: true });
  };

  const storedUser = localStorage.getItem('campuskartUser');

  let user = null;

  try {
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error('User data error:', error);
  }

  return (
    <div className="home-page">

      {/* ==================================
          NAVBAR
      ================================== */}

      <nav className="navbar">

        <Link to="/home" className="logo-link">

          <div className="logo-box">
            CK
          </div>

          <div className="logo-text">
            <strong>CampusKart</strong>
            <span>Your Ideas. Our Skills.</span>
          </div>

        </Link>

        <div className="nav-links">

          <Link to="/home">
            Home
          </Link>

          <Link to="/gigs">
            Services
          </Link>

          {user?.role === 'admin' && (
            <Link to="/admin">
              Admin
            </Link>
          )}

          <button
            onClick={handleLogout}
            className="logout-button"
          >
            Logout
          </button>

        </div>

      </nav>

      {/* ==================================
          HERO
      ================================== */}

      <main>

        <section className="hero">

          <div className="hero-content">

            <div className="hero-badge">
              ✨ Student Services Platform
            </div>

            <h1>
              Your Ideas.
              <br />

              <span>Our Skills.</span>
            </h1>

            <p>
              Need help with a project, design, assignment,
              resume or content? CampusKart connects you
              with student-focused services built for
              students.
            </p>

            <div className="hero-buttons">

              <Link
                to="/gigs"
                className="primary-button"
              >
                Explore Services →
              </Link>

              <a
                href="#how-it-works"
                className="secondary-button"
              >
                How it works
              </a>

            </div>

          </div>

          <div className="hero-card">

            <div className="floating-card card-one">
              <span>🎨</span>
              <div>
                <strong>Design</strong>
                <small>Creative solutions</small>
              </div>
            </div>

            <div className="floating-card card-two">
              <span>💻</span>
              <div>
                <strong>Development</strong>
                <small>Student projects</small>
              </div>
            </div>

            <div className="main-visual">

              <div className="visual-icon">
                🚀
              </div>

              <h3>
                Built by Students
              </h3>

              <p>
                Skills, creativity and collaboration
                in one place.
              </p>

            </div>

            <div className="floating-card card-three">
              <span>📄</span>
              <div>
                <strong>Resume</strong>
                <small>Stand out professionally</small>
              </div>
            </div>

          </div>

        </section>

        {/* ==================================
            WELCOME
        ================================== */}

        <section className="welcome-section">

          <div className="welcome-card">

            <div>

              <p className="small-label">
                WELCOME TO CAMPUSKART
              </p>

              <h2>
                Hi {user?.name || 'Student'} 👋
              </h2>

              <p>
                We're here to turn your requirements
                into reality.
              </p>

            </div>

            <Link
              to="/gigs"
              className="welcome-button"
            >
              View Services
            </Link>

          </div>

        </section>

        {/* ==================================
            SERVICES PREVIEW
        ================================== */}

        <section className="services-section">

          <div className="section-title">

            <p className="small-label">
              WHAT WE DO
            </p>

            <h2>
              Services for your next idea
            </h2>

            <p>
              From academic work to creative projects,
              we've got you covered.
            </p>

          </div>

          <div className="service-grid">

            <div className="service-card">

              <div className="service-icon">
                🎨
              </div>

              <h3>
                Logo Design
              </h3>

              <p>
                Unique and professional logos for
                your project, club or startup.
              </p>

            </div>

            <div className="service-card">

              <div className="service-icon">
                📚
              </div>

              <h3>
                Assignment Help
              </h3>

              <p>
                Get support with assignments,
                documentation and academic work.
              </p>

            </div>

            <div className="service-card">

              <div className="service-icon">
                🎬
              </div>

              <h3>
                Video Editing
              </h3>

              <p>
                Reels, short videos and engaging
                content for your projects.
              </p>

            </div>

            <div className="service-card">

              <div className="service-icon">
                📄
              </div>

              <h3>
                Resume Design
              </h3>

              <p>
                Clean and professional resumes
                designed to make an impression.
              </p>

            </div>

          </div>

          <div className="view-all-wrapper">

            <Link
              to="/gigs"
              className="view-all"
            >
              View All Services →
            </Link>

          </div>

        </section>

        {/* ==================================
            HOW IT WORKS
        ================================== */}

        <section
          className="how-section"
          id="how-it-works"
        >

          <div className="section-title">

            <p className="small-label">
              SIMPLE PROCESS
            </p>

            <h2>
              How CampusKart works
            </h2>

          </div>

          <div className="steps">

            <div className="step">

              <div className="step-number">
                01
              </div>

              <h3>
                Choose a service
              </h3>

              <p>
                Browse the services available
                on CampusKart.
              </p>

            </div>

            <div className="step">

              <div className="step-number">
                02
              </div>

              <h3>
                Tell us your requirement
              </h3>

              <p>
                Share your project details and
                what you need.
              </p>

            </div>

            <div className="step">

              <div className="step-number">
                03
              </div>

              <h3>
                Let's build it
              </h3>

              <p>
                Aishwarya & Jahnavi will work
                on your requirement.
              </p>

            </div>

          </div>

        </section>

      </main>

      {/* ==================================
          FOOTER
      ================================== */}

      <footer className="footer">

        <div>

          <strong>
            CampusKart
          </strong>

          <p>
            Your Ideas. Our Skills.
          </p>

        </div>

        <p>
          © 2026 CampusKart. Built for students.
        </p>

      </footer>

      {/* ==================================
          STYLES
      ================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .home-page {
          min-height: 100vh;
          background: #ffffff;
          color: #171827;
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        /* NAVBAR */

        .navbar {
          height: 76px;
          padding: 0 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #eeeeF4;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(15px);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .logo-link {
          display: flex;
          align-items: center;
          gap: 11px;
          text-decoration: none;
          color: #171827;
        }

        .logo-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: #5b3df5;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 14px;
          box-shadow:
            0 8px 20px rgba(91, 61, 245, 0.22);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-text strong {
          font-size: 18px;
        }

        .logo-text span {
          font-size: 10px;
          color: #858696;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .nav-links a {
          color: #555666;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
        }

        .nav-links a:hover {
          color: #5b3df5;
        }

        .logout-button {
          border: 0;
          background: #171827;
          color: white;
          padding: 9px 15px;
          border-radius: 9px;
          font-weight: 600;
          cursor: pointer;
        }

        /* HERO */

        .hero {
          min-height: 620px;
          padding: 80px 7%;
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 50px;
          align-items: center;
          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(91, 61, 245, 0.10),
              transparent 32%
            ),
            #fbfbff;
        }

        .hero-content {
          max-width: 650px;
        }

        .hero-badge {
          display: inline-block;
          background: #efedff;
          color: #5b3df5;
          padding: 8px 13px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .hero h1 {
          font-size: clamp(48px, 7vw, 76px);
          line-height: 0.98;
          letter-spacing: -4px;
          margin: 0;
        }

        .hero h1 span {
          color: #5b3df5;
        }

        .hero-content > p {
          color: #696b7d;
          font-size: 17px;
          line-height: 1.7;
          max-width: 580px;
          margin: 25px 0;
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .primary-button,
        .secondary-button {
          text-decoration: none;
          padding: 13px 20px;
          border-radius: 11px;
          font-weight: 700;
          font-size: 14px;
        }

        .primary-button {
          background: #5b3df5;
          color: white;
          box-shadow:
            0 10px 25px rgba(91, 61, 245, 0.22);
        }

        .secondary-button {
          background: white;
          color: #303140;
          border: 1px solid #dedee8;
        }

        /* HERO VISUAL */

        .hero-card {
          min-height: 430px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .main-visual {
          width: 300px;
          min-height: 280px;
          border-radius: 30px;
          background: #171827;
          color: white;
          padding: 45px 30px;
          text-align: center;
          box-shadow:
            0 30px 60px rgba(20, 20, 40, 0.18);
        }

        .visual-icon {
          font-size: 55px;
          margin-bottom: 20px;
        }

        .main-visual h3 {
          font-size: 23px;
          margin: 0 0 10px;
        }

        .main-visual p {
          color: #b7b8c7;
          line-height: 1.6;
          font-size: 13px;
        }

        .floating-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 15px;
          background: white;
          border: 1px solid #e7e7ef;
          border-radius: 14px;
          box-shadow:
            0 15px 35px rgba(30, 30, 60, 0.10);
        }

        .floating-card > span {
          font-size: 22px;
        }

        .floating-card div {
          display: flex;
          flex-direction: column;
        }

        .floating-card strong {
          font-size: 12px;
        }

        .floating-card small {
          color: #888a9a;
          font-size: 10px;
          margin-top: 3px;
        }

        .card-one {
          left: 3%;
          top: 8%;
        }

        .card-two {
          right: 0;
          top: 25%;
        }

        .card-three {
          left: 8%;
          bottom: 7%;
        }

        /* WELCOME */

        .welcome-section {
          padding: 70px 7% 30px;
        }

        .welcome-card {
          max-width: 1150px;
          margin: auto;
          padding: 28px 32px;
          border-radius: 20px;
          background: #f1efff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .small-label {
          color: #5b3df5;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.4px;
        }

        .welcome-card h2 {
          margin: 8px 0 4px;
          font-size: 25px;
        }

        .welcome-card p {
          color: #737485;
          margin: 0;
        }

        .welcome-button {
          background: #5b3df5;
          color: white;
          padding: 11px 17px;
          text-decoration: none;
          border-radius: 10px;
          font-weight: 700;
          font-size: 13px;
          white-space: nowrap;
        }

        /* SERVICES */

        .services-section,
        .how-section {
          padding: 80px 7%;
          max-width: 1250px;
          margin: auto;
        }

        .section-title {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 40px;
        }

        .section-title h2 {
          font-size: 38px;
          letter-spacing: -1.5px;
          margin: 8px 0 10px;
        }

        .section-title > p:last-child {
          color: #77798a;
          line-height: 1.6;
        }

        .service-grid {
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
          gap: 18px;
        }

        .service-card {
          border: 1px solid #e9e9f0;
          border-radius: 17px;
          padding: 23px;
          transition: 0.2s ease;
          background: white;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow:
            0 15px 35px rgba(25, 25, 50, 0.08);
        }

        .service-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          background: #f1efff;
          font-size: 22px;
          margin-bottom: 17px;
        }

        .service-card h3 {
          margin: 0 0 9px;
          font-size: 16px;
        }

        .service-card p {
          margin: 0;
          color: #77798a;
          font-size: 13px;
          line-height: 1.6;
        }

        .view-all-wrapper {
          text-align: center;
          margin-top: 30px;
        }

        .view-all {
          color: #5b3df5;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
        }

        /* HOW IT WORKS */

        .how-section {
          background: #fafaff;
          max-width: none;
        }

        .steps {
          max-width: 1050px;
          margin: auto;
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          gap: 25px;
        }

        .step {
          text-align: center;
          padding: 25px;
        }

        .step-number {
          width: 55px;
          height: 55px;
          margin: auto;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #5b3df5;
          color: white;
          font-size: 12px;
          font-weight: 800;
        }

        .step h3 {
          margin: 18px 0 8px;
          font-size: 17px;
        }

        .step p {
          color: #77798a;
          font-size: 13px;
          line-height: 1.6;
        }

        /* FOOTER */

        .footer {
          padding: 35px 7%;
          border-top: 1px solid #ededf3;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .footer strong {
          font-size: 18px;
        }

        .footer p {
          color: #858696;
          font-size: 12px;
          margin: 4px 0 0;
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {

          .hero {
            grid-template-columns: 1fr;
            padding-top: 55px;
          }

          .hero-card {
            min-height: 370px;
          }

          .service-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

        }

        @media (max-width: 650px) {

          .navbar {
            padding: 0 4%;
          }

          .nav-links {
            gap: 10px;
          }

          .nav-links a {
            display: none;
          }

          .hero {
            padding-left: 5%;
            padding-right: 5%;
          }

          .hero h1 {
            font-size: 50px;
          }

          .hero-card {
            transform: scale(0.9);
          }

          .welcome-card {
            flex-direction: column;
            align-items: flex-start;
          }

          .service-grid,
          .steps {
            grid-template-columns: 1fr;
          }

          .section-title h2 {
            font-size: 30px;
          }

          .footer {
            flex-direction: column;
            align-items: flex-start;
          }

        }

      `}</style>

    </div>
  );
}

// ==========================================
// APP
// ==========================================

function App() {
  return (
    <Routes>

      {/* Default page → Login */}
      <Route
        path="/"
        element={
          <Navigate
            to="/login"
            replace
          />
        }
      />

      {/* Login */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* Protected Home */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      {/* Protected Services */}
      <Route
        path="/gigs"
        element={
          <ProtectedRoute>
            <Gigs />
          </ProtectedRoute>
        }
      />

      {/* Protected Service Details */}
      <Route
        path="/gigs/:id"
        element={
          <ProtectedRoute>
            <GigDetail />
          </ProtectedRoute>
        }
      />

      {/* Admin */}
      <Route
        path="/admin"
        element={<Admin />}
      />

      {/* Unknown URL → Login */}
      <Route
        path="*"
        element={
          <Navigate
            to="/login"
            replace
          />
        }
      />

    </Routes>
  );
}

export default App;