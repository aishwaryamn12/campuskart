import { useParams, Link } from 'react-router-dom';
import { gigsList } from './Gigs';

function GigDetail() {
  const { id } = useParams();
  const gig = gigsList.find((g) => g.id === parseInt(id));

  if (!gig) {
    return <p style={{ textAlign: 'center', padding: '40px' }}>Gig not found.</p>;
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto' }}>
      <Link to="/gigs" style={{ color: '#4B2E83' }}>← Back to Gigs</Link>

      <h1 style={{ marginTop: '20px' }}>{gig.title}</h1>
      <p style={{ color: '#777' }}>by {gig.seller}</p>
      <h2 style={{ color: '#4B2E83' }}>₹{gig.price}</h2>

      <p style={{ marginTop: '20px', lineHeight: '1.6' }}>{gig.description}</p>

      <button style={{
        padding: '12px 24px',
        marginTop: '20px',
        backgroundColor: '#4B2E83',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px'
      }}>
        Contact Seller
      </button>
    </div>
  );
}

export default GigDetail;