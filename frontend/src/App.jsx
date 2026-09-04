function App() {
  return (
    <div style={{ fontFamily: 'Arial' }}>
      
      {/* Header / Navbar */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 30px',
        backgroundColor: '#4B2E83',
        color: 'white'
      }}>
        <h2 style={{ margin: 0 }}>🛒 CampusKart</h2>
        <nav>
          <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Gigs</a>
          <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '40px 20px' }}>
        <h1>Skills. Gigs. Students.</h1>
        <p>All in one place — only for Mysuru colleges.</p>
      </section>

      {/* Gig Listings Section */}
      <section style={{ padding: '20px 40px' }}>
        <h2>🔥 Popular Gigs</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          
          <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '15px', width: '220px' }}>
            <h3>Logo Design</h3>
            <p>Starting at ₹300</p>
          </div>

          <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '15px', width: '220px' }}>
            <h3>Assignment Help</h3>
            <p>Starting at ₹150</p>
          </div>

          <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '15px', width: '220px' }}>
            <h3>Video Editing</h3>
            <p>Starting at ₹400</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;