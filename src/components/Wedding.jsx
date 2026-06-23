
import React from "react";

const Wedding = () => {
  const weddingDate = new Date("2026-06-25T08:00:00");
  const currentDate = new Date();

  const eventStarted = currentDate >= weddingDate;

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "40px 10px",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/images/invitation-card.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "950px",
          width: "100%",
          margin: "auto",
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          borderRadius: "30px",
          padding: "50px 25px",
          textAlign: "center",
          border: "2px solid #FFD700",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            color: "#FFD700",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <span>👰</span>
          <span>Wedding Ceremony</span>
          <span>🤵</span>
        </h1>

        <h2
          style={{
            fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
            color: "#fff",
            marginBottom: "25px",
            fontWeight: "bold",
          }}
        >
          Sunitha ❤️ Vinod Kumar
        </h2>

        <p
          style={{
            fontSize: "clamp(1rem, 3vw, 1.2rem)",
            lineHeight: "1.9",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          With the blessings of our families,
          we invite you to witness the sacred
          union of our hearts as we begin
          a beautiful journey together.
        </p>

        {/* Wedding Poster */}
        <div
          style={{
            marginTop: "35px",
            borderRadius: "20px",
            overflow: "hidden",
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          }}
        >
          <img
            src="/images/invitation.png"
            alt="Wedding Invitation"
            style={{
              width: "100%",
              display: "block",
            }}
          />
        </div>

        {/* Event Details */}
        <div
          style={{
            marginTop: "35px",
            padding: "25px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "25px",
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h3>📅 25 June 2026</h3>

          <h3>⏰ 8:00 AM - 9:00 AM</h3>

          <h3>📍 T.T.D Functional Hall</h3>

          <p
            style={{
              fontSize: "1rem",
              color: "#ddd",
            }}
          >
            Mantralayam, Kurnool District
          </p>
        </div>

        {!eventStarted ? (
          <div style={{ marginTop: "40px" }}>
            <h2
              style={{
                color: "#FFD700",
                marginBottom: "15px",
              }}
            >
              🚫 Event Not Started Yet
            </h2>

            <p
              style={{
                fontSize: "1.1rem",
                color: "#f5f5f5",
              }}
            >
              Wedding photos and videos will be available
              after the wedding ceremony begins.
            </p>
          </div>
        ) : (
          <div style={{ marginTop: "50px" }}>
            <h2
              style={{
                color: "#FFD700",
                marginBottom: "15px",
              }}
            >
              📷 Wedding Memories
            </h2>

            <p
              style={{
                marginBottom: "20px",
              }}
            >
              Scan the QR code or click the button below
              to view all wedding photos and videos.
            </p>

            <img
              src="/images/wedding-qr.png"
              alt="Wedding QR"
              style={{
                width: "250px",
                maxWidth: "100%",
                background: "#fff",
                padding: "12px",
                borderRadius: "15px",
              }}
            />

            <div>
              <a
                href="YOUR_WEDDING_DRIVE_LINK"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  style={{
                    marginTop: "25px",
                    padding: "15px 35px",
                    border: "none",
                    borderRadius: "50px",
                    background:
                      "linear-gradient(135deg,#FFD700,#D4AF37)",
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    cursor: "pointer",
                    boxShadow:
                      "0 8px 20px rgba(0,0,0,0.25)",
                  }}
                >
                  📸 View Wedding Photos & Videos
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Wedding;
