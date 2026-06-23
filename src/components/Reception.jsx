import React from "react";

const Reception = () => {
  const receptionDate = new Date("2026-06-27T18:00:00");
  const currentDate = new Date();

  const eventStarted = currentDate >= receptionDate;

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "40px 10px",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/images/reception-bg.jpg')",
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
          border: "2px solid #e91e63",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            color: "#ff69b4",
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            marginBottom: "15px",
          }}
        >
          🎉 Wedding Reception
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
          Join us for an evening of celebration,
          joy, laughter and togetherness as we
          celebrate our wedding reception with
          family and friends.
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
          <h3>📅 27 June 2026</h3>

          <h3>⏰ 6:00 PM</h3>

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
            <h2 style={{ color: "#FFD700" }}>
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
              after the reception ceremony begins.
            </p>
          </div>
        ) : (
          <div style={{ marginTop: "50px" }}>
            <h2 style={{ color: "#FFD700" }}>
              📷 Reception Memories
            </h2>

            <p style={{ marginBottom: "20px" }}>
              Scan the QR code or click the button
              below to view all reception photos
              and videos.
            </p>

            <img
              src="/images/reception-qr.png"
              alt="Reception QR"
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
                href="YOUR_RECEPTION_DRIVE_LINK"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  style={{
                    marginTop: "25px",
                    padding: "15px 35px",
                    border: "none",
                    borderRadius: "50px",
                    background: "#e91e63",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    cursor: "pointer",
                  }}
                >
                  📸 View Reception Photos & Videos
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reception;