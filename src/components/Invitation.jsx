import React from "react";
import { useNavigate } from "react-router-dom";

const Invitation = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "80px 20px",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/images/invitation.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          width: "100%",
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(15px)",
          border: "2px solid rgba(255,215,0,0.4)",
          borderRadius: "30px",
          padding: "50px 30px",
          textAlign: "center",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
          color: "#fff",
        }}
      >
        <h3
          style={{
            color: "#FFD700",
            letterSpacing: "4px",
            marginBottom: "20px",
          }}
        >
          WEDDING INVITATION
        </h3>

        <div style={{ marginBottom: "25px" }}>
          <h1
            style={{
              fontSize: "3rem",
              color: "#FFD700",
              fontFamily: "'Great Vibes', cursive",
              margin: 0,
            }}
          >
            Sunitha
          </h1>

          <div
            style={{
              fontSize: "2rem",
              margin: "10px 0",
            }}
          >
            ❤️
          </div>

          <h1
            style={{
              fontSize: "3rem",
              color: "#FFD700",
              fontFamily: "'Great Vibes', cursive",
              margin: 0,
            }}
          >
            Vinod Kumar
          </h1>
        </div>

        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: "1.8",
            color: "#f5f5f5",
            marginBottom: "35px",
          }}
        >
          Together with our families, we warmly invite you to
          celebrate our wedding and bless us as we begin a new
          chapter of love, happiness and togetherness.
        </p>

        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.2)",
            padding: "30px",
            borderRadius: "20px",
            marginBottom: "35px",
          }}
        >
          <h2
            style={{
              color: "#FFD700",
              marginBottom: "20px",
            }}
          >
            💍 Wedding Ceremony
          </h2>

          <p>
            📅 <strong>Thursday, 25 June 2026</strong>
          </p>

          <p>
            ⏰ <strong>8:00 AM – 9:00 AM</strong>
          </p>

          <p>
            📍 <strong>T.T.D Functional Hall</strong>
          </p>

          <p>Mantralayam, Kurnool District</p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => navigate("/events")}
            style={{
              padding: "15px 30px",
              background:
                "linear-gradient(135deg,#FFD700,#D4AF37)",
              color: "#fff",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            View Events ✨
          </button>

          <button
            onClick={() => navigate("/invitation-card")}
            style={{
              padding: "15px 30px",
              background:
                "linear-gradient(135deg,#8B0000,#B22222)",
              color: "#fff",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Download Invitation 📜
          </button>
        </div>

        <p
          style={{
            marginTop: "35px",
            fontStyle: "italic",
            color: "#eee",
          }}
        >
          "Your presence and blessings will make our
          celebration even more special."
        </p>
      </div>
    </section>
  );
};

export default Invitation;