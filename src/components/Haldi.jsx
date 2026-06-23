import React from "react";

const Haldi = () => {
  const haldiDate = new Date("2026-06-24T10:00:00");
  const currentDate = new Date();

  const eventStarted = currentDate >= haldiDate;

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "40px 10px",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/images/haldi-bg.jpg')",
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
          maxWidth: "700px",
          width: "95%",
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(15px)",
          borderRadius: "30px",
          padding: "35px 20px",
          textAlign: "center",
          border: "2px solid #f1c40f",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            color: "#f1c40f",
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            marginBottom: "15px",
          }}
        >
          💛 Haldi Ceremony
        </h1>

        <h2
          style={{
            fontSize: "clamp(1.4rem, 4vw, 2rem)",
            marginBottom: "20px",
          }}
        >
          Sunitha ❤️ Vinod Kumar
        </h2>

        <p
          style={{
            fontSize: "clamp(1rem, 3vw, 1.15rem)",
            lineHeight: "1.9",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Join us for the joyful Haldi ceremony filled
          with turmeric blessings, laughter, traditions,
          happiness and unforgettable family moments.
        </p>

        <div
          style={{
            marginTop: "35px",
            padding: "20px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "25px",
            width: "100%",
            maxWidth: "450px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h3>📅 24 June 2026</h3>

          <h3>⏰ 10:00 AM</h3>

          <h3>📍 Fathepur Tq and Dis Raichur</h3>

          <p
            style={{
              fontSize: "1rem",
              color: "#ddd",
            }}
          >
        
          </p>
        </div>

        {!eventStarted ? (
          <div style={{ marginTop: "40px" }}>
            <h2
              style={{
                color: "#FFD700",
              }}
            >
              🚫 Event Not Started Yet
            </h2>

            <p
              style={{
                marginTop: "15px",
                lineHeight: "1.8",
                color: "#f5f5f5",
              }}
            >
              Photos and videos will be available
              after the Haldi ceremony begins.
            </p>
          </div>
        ) : (
          <div style={{ marginTop: "50px" }}>
            <h2
              style={{
                color: "#FFD700",
              }}
            >
              📷 Haldi Memories
            </h2>

            <p
              style={{
                marginBottom: "20px",
              }}
            >
              Scan the QR code or click the button
              below to view all Haldi photos
              and videos.
            </p>

            <img
              src="/images/haldi-qr.png"
              alt="Haldi QR"
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
                href="YOUR_HALDI_DRIVE_LINK"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  style={{
                    marginTop: "25px",
                    padding: "15px 35px",
                    border: "none",
                    borderRadius: "50px",
                    background: "#f1c40f",
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    cursor: "pointer",
                  }}
                >
                  📸 View Haldi Photos & Videos
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Haldi;