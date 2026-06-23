
import React from "react";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();

  const events = [
    {
      title: "Engagement",
      emoji: "💍",
      date: "04 May 2026",
      time: "10:00 AM",
      color: "#8e44ad",
      route: "engagement",
    },
    {
      title: "Mehendi",
      emoji: "🌿",
      date: "23 June 2026",
      time: "4:00 PM",
      color: "#27ae60",
      route: "mehendi",
    },
    {
      title: "Haldi",
      emoji: "💛",
      date: "24 June 2026",
      time: "10:00 AM",
      color: "#f1c40f",
      route: "haldi",
    },
    {
      title: "Wedding",
      emoji: "👰",
      date: "25 June 2026",
      time: "8:00 AM",
      color: "#c0392b",
      route: "wedding",
    },
    {
      title: "Reception",
      emoji: "🎉",
      date: "27 June 2026",
      time: "6:00 PM",
      color: "#e91e63",
      route: "reception",
    },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "60px 15px",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/images/events-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h1
          style={{
            color: "#FFD700",
            fontSize: "clamp(2rem,5vw,3.5rem)",
            marginBottom: "10px",
          }}
        >
          ✨ Wedding Events ✨
        </h1>

        <p
          style={{
            color: "#fff",
            fontSize: "1.3rem",
          }}
        >
          Sunitha ❤️ Vinod Kumar
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {events.map((event, index) => (
          <div
            key={index}
            onClick={() => navigate(`/${event.route}`)}
            style={{
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(15px)",
              borderRadius: "25px",
              padding: "30px 20px",
              textAlign: "center",
              border: `2px solid ${event.color}`,
              color: "#fff",
              cursor: "pointer",
              transition: "0.3s",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-8px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
            }}
          >
            <div
              style={{
                fontSize: "4rem",
                marginBottom: "15px",
              }}
            >
              {event.emoji}
            </div>

            <h2
              style={{
                color: event.color,
                fontSize: "1.8rem",
                marginBottom: "15px",
              }}
            >
              {event.title}
            </h2>

            <p
              style={{
                fontSize: "1rem",
                marginBottom: "8px",
              }}
            >
              📅 {event.date}
            </p>

            <p
              style={{
                fontSize: "1rem",
                marginBottom: "20px",
              }}
            >
              ⏰ {event.time}
            </p>

            <button
              style={{
                padding: "12px 25px",
                border: "none",
                borderRadius: "50px",
                background: event.color,
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "0.95rem",
              }}
            >
              View Details →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
