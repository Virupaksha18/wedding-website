import React from "react";

const Engagement = () => {
  const engagementDate = new Date("2026-05-04T10:00:00");
  const currentDate = new Date();

  const eventStarted = currentDate >= engagementDate;

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "80px 20px",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.70), rgba(0,0,0,0.70)), url('/images/engagement-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "auto",
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(15px)",
          borderRadius: "30px",
          padding: "40px 25px",
          textAlign: "center",
          border: "2px solid #8e44ad",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            color: "#d291ff",
            fontSize: "2.5rem",
            lineHeight: "1.3",
            marginBottom: "20px",
          }}
        >
          💍 Engagement Ceremony
        </h1>

        {/* Couple Names */}
        <h2
          style={{
            fontSize: "2rem",
            color: "#fff",
            marginBottom: "25px",
          }}
        >
          Sunitha ❤️ Vinod Kumar
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: "2",
            maxWidth: "550px",
            margin: "0 auto",
            color: "#f5f5f5",
          }}
        >
          The beautiful beginning of our forever journey.
          We are delighted to share the memories of our
          engagement ceremony with our beloved family
          and friends.
        </p>

        {/* Event Details */}
        <div
          style={{
            marginTop: "35px",
            padding: "25px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "20px",
          }}
        >
          <h3>📅 04 May 2026</h3>

          <h3>⏰ 10:00 AM</h3>

          <h3>📍 Fatehpur, Raichur District</h3>
        </div>

        {/* Event Not Started */}
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
              Photos and videos will be available once
              the engagement ceremony begins.
            </p>
          </div>
        ) : (
          <div style={{ marginTop: "40px" }}>
            <h2
              style={{
                color: "#FFD700",
                marginBottom: "15px",
              }}
            >
              📷 Engagement Memories
            </h2>

            <p
              style={{
                color: "#f5f5f5",
              }}
            >
              Scan the QR code below or click the button
              to view engagement photos and videos.
            </p>

            <div
              style={{
                marginTop: "25px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              {/* QR Code */}
              <img
                src="/images/engagement-qr.png"
                alt="Engagement QR"
                style={{
                  width: "250px",
                  maxWidth: "100%",
                  borderRadius: "15px",
                  background: "#fff",
                  padding: "10px",
                }}
              />

              <p
                style={{
                  color: "#FFD700",
                  fontWeight: "bold",
                }}
              >
                Scan QR Code To View Photos & Videos
              </p>

              {/* Photos Button */}
              <a
                href="https://drive.google.com/drive/folders/1RaF_t-Rfd6MscyJRoJ70tbwxfMv1iZ61"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                }}
              >
                <button
                  style={{
                    padding: "15px 35px",
                    border: "none",
                    borderRadius: "50px",
                    background:
                      "linear-gradient(135deg,#8e44ad,#c471ed)",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    cursor: "pointer",
                    boxShadow:
                      "0 8px 20px rgba(0,0,0,0.25)",
                  }}
                >
                  📸 Click Here To View Engagement
                  Photos & Videos
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Engagement;