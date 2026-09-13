import { useParams, Link } from 'react-router-dom';
import { gigsList } from './Gigs';

function GigDetail() {
  const { id } = useParams();

  const gig = gigsList.find(
    (g) => g.id === parseInt(id)
  );

  // WhatsApp numbers are kept private inside the code.
  // They are NOT displayed publicly on the website.
  const aishwaryaWhatsApp = '919980044289';
  const jahnaviWhatsApp = '918088710461';


  // =========================
  // WHATSAPP CONTACT
  // =========================

  const openWhatsApp = (person, number) => {

    const message =
      `Hi ${person}, I found the "${gig.title}" service on CampusKart. I would like to discuss my requirement.`;

    const whatsappURL =
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappURL,
      '_blank',
      'noopener,noreferrer'
    );
  };


  // =========================
  // SERVICE NOT FOUND
  // =========================

  if (!gig) {

    return (
      <div className="not-found">

        <div className="not-found-icon">
          🔍
        </div>

        <h2>
          Service not found
        </h2>

        <p>
          The service you are looking for
          does not exist.
        </p>

        <Link to="/gigs">
          ← Back to Services
        </Link>

      </div>
    );
  }


  return (

    <div className="detail-page">

      <style>{`

        * {
          box-sizing: border-box;
        }


        /* =========================
           PAGE
        ========================= */

        .detail-page {

          min-height: calc(100vh - 76px);

          padding:
            55px 20px 70px;

          background:
            radial-gradient(
              circle at 8% 10%,
              rgba(116, 70, 211, 0.10),
              transparent 30%
            ),
            radial-gradient(
              circle at 92% 85%,
              rgba(236, 72, 153, 0.08),
              transparent 30%
            ),
            #faf9ff;

          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Arial,
            sans-serif;

          color: #281c3d;
        }


        .detail-container {

          max-width: 1000px;

          margin: auto;
        }


        /* =========================
           BACK BUTTON
        ========================= */

        .back-link {

          display: inline-flex;

          align-items: center;

          gap: 7px;

          margin-bottom: 28px;

          color: #6339c1;

          text-decoration: none;

          font-size: 14px;

          font-weight: 700;

          transition: 0.2s;
        }


        .back-link:hover {

          transform:
            translateX(-4px);
        }


        /* =========================
           MAIN CARD
        ========================= */

        .detail-card {

          background: white;

          border:
            1px solid #e6e0ef;

          border-radius: 28px;

          overflow: hidden;

          box-shadow:
            0 25px 70px
            rgba(55, 37, 91, 0.10);
        }


        /* =========================
           TOP SECTION
        ========================= */

        .detail-top {

          padding:
            48px 35px 42px;

          text-align: center;

          background:
            linear-gradient(
              135deg,
              #f3edff,
              #ffffff
            );

          border-bottom:
            1px solid #eee9f4;
        }


        .service-icon {

          width: 82px;

          height: 82px;

          margin:
            0 auto 19px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 24px;

          background: #e9e0ff;

          font-size: 40px;

          box-shadow:
            0 12px 28px
            rgba(89, 52, 160, 0.10);
        }


        .category {

          display: inline-block;

          padding:
            7px 13px;

          border-radius: 20px;

          background: #ece5ff;

          color: #6238bd;

          font-size: 10px;

          font-weight: 850;

          letter-spacing: 1px;
        }


        .detail-top h1 {

          margin:
            18px 0 9px;

          font-size:
            clamp(38px, 6vw, 60px);

          line-height: 1.05;

          letter-spacing: -2.5px;

          color: #201632;
        }


        .provider {

          margin-top: 12px;

          color: #777080;

          font-size: 15px;
        }


        .provider strong {

          color: #6037bc;

          font-weight: 800;
        }


        .price {

          margin-top: 18px;

          color: #5c30b8;

          font-size: 29px;

          font-weight: 850;
        }


        .price small {

          margin-left: 5px;

          color: #8e8599;

          font-size: 12px;

          font-weight: 600;
        }


        /* =========================
           CONTENT
        ========================= */

        .detail-content {

          padding:
            40px;
        }


        .section-title {

          margin:
            0 0 12px;

          color: #291d40;

          font-size: 20px;

          letter-spacing: -0.3px;
        }


        .description {

          margin: 0;

          color: #746c7f;

          font-size: 15px;

          line-height: 1.8;
        }


        /* =========================
           WHAT YOU GET
        ========================= */

        .included {

          margin-top: 35px;
        }


        .included h3 {

          margin:
            0 0 16px;

          color: #2d2142;

          font-size: 18px;
        }


        .included-grid {

          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 12px;
        }


        .included-item {

          display: flex;

          align-items: center;

          gap: 10px;

          padding:
            13px 15px;

          border:
            1px solid #eee9f5;

          border-radius: 12px;

          background: #faf8ff;

          color: #62596d;

          font-size: 13px;
        }


        .check {

          width: 24px;

          height: 24px;

          flex-shrink: 0;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background: #e8f8ef;

          color: #20945a;

          font-size: 12px;

          font-weight: 800;
        }


        /* =========================
           CONTACT SECTION
        ========================= */

        .contact-box {

          margin-top: 38px;

          padding:
            32px 28px;

          border:
            1px solid #dfd5f1;

          border-radius: 22px;

          background:
            linear-gradient(
              135deg,
              #f1eaff,
              #faf8ff
            );

          text-align: center;
        }


        .contact-icon {

          width: 58px;

          height: 58px;

          margin:
            0 auto 13px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 17px;

          background: #e7dcff;

          font-size: 27px;
        }


        .contact-box h2 {

          margin: 0;

          color: #291d40;

          font-size: 23px;

          letter-spacing: -0.5px;
        }


        .contact-box > p {

          max-width: 620px;

          margin:
            9px auto 25px;

          color: #80778c;

          font-size: 13px;

          line-height: 1.65;
        }


        /* =========================
           CONTACT BUTTONS
        ========================= */

        .contact-buttons {

          display: grid;

          grid-template-columns:
            repeat(2, minmax(200px, 1fr));

          gap: 13px;

          max-width: 620px;

          margin: auto;
        }


        .contact-button {

          border: none;

          padding:
            14px 17px;

          border-radius: 12px;

          color: white;

          font-size: 13px;

          font-weight: 750;

          cursor: pointer;

          background:
            linear-gradient(
              135deg,
              #542bb5,
              #8050df
            );

          box-shadow:
            0 10px 22px
            rgba(84,43,181,0.20);

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }


        .contact-button:hover {

          transform:
            translateY(-2px);

          box-shadow:
            0 15px 28px
            rgba(84,43,181,0.27);
        }


        .contact-button.secondary {

          background:
            linear-gradient(
              135deg,
              #6537bd,
              #9361e5
            );
        }


        /* =========================
           TEAM
        ========================= */

        .team-note {

          margin-top: 20px;

          color: #948b9e;

          font-size: 11px;
        }


        .team-note strong {

          color: #6339c1;
        }


        /* =========================
           BRAND FOOTER
        ========================= */

        .brand-note {

          margin-top: 28px;

          text-align: center;

          color: #a39aaa;

          font-size: 11px;
        }


        /* =========================
           NOT FOUND
        ========================= */

        .not-found {

          min-height: 70vh;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          text-align: center;

          font-family: Arial;

          background: #faf9ff;

          padding: 30px;
        }


        .not-found-icon {

          font-size: 40px;

          margin-bottom: 10px;
        }


        .not-found h2 {

          margin: 0;

          color: #2c2140;
        }


        .not-found p {

          color: #82798b;
        }


        .not-found a {

          color: #6339c1;

          text-decoration: none;

          font-weight: 700;
        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 650px) {

          .detail-page {

            padding:
              30px 14px 55px;
          }


          .detail-top {

            padding:
              35px 20px;
          }


          .detail-top h1 {

            font-size: 39px;

            letter-spacing: -1.5px;
          }


          .detail-content {

            padding:
              27px 20px;
          }


          .included-grid {

            grid-template-columns: 1fr;
          }


          .contact-buttons {

            grid-template-columns: 1fr;
          }


          .contact-box {

            padding:
              27px 18px;
          }


          .contact-button {

            width: 100%;
          }

        }

      `}</style>


      <div className="detail-container">


        {/* =========================
            BACK
        ========================= */}

        <Link
          to="/gigs"
          className="back-link"
        >
          ← Back to Services
        </Link>


        <div className="detail-card">


          {/* =========================
              SERVICE HEADER
          ========================= */}

          <div className="detail-top">

            <div className="service-icon">
              {gig.icon}
            </div>


            <div className="category">
              {gig.category}
            </div>


            <h1>
              {gig.title}
            </h1>


            <div className="provider">
              💜 Service by{' '}
              <strong>
                Aishwarya & Jahnavi
              </strong>
            </div>


            <div className="price">

              ₹{gig.price}

              <small>
                {gig.id === 5
                  ? '/ hour'
                  : 'onwards'}
              </small>

            </div>

          </div>


          {/* =========================
              CONTENT
          ========================= */}

          <div className="detail-content">


            {/* DESCRIPTION */}

            <h2 className="section-title">
              About this service
            </h2>


            <p className="description">
              {gig.description}
            </p>


            {/* =========================
                INCLUDED
            ========================= */}

            <div className="included">

              <h3>
                ✨ What you can expect
              </h3>


              <div className="included-grid">

                <div className="included-item">

                  <span className="check">
                    ✓
                  </span>

                  Student-friendly pricing

                </div>


                <div className="included-item">

                  <span className="check">
                    ✓
                  </span>

                  Quality-focused work

                </div>


                <div className="included-item">

                  <span className="check">
                    ✓
                  </span>

                  Clear communication

                </div>


                <div className="included-item">

                  <span className="check">
                    ✓
                  </span>

                  Quick response

                </div>

              </div>

            </div>


            {/* =========================
                CONTACT
            ========================= */}

            <div className="contact-box">


              <div className="contact-icon">
                💬
              </div>


              <h2>
                Have a requirement?
              </h2>


              <p>
                Tell us what you need. Contact
                Aishwarya or Jahnavi directly on
                WhatsApp and discuss your project,
                design, editing or other requirement.
              </p>


              <div className="contact-buttons">


                {/* AISHWARYA */}

                <button
                  className="contact-button"
                  onClick={() =>
                    openWhatsApp(
                      'Aishwarya',
                      aishwaryaWhatsApp
                    )
                  }
                >
                  💬 Contact Aishwarya
                </button>


                {/* JAHNAVI */}

                <button
                  className="contact-button secondary"
                  onClick={() =>
                    openWhatsApp(
                      'Jahnavi',
                      jahnaviWhatsApp
                    )
                  }
                >
                  💬 Contact Jahnavi
                </button>


              </div>


              <div className="team-note">

                👩‍💻 CampusKart team:
                {' '}
                <strong>
                  Aishwarya & Jahnavi
                </strong>

              </div>

            </div>


            {/* BRAND */}

            <div className="brand-note">

              🎓 CampusKart • Your Ideas. Our Skills.

            </div>


          </div>

        </div>

      </div>

    </div>
  );
}

export default GigDetail;