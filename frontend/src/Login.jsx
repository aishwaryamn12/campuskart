import { useState } from 'react';

function Login() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div style={{
      maxWidth: '350px',
      margin: '60px auto',
      padding: '30px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      fontFamily: 'Arial',
      textAlign: 'center'
    }}>
      <h2>{isSignup ? 'Create Account' : 'Login'} to CampusKart</h2>

      {isSignup && (
        <input type="text" placeholder="Full Name" style={inputStyle} />
      )}
      <input type="email" placeholder="College Email" style={inputStyle} />
      <input type="password" placeholder="Password" style={inputStyle} />

      <button style={buttonStyle}>
        {isSignup ? 'Sign Up' : 'Login'}
      </button>

      <p style={{ marginTop: '15px', fontSize: '14px' }}>
        {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
        <span
          onClick={() => setIsSignup(!isSignup)}
          style={{ color: '#4B2E83', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {isSignup ? 'Login' : 'Sign Up'}
        </span>
      </p>
    </div>
  );
}

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ccc',
  boxSizing: 'border-box'
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#4B2E83',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '10px'
};

export default Login;