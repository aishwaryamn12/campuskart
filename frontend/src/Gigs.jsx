function Gigs() {
  const gigsList = [
    { title: 'Logo Design', price: 300, seller: 'Riya S.' },
    { title: 'Assignment Help - Physics', price: 150, seller: 'Arjun K.' },
    { title: 'Video Editing (Reels)', price: 400, seller: 'Sana M.' },
    { title: 'Resume Design', price: 200, seller: 'Vikram T.' },
    { title: 'Python Tutoring (1 hr)', price: 250, seller: 'Priya N.' },
    { title: 'Instagram Poster Design', price: 180, seller: 'Rahul D.' },
  ];

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>Browse Gigs</h1>
      <p style={{ textAlign: 'center', color: '#555' }}>
        Real skills from real students — only in Mysuru colleges.
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        marginTop: '30px'
      }}>
        {gigsList.map((gig, index) => (
          <div key={index} style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '20px',
            width: '250px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
          }}>
            <h3>{gig.title}</h3>
            <p style={{ color: '#4B2E83', fontWeight: 'bold' }}>₹{gig.price}</p>
            <p style={{ fontSize: '14px', color: '#777' }}>by {gig.seller}</p>
            <button style={{
              width: '100%',
              padding: '8px',
              marginTop: '10px',
              backgroundColor: '#4B2E83',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              View Gig
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gigs;