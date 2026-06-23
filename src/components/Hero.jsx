import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations";

const Hero = () => {
  const navigate = useNavigate();

  const { language, setLanguage } =
    useContext(LanguageContext);

  const t = translations[language];

  const startMusic = () => {
    const music =
      document.getElementById("weddingMusic");

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
        position: "relative",
      }}
    >
      {/* Language Switch */}
      <button
        onClick={() =>
          setLanguage(
            language === "en" ? "kn" : "en"
          )
        }
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 20px",
          borderRadius: "30px",
          border: "none",
          cursor: "pointer",
          background: "#FFD700",
          color: "#000",
          fontWeight: "bold",
        }}
      >
        {language === "en"
          ? "ಕನ್ನಡ"
          : "English"}
      </button>

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
          {t.welcome}
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
          {t.request || "Request The Pleasure Of Your Company"}
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
              "linear-gradient(135deg,#FFD700,#D4AF37)",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            fontSize: "1.1rem",
            fontWeight: "bold",
          }}
        >
          {t.invitation} ✨
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
          {t.footerText ||
            "Click to begin the wedding journey ❤️"}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;