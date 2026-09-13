import { Link } from 'react-router-dom';

export const gigsList = [
  {
    id: 1,
    title: 'Logo Design',
    price: 300,
    seller: 'Aishwarya & Jahnavi',
    category: 'DESIGN',
    icon: '🎨',
    badge: 'POPULAR',
    description:
      'Unique and professional logos for projects, startups, clubs, events, and personal brands.'
  },
  {
    id: 2,
    title: 'Assignment Help',
    price: 150,
    seller: 'Aishwarya & Jahnavi',
    category: 'ACADEMIC',
    icon: '📚',
    badge: 'ACADEMIC',
    description:
      'Get help understanding assignments, reports, presentations, and subject-related work.'
  },
  {
    id: 3,
    title: 'Video Editing',
    price: 400,
    seller: 'Aishwarya & Jahnavi',
    category: 'VIDEO',
    icon: '🎬',
    badge: 'TRENDING',
    description:
      'Creative video editing for college projects, events, presentations, YouTube videos, and more.'
  },
  {
    id: 4,
    title: 'Resume Design',
    price: 200,
    seller: 'Aishwarya & Jahnavi',
    category: 'CAREER',
    icon: '📄',
    badge: 'CAREER',
    description:
      'Clean and professional resume designs to help students stand out during internships and placements.'
  },
  {
    id: 5,
    title: 'Python Tutoring',
    price: 250,
    seller: 'Aishwarya & Jahnavi',
    category: 'LEARNING',
    icon: '🐍',
    badge: 'LEARN',
    description:
      'One-to-one Python guidance for beginners, college assignments, exams, and project preparation.'
  },
  {
    id: 6,
    title: 'Instagram Poster Design',
    price: 180,
    seller: 'Aishwarya & Jahnavi',
    category: 'CREATIVE',
    icon: '🖼️',
    badge: 'CREATIVE',
    description:
      'Eye-catching posters for college fests, events, clubs, announcements, and social media.'
  }
];

