import { Link } from 'react-router-dom';

export const gigsList = [
  { id: 1, title: 'Logo Design', price: 300, seller: 'Riya S.', description: 'I will design a clean, modern logo for your club, event, or personal brand. 2 revisions included.' },
  { id: 2, title: 'Assignment Help - Physics', price: 150, seller: 'Arjun K.', description: 'Help with physics assignments, numericals, and derivations. Delivered within 24 hours.' },
  { id: 3, title: 'Video Editing (Reels)', price: 400, seller: 'Sana M.', description: 'Instagram reel editing with transitions, music sync, and captions. Great for events and vlogs.' },
  { id: 4, title: 'Resume Design', price: 200, seller: 'Vikram T.', description: 'ATS-friendly resume design for internships and placements. Clean, professional templates.' },
  { id: 5, title: 'Python Tutoring (1 hr)', price: 250, seller: 'Priya N.', description: 'One-on-one Python basics tutoring — perfect for beginners preparing for exams or projects.' },
  { id: 6, title: 'Instagram Poster Design', price: 180, seller: 'Rahul D.', description: 'Eye-catching poster designs for college events, fests, and club promotions.' },
];

function Gigs() {
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
        {gigsList.map((gig) => (
          <div key={gig.id} style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '20px',
            width: '250px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
          }}>
            <h3>{gig.title}</h3>
            <p style={{ color: '#4B2E83', fontWeight: 'bold' }}>₹{gig.price}</p>
            <p style={{ fontSize: '14px', color: '#777' }}>by {gig.seller}</p>
            <Link to={`/gigs/${gig.id}`}>
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gigs;