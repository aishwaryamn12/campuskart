import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000';

function Admin() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // ==========================================
  // CHECK ADMIN LOGIN
  // ==========================================

  useEffect(() => {
    const storedUser = localStorage.getItem('campuskartUser');

    if (!storedUser) {
      navigate('/login', { replace: true });
      return;
    }

    try {
      const user = JSON.parse(storedUser);

      if (user.role !== 'admin') {
        navigate('/home', { replace: true });
        return;
      }

      fetchUsers();
    } catch (error) {
      console.error(error);
      localStorage.removeItem('campuskartUser');
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  // ==========================================
  // FETCH USERS
  // ==========================================

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(
        `${API_URL}/api/admin/users`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || 'Could not fetch users'
        );
      }

      setUsers(data.users || []);
    } catch (error) {
      console.error('Fetch users error:', error);

      setError(
        'Could not load students. Make sure the backend is running.'
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // LOGOUT
  // ==========================================

  const handleLogout = () => {
    localStorage.removeItem('campuskartUser');
    navigate('/login', { replace: true });
  };

  // ==========================================
  // STATISTICS
  // ==========================================

  const totalUsers = users.length;

  const totalStudents = users.filter(
    (user) => user.role !== 'admin'
  ).length;

  const totalAdmins = users.filter(
    (user) => user.role === 'admin'
  ).length;

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="admin-page">

      {/* ================= NAVBAR ================= */}

      <nav className="admin-navbar">

        <div className="admin-brand">
          <div className="brand-logo">
            CK
          </div>

          <div>
            <h2>CampusKart</h2>
            <span>Admin Panel</span>
          </div>
        </div>

        <div className="admin-nav-right">

          <button
            className="refresh-btn"
            onClick={fetchUsers}
          >
            ↻ Refresh
          </button>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </nav>

      {/* ================= MAIN ================= */}

      <main className="admin-container">

        {/* HEADER */}

        <section className="admin-header">

          <div>
            <p className="admin-label">
              CAMPUSKART ADMIN
            </p>

            <h1>
              Welcome back, Admin 👋
            </h1>

            <p className="admin-subtitle">
              Manage students and monitor your CampusKart
              community from one place.
            </p>
          </div>

        </section>

        {/* ================= STATS ================= */}

        <section className="stats-grid">

          <div className="stat-card">

            <div className="stat-icon">
              👥
            </div>

            <div>
              <p>Total Users</p>
              <h2>{totalUsers}</h2>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon">
              🎓
            </div>

            <div>
              <p>Students</p>
              <h2>{totalStudents}</h2>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon">
              👑
            </div>

            <div>
              <p>Admins</p>
              <h2>{totalAdmins}</h2>
            </div>

          </div>

        </section>

        {/* ================= USERS ================= */}

        <section className="users-section">

          <div className="section-heading">

            <div>
              <h2>Registered Students</h2>

              <p>
                All users registered on CampusKart
              </p>
            </div>

            <span className="user-count">
              {totalUsers} users
            </span>

          </div>

          {loading && (
            <div className="state-box">
              <div className="loader"></div>
              <p>Loading students...</p>
            </div>
          )}

          {!loading && error && (
            <div className="state-box error-box">
              <div className="error-icon">
                ⚠️
              </div>

              <p>{error}</p>

              <button
                onClick={fetchUsers}
                className="retry-btn"
              >
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && users.length === 0 && (
            <div className="state-box">
              <div className="empty-icon">
                👥
              </div>

              <h3>No users yet</h3>

              <p>
                Students who create an account will
                appear here.
              </p>
            </div>
          )}

          {!loading && !error && users.length > 0 && (

            <div className="table-wrapper">

              <table>

                <thead>
                  <tr>
                    <th>#</th>
                    <th>Student</th>
                    <th>Email</th>
                    <th>College</th>
                    <th>Role</th>
                    <th>Joined</th>
                  </tr>
                </thead>

                <tbody>

                  {users.map((user, index) => (

                    <tr key={user._id}>

                      <td className="number-cell">
                        {index + 1}
                      </td>

                      <td>

                        <div className="student-info">

                          <div className="avatar">
                            {user.name
                              ?.charAt(0)
                              ?.toUpperCase() || 'U'}
                          </div>

                          <div>
                            <strong>
                              {user.name}
                            </strong>
                          </div>

                        </div>

                      </td>

                      <td>
                        <span className="email">
                          {user.email}
                        </span>
                      </td>

                      <td>
                        {user.college || 'Not provided'}
                      </td>

                      <td>

                        <span
                          className={
                            user.role === 'admin'
                              ? 'role-badge admin-role'
                              : 'role-badge student-role'
                          }
                        >
                          {user.role === 'admin'
                            ? 'Admin'
                            : 'Student'}
                        </span>

                      </td>

                      <td>
                        {user.createdAt
                          ? new Date(
                              user.createdAt
                            ).toLocaleDateString(
                              'en-IN',
                              {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric'
                              }
                            )
                          : '-'}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </section>

      </main>

      {/* ================= STYLES ================= */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .admin-page {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at top right,
              rgba(91, 61, 245, 0.10),
              transparent 35%
            ),
            #f7f8fc;
          color: #171827;
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        /* NAVBAR */

        .admin-navbar {
          height: 76px;
          padding: 0 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.94);
          border-bottom: 1px solid #e8e9f0;
          position: sticky;
          top: 0;
          z-index: 20;
          backdrop-filter: blur(15px);
        }

        .admin-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-logo {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #5b3df5;
          color: white;
          font-weight: 800;
          font-size: 15px;
          box-shadow:
            0 8px 20px rgba(91, 61, 245, 0.22);
        }

        .admin-brand h2 {
          margin: 0;
          font-size: 19px;
          letter-spacing: -0.5px;
        }

        .admin-brand span {
          color: #77798b;
          font-size: 12px;
        }

        .admin-nav-right {
          display: flex;
          gap: 10px;
        }

        .refresh-btn,
        .logout-btn {
          border: 0;
          padding: 10px 16px;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
        }

        .refresh-btn {
          background: #f0efff;
          color: #5b3df5;
        }

        .logout-btn {
          background: #171827;
          color: white;
        }

        .refresh-btn:hover {
          background: #e5e2ff;
        }

        .logout-btn:hover {
          opacity: 0.88;
        }

        /* MAIN */

        .admin-container {
          width: 88%;
          max-width: 1250px;
          margin: 0 auto;
          padding: 55px 0 80px;
        }

        .admin-header {
          margin-bottom: 32px;
        }

        .admin-label {
          color: #5b3df5;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 10px;
        }

        .admin-header h1 {
          margin: 0;
          font-size: clamp(30px, 5vw, 48px);
          letter-spacing: -2px;
          line-height: 1.1;
        }

        .admin-subtitle {
          color: #6d6f80;
          margin-top: 13px;
          font-size: 16px;
          max-width: 650px;
          line-height: 1.6;
        }

        /* STATS */

        .stats-grid {
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 35px;
        }

        .stat-card {
          background: white;
          border: 1px solid #e9eaf1;
          border-radius: 18px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 17px;
          box-shadow:
            0 8px 30px rgba(25, 25, 50, 0.04);
        }

        .stat-icon {
          width: 52px;
          height: 52px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0efff;
          font-size: 23px;
        }

        .stat-card p {
          margin: 0 0 5px;
          color: #77798b;
          font-size: 13px;
        }

        .stat-card h2 {
          margin: 0;
          font-size: 28px;
        }

        /* USERS */

        .users-section {
          background: white;
          border: 1px solid #e8e9f0;
          border-radius: 20px;
          overflow: hidden;
          box-shadow:
            0 10px 40px rgba(25, 25, 50, 0.05);
        }

        .section-heading {
          padding: 25px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #ececf2;
        }

        .section-heading h2 {
          margin: 0;
          font-size: 20px;
        }

        .section-heading p {
          margin: 5px 0 0;
          color: #858696;
          font-size: 13px;
        }

        .user-count {
          padding: 7px 12px;
          border-radius: 20px;
          background: #f1f0ff;
          color: #5b3df5;
          font-size: 12px;
          font-weight: 700;
        }

        /* TABLE */

        .table-wrapper {
          width: 100%;
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 750px;
        }

        th {
          background: #fafafe;
          color: #77798b;
          text-align: left;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.7px;
          padding: 15px 20px;
          white-space: nowrap;
        }

        td {
          padding: 17px 20px;
          border-top: 1px solid #f0f0f4;
          color: #4e5060;
          font-size: 13px;
        }

        tr:hover td {
          background: #fcfcff;
        }

        .number-cell {
          color: #a0a1ae;
          width: 40px;
        }

        .student-info {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #ece9ff;
          color: #5b3df5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .student-info strong {
          color: #222331;
          font-size: 13px;
        }

        .email {
          color: #5b3df5;
        }

        .role-badge {
          display: inline-flex;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
        }

        .student-role {
          background: #edf8f1;
          color: #27834a;
        }

        .admin-role {
          background: #fff1db;
          color: #a25b00;
        }

        /* STATES */

        .state-box {
          min-height: 250px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 35px;
          color: #77798b;
        }

        .state-box h3 {
          color: #222331;
          margin: 10px 0 5px;
        }

        .error-box {
          color: #b44b4b;
        }

        .error-icon,
        .empty-icon {
          font-size: 35px;
        }

        .retry-btn {
          margin-top: 12px;
          padding: 9px 16px;
          border: 0;
          border-radius: 9px;
          background: #5b3df5;
          color: white;
          cursor: pointer;
          font-weight: 600;
        }

        .loader {
          width: 32px;
          height: 32px;
          border: 3px solid #e4e2ff;
          border-top-color: #5b3df5;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin-bottom: 12px;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        /* RESPONSIVE */

        @media (max-width: 800px) {

          .admin-navbar {
            padding: 0 4%;
          }

          .admin-container {
            width: 92%;
            padding-top: 35px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .section-heading {
            align-items: flex-start;
            gap: 15px;
          }

          .refresh-btn {
            display: none;
          }

        }

        @media (max-width: 500px) {

          .admin-brand span {
            display: none;
          }

          .admin-brand h2 {
            font-size: 17px;
          }

          .admin-header h1 {
            letter-spacing: -1px;
          }

        }

      `}</style>

    </div>
  );
}

export default Admin;