function Gigs() {
  return (
    <div className="services-page">

      <style>{`

        * {
          box-sizing: border-box;
        }

        .services-page {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(123, 76, 218, 0.08),
              transparent 28%
            ),
            radial-gradient(
              circle at 90% 30%,
              rgba(236, 72, 153, 0.06),
              transparent 25%
            ),
            #faf9ff;

          color: #241b38;
          padding-bottom: 70px;
        }

        /* =========================
           HERO
        ========================= */

        .services-hero {
          text-align: center;
          padding: 75px 20px 45px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          padding: 9px 16px;
          border-radius: 30px;

          background: #eee8ff;
          color: #6237bd;

          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.7px;
        }

        .services-hero h1 {
          margin: 22px 0 12px;

          font-size: clamp(40px, 6vw, 64px);
          line-height: 1.05;
          letter-spacing: -2.5px;

          color: #201735;
        }

        .services-hero h1 span {
          color: #6b3dd0;
        }

        .services-hero p {
          max-width: 650px;
          margin: auto;

          color: #81798b;
          font-size: 16px;
          line-height: 1.7;
        }

        .provider-line {
          margin-top: 18px;

          color: #6237bd;
          font-size: 14px;
          font-weight: 700;
        }

        /* =========================
           SERVICES GRID
        ========================= */

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 15px 25px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        /* =========================
           CARD
        ========================= */

        .service-card {
          position: relative;

          padding: 25px;

          min-height: 330px;

          border-radius: 22px;
          border: 1px solid #e8e1f1;

          background: rgba(255,255,255,0.9);

          box-shadow:
            0 10px 30px rgba(53, 37, 86, 0.06);

          display: flex;
          flex-direction: column;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;

          overflow: hidden;
        }

        .service-card::before {
          content: "";

          position: absolute;

          width: 150px;
          height: 150px;

          border-radius: 50%;

          background: #f1ebff;

          top: -75px;
          right: -65px;

          opacity: 0.6;
        }

        .service-card:hover {
          transform: translateY(-7px);

          box-shadow:
            0 22px 45px rgba(62, 42, 100, 0.12);

          border-color: #d5c6ec;
        }

        /* =========================
           CARD TOP
        ========================= */

        .card-top {
          position: relative;
          z-index: 2;

          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .service-icon {
          width: 58px;
          height: 58px;

          border-radius: 17px;

          background: #f0eaff;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 27px;

          box-shadow:
            0 8px 18px rgba(89, 53, 159, 0.08);
        }

        .service-badge {
          padding: 7px 10px;

          border-radius: 20px;

          background: #fff0f5;

          color: #d04476;

          font-size: 9px;
          font-weight: 800;

          letter-spacing: 0.5px;
        }

        /* =========================
           CONTENT
        ========================= */

        .category {
          margin-top: 20px;

          color: #7650c6;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 1.2px;
        }

        .service-card h2 {
          margin: 7px 0 9px;

          font-size: 21px;

          letter-spacing: -0.4px;

          color: #251a3a;
        }

        .service-description {
          margin: 0;

          color: #7e7687;

          font-size: 13px;

          line-height: 1.65;
        }

        /* =========================
           PRICE
        ========================= */

        .service-bottom {
          margin-top: auto;
        }

        .price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-top: 20px;
          margin-bottom: 13px;
        }

        .price {
          color: #5e32ba;

          font-size: 21px;

          font-weight: 800;
        }

        .price-label {
          color: #aaa1b1;

          font-size: 10px;
        }

        /* =========================
           PROVIDER
        ========================= */

        .provider {
          display: flex;
          align-items: center;

          gap: 9px;

          margin-bottom: 15px;

          color: #6f6779;

          font-size: 11px;
        }

        .provider-icon {
          width: 27px;
          height: 27px;

          border-radius: 50%;

          background: #eee8ff;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 12px;
        }

        .provider strong {
          color: #4d3a6d;
        }

        /* =========================
           BUTTON
        ========================= */

        .view-button {
          width: 100%;

          display: block;

          padding: 12px;

          text-align: center;

          border-radius: 11px;

          background:
            linear-gradient(
              135deg,
              #542bb5,
              #8050df
            );

          color: white;

          font-size: 13px;

          font-weight: 750;

          box-shadow:
            0 9px 20px rgba(84, 43, 181, 0.2);

          transition: 0.2s;
        }

        .view-button:hover {
          transform: translateY(-1px);

          box-shadow:
            0 12px 25px rgba(84, 43, 181, 0.28);
        }

        /* =========================
           BOTTOM CTA
        ========================= */

        .requirements {
          max-width: 1200px;

          margin: 55px auto 0;

          padding: 0 25px;
        }

        .requirements-box {
          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 30px;

          padding: 30px 35px;

          border-radius: 22px;

          background:
            linear-gradient(
              135deg,
              #49259e,
              #7041d1
            );

          color: white;

          box-shadow:
            0 18px 40px rgba(67, 37, 139, 0.18);
        }

        .requirements-text {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .requirements-icon {
          width: 55px;
          height: 55px;

          flex-shrink: 0;

          border-radius: 15px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: rgba(255,255,255,0.14);

          font-size: 25px;
        }

        .requirements h3 {
          margin: 0;

          font-size: 20px;
        }

        .requirements p {
          margin: 6px 0 0;

          color: rgba(255,255,255,0.7);

          font-size: 12px;
        }

        .contact-link {
          padding: 12px 18px;

          border-radius: 10px;

          background: white;

          color: #5430ad;

          font-size: 12px;

          font-weight: 750;

          white-space: nowrap;

          text-decoration: none;

          cursor: pointer;

          transition: 0.2s;
        }

        .contact-link:hover {
          transform: translateY(-2px);

          box-shadow:
            0 8px 18px rgba(0, 0, 0, 0.15);
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 900px) {

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .requirements-box {
            flex-direction: column;
            align-items: flex-start;
          }

        }

        @media (max-width: 600px) {

          .services-hero {
            padding: 55px 20px 35px;
          }

          .services-hero h1 {
            font-size: 40px;
          }

          .services-hero p {
            font-size: 14px;
          }

          .services-container {
            padding: 10px 18px;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-card {
            min-height: 315px;
          }

          .requirements {
            padding: 0 18px;
          }

          .requirements-box {
            padding: 25px;
          }

          .requirements-text {
            align-items: flex-start;
          }

          .contact-link {
            width: 100%;
            text-align: center;
          }

        }

      `}</style>


      {/* HERO */}

      <section className="services-hero">

        <div className="hero-badge">
          🎓 CAMPUSKART • STUDENT SERVICES
        </div>

        <h1>
          Your Ideas.
          <span> Our Skills.</span>
        </h1>

        <p>
          Projects, designs, edits and more — get the support
          you need for your college journey, all in one place.
        </p>

        <div className="provider-line">
          💜 Services by Aishwarya & Jahnavi
        </div>

      </section>


      {/* SERVICES */}

      <main className="services-container">

        <div className="services-grid">

          {gigsList.map((gig) => (

            <article
              className="service-card"
              key={gig.id}
            >

              <div className="card-top">

                <div className="service-icon">
                  {gig.icon}
                </div>

                <div className="service-badge">
                  {gig.badge}
                </div>

              </div>


              <div className="category">
                {gig.category}
              </div>


              <h2>
                {gig.title}
              </h2>


              <p className="service-description">
                {gig.description}
              </p>


              <div className="service-bottom">

                <div className="price-row">

                  <div className="price">
                    ₹{gig.price}

                    {gig.id === 5 && (
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '600'
                        }}
                      >
                        {' '} / hour
                      </span>
                    )}

                    {gig.id !== 5 && (
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '600'
                        }}
                      >
                        {' '} onwards
                      </span>
                    )}

                  </div>

                  <div className="price-label">
                    STUDENT FRIENDLY
                  </div>

                </div>


                <div className="provider">

                  <div className="provider-icon">
                    👩‍💻
                  </div>

                  <span>
                    By <strong>{gig.seller}</strong>
                  </span>

                </div>


                <Link
                  to={`/gigs/${gig.id}`}
                  className="view-button"
                >
                  View Service →
                </Link>

              </div>

            </article>

          ))}

        </div>

      </main>


      {/* CONTACT CTA */}

      <section className="requirements">

        <div className="requirements-box">

          <div className="requirements-text">

            <div className="requirements-icon">
              💡
            </div>

            <div>

              <h3>
                Have a different requirement?
              </h3>

              <p>
                Tell us what you need — Aishwarya & Jahnavi
                will help you find the right solution.
              </p>

            </div>

          </div>


          {/* WHATSAPP CONTACT BUTTON */}

          <a
            href="https://wa.me/919980044289?text=Hi%20Aishwarya%20%26%20Jahnavi%2C%20I%27m%20interested%20in%20CampusKart%20services.%20I%20would%20like%20to%20know%20more."
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            💬 Contact Us
          </a>

        </div>

      </section>

    </div>
  );
}

export default Gigs;