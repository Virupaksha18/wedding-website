import React from "react";

const Mehendi = () => {
  const mehendiDate = new Date("2026-06-23T16:00:00");
  const currentDate = new Date();

  const eventStarted = currentDate >= mehendiDate;

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "40px 10px",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/images/mehendi-bg.jpg')",
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
          boxSizing: "border-box",
          overflow: "hidden",
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          borderRadius: "30px",
          padding: "35px 20px",
          textAlign: "center",
          border: "2px solid #27ae60",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            color: "#2ecc71",
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            marginBottom: "15px",
            lineHeight: "1.3",
            wordBreak: "break-word",
          }}
        >
          🌿 Mehendi Ceremony
        </h1>

        <h2
          style={{
            fontSize: "clamp(1.4rem, 4vw, 2rem)",
            marginBottom: "20px",
            color: "#fff",
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
          Join us as we celebrate the vibrant Mehendi
          ceremony filled with colors, happiness,
          music, laughter and family blessings.
        </p>

        {/* Event Details */}
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
            boxSizing: "border-box",
          }}
        >
          <h3>📅 23 June 2026</h3>

          <h3>⏰ 4:00 PM</h3>

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
              after the Mehendi ceremony begins.
            </p>
          </div>
        ) : (
          <div style={{ marginTop: "50px" }}>
            <h2
              style={{
                color: "#FFD700",
              }}
            >
              📷 Mehendi Memories
            </h2>

            <p
              style={{
                marginBottom: "20px",
              }}
            >
              Scan the QR code or click the button
              below to view all Mehendi photos
              and videos.
            </p>

            <img
              src="/images/mehendi-qr.png"
              alt="Mehendi QR"
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
                href="https://drive.google.com/drive/folders/1MdYLgm2yhIIA2GhfxQ1SnbTxN0brDGec"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  style={{
                    marginTop: "25px",
                    padding: "15px 35px",
                    border: "none",
                    borderRadius: "50px",
                    background: "#27ae60",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    cursor: "pointer",
                    boxShadow:
                      "0 8px 20px rgba(0,0,0,0.25)",
                  }}
                >
                  📸 View Mehendi Photos & Videos
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Mehendi;