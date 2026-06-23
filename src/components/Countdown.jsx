import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Countdown = () => {
  const navigate = useNavigate();

  const weddingDate = new Date(
    "2026-06-25T08:00:00"
  ).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(
          distance / (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (distance %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance %
            (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "80px 20px",
        textAlign: "center",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/images/count-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          color: "#FFD700",
          marginBottom: "10px",
          fontFamily: "serif",
        }}
      >
        Sunitha & Vinod Kumar
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          marginBottom: "30px",
        }}
      >
        The Countdown To Forever Begins ❤️
      </p>

      <p
        style={{
          marginBottom: "40px",
          color: "#f5f5f5",
        }}
      >
        25 June 2026 • 8:00 AM - 9:00 AM
      </p>

      {/* Couple Image */}
      {/* <img
        src="/images/couple.png"
        alt="Bride and Groom"
        style={{
          width: "250px",
          maxWidth: "90%",
          borderRadius: "20px",
          border: "4px solid #FFD700",
          marginBottom: "40px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.4)",
        }}
      /> */}

      {/* Countdown Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <TimeCard
          value={timeLeft.days}
          label="Days"
        />

        <TimeCard
          value={timeLeft.hours}
          label="Hours"
        />

        <TimeCard
          value={timeLeft.minutes}
          label="Minutes"
        />

        <TimeCard
          value={timeLeft.seconds}
          label="Seconds"
        />
      </div>

      {/* Button */}
      <div style={{ marginTop: "50px" }}>
        <button
          onClick={() =>
            navigate("/invitation")
          }
          style={{
            padding: "18px 40px",
            background:
              "linear-gradient(135deg,#FFD700,#D4AF37)",
            border: "none",
            borderRadius: "50px",
            color: "#fff",
            fontSize: "1.1rem",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow:
              "0 10px 25px rgba(0,0,0,0.5)",
          }}
        >
          Open Wedding Invitation 💌
        </button>
      </div>
    </section>
  );
};

const TimeCard = ({ value, label }) => {
  return (
    <div
      style={{
        width: "160px",
        padding: "25px",
        background:
          "rgba(255,255,255,0.12)",
        backdropFilter: "blur(15px)",
        border:
          "1px solid rgba(255,255,255,0.2)",
        borderRadius: "20px",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.3)",
      }}
    >
      <h1
        style={{
          color: "#FFD700",
          fontSize: "3rem",
          margin: 0,
        }}
      >
        {value}
      </h1>

      <p
        style={{
          color: "#fff",
          fontWeight: "600",
          marginTop: "10px",
          fontSize: "1.1rem",
        }}
      >
        {label}
      </p>
    </div>
  );
};

export default Countdown;