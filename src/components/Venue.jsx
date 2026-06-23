import React from "react";

const Venue = () => {
  return (
    <section
      style={{
        padding: "100px 20px",
        background: "#fff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          color: "#b8860b",
          marginBottom: "15px",
        }}
      >
        Wedding Venue 📍
      </h2>

      <p
        style={{
          color: "#666",
          marginBottom: "50px",
          fontSize: "1.1rem",
        }}
      >
        We look forward to celebrating this special day with you.
      </p>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          background: "#fffaf5",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h3
          style={{
            color: "#8b0000",
            marginBottom: "20px",
            fontSize: "2rem",
          }}
        >
          T.T.D Functional Hall
        </h3>

        <p
          style={{
            fontSize: "1.1rem",
            color: "#555",
            marginBottom: "10px",
          }}
        >
          📍 Mantralaya, Karnool
        </p>

        <p
          style={{
            fontSize: "1.1rem",
            color: "#555",
            marginBottom: "30px",
          }}
        >
          🕙 25 December 2026 | 8:00 to 9:00 AM
        </p>

        {/* Google Map */}
        <div
          style={{
            borderRadius: "15px",
            overflow: "hidden",
            marginBottom: "30px",
          }}
        >
          <iframe
            title="Wedding Venue"
            src="https://maps.google.com/maps?q=T.T.D%20Function%20Hall%20Mantralayam&t=&z=17&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://maps.app.goo.gl/tuf287uheiT1CWFG7"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              background: "#d4af37",
              color: "#fff",
              padding: "14px 30px",
              borderRadius: "30px",
              fontWeight: "bold",
            }}
          >
            Get Directions 🚗
          </a>

          <a
            href="tel:+919999999999"
            style={{
              textDecoration: "none",
              background: "#8b0000",
              color: "#fff",
              padding: "14px 30px",
              borderRadius: "30px",
              fontWeight: "bold",
            }}
          >
            Contact Venue 📞
            9353376332,
            9019163686,
            7975268842,
            9902008444.
          </a>
        </div>
      </div>
    </section>
  );
};

export default Venue;