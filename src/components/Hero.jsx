import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const startMusic = () => {
    const music = document.getElementById("weddingMusic");

    if (music) {
      music.play();
    }

    navigate("/countdown");
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/images/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            letterSpacing: "5px",
            textTransform: "uppercase",
            marginBottom: "20px",
            fontSize: "1rem",
            color: "#FFD700",
            fontWeight: "600",
          }}
        >
          Together With Their Families
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "3.5rem",
            fontFamily: "cursive",
            marginBottom: "5px",
            color: "#fff",
            textShadow: "3px 3px 15px rgba(0,0,0,0.8)",
          }}
        >
          Sunitha
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            fontSize: "2rem",
            color: "#FFD700",
            margin: "10px 0",
          }}
        >
          &
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "3.5rem",
            fontFamily: "cursive",
            marginBottom: "25px",
            color: "#fff",
            textShadow: "3px 3px 15px rgba(0,0,0,0.8)",
          }}
        >
          Vinod Kumar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            fontSize: "1.4rem",
            marginBottom: "20px",
          }}
        >
          Request The Pleasure Of Your Company
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            fontSize: "1.1rem",
            marginBottom: "40px",
            color: "#f5f5f5",
          }}
        >
          💍 25 June 2026 | 8:00 AM - 9:00 AM
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={startMusic}
          style={{
            padding: "16px 40px",
            background:
              "linear-gradient(135deg, #FFD700, #D4AF37)",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            fontSize: "1.1rem",
            fontWeight: "bold",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          }}
        >
          Open Invitation ✨
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            marginTop: "25px",
            fontSize: "0.95rem",
            color: "#ddd",
          }}
        >
          Click to begin the wedding journey ❤️
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;