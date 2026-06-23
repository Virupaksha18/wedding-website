import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #8b0000, #d4af37)",
        color: "#fff",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "15px",
        }}
      >
        Thank You ❤️
      </h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.8",
          fontSize: "1.1rem",
        }}
      >
        Your presence, love, and blessings mean the world to us.
        We are excited to celebrate this special occasion with
        our family and friends.
      </p>

      <div
        style={{
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <h3>Sunitha ❤️ Vinod kumar</h3>
        <p>25 December 2026</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "25px",
        }}
      >
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Instagram
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Facebook
        </a>

        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          YouTube
        </a>
      </div>

      <hr
        style={{
          border: "1px solid rgba(255,255,255,0.3)",
          margin: "20px auto",
          width: "80%",
        }}
      />

      <p
        style={{
          fontSize: "0.95rem",
          opacity: 0.9,
        }}
      >
        © 2026 Wedding Celebration | Made with ❤️
      </p>
    </footer>
  );
};

export default Footer;