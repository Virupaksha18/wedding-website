import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

const InvitationCard = () => {
  const [opened, setOpened] = useState(false);
  const [showBlast, setShowBlast] = useState(false);

  const openInvitation = () => {
  setOpened(true);
  setShowBlast(true);

  const music =
    document.getElementById("weddingMusic");

  if (music) {
    music.play();
  }

  setTimeout(() => {
    setShowBlast(false);
  }, 6000);
};

  const flowers = [
  "🌸","🌹","🌺","🌷",
  "✨","❤️","💖"
];
  const balloons = ["🎈", "🎈", "🎈", "❤️","🎉"];

  return (
    <div
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
        background:
          "linear-gradient(135deg,#fff0f5,#fffaf0,#fff5ee)",
      }}
    >
      <audio id="weddingMusic" src="/music.mp3" loop/>


      {showBlast && <Confetti numberOfPieces={1200} recycle={false} />}

      {/* Floating Flowers */}
      {opened &&
        flowers.map((flower, index) => (
          <motion.div
            key={index}
            initial={{
              y: -100,
              x: Math.random() * window.innerWidth,
            }}
            animate={{
              y: window.innerHeight + 100,
              rotate: 360,
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
            }}
            style={{
              position: "fixed",
              fontSize: "2rem",
              zIndex: 10,
            }}
          >
            {flower}
          </motion.div>
        ))}

      {/* Floating Balloons */}
      {opened &&
        balloons.map((balloon, index) => (
          <motion.div
            key={index}
            initial={{
              y: window.innerHeight,
              x: 100 + index * 100,
            }}
            animate={{
              y: -200,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            style={{
              position: "fixed",
              fontSize: "3rem",
              zIndex: 10,
            }}
          >
            {balloon}
          </motion.div>
        ))}
{!opened ? (
  <div
    style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background:
        "radial-gradient(circle at center, #5c3300, #1a0f00)",
      overflow: "hidden",
      position: "relative",
    }}
  >
    {/* Floating Petals */}
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        initial={{
          y: -100,
          x: Math.random() * window.innerWidth,
        }}
        animate={{
          y: window.innerHeight + 100,
          rotate: 360,
        }}
        transition={{
          duration: 6 + Math.random() * 6,
          repeat: Infinity,
        }}
        style={{
          position: "absolute",
          fontSize: "1.5rem",
        }}
      >
        🌸💖🎉
      </motion.div>
    ))}

    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
      style={{
        width: "450px",
        height: "550px",
        background:
          "linear-gradient(135deg,#f3d58c,#d4af37,#f7e6b5)",
        borderRadius: "20px",
        boxShadow: "0 0 50px rgba(255,215,0,0.5)",
        position: "relative",
        overflow: "hidden",
        border: "5px solid #b8860b",
        textAlign: "center",
      }}
    >
      {/* Ribbon */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: 0,
          right: 0,
          height: "40px",
          background:
            "linear-gradient(to right,#8B0000,#c2185b,#8B0000)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "4rem",
        }}
      >
        🎀
      </div>

      <div
        style={{
          paddingTop: "120px",
          color: "#5c2e00",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontFamily: "serif",
          }}
        >
          Wedding
        </h1>

        <h2
          style={{
            marginTop: "-10px",
            fontFamily: "serif",
          }}
        >
          Invitation
        </h2>

        <h3
          style={{
            marginTop: "80px",
          }}
        >
          Sunitha ❤️ Vinod Kumar
        </h3>

        <motion.button
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={openInvitation}
          style={{
            marginTop: "100px",
            padding: "18px 40px",
            border: "none",
            borderRadius: "50px",
            background:
              "linear-gradient(135deg,#8B0000,#c2185b)",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1.1rem",
            boxShadow:
              "0 10px 20px rgba(0,0,0,0.3)",
          }}
        >
          ❤️ OPEN INVITATION ❤️
        </motion.button>
      </div>
    </motion.div>
  </div>
) : (
       <motion.div
  initial={{
    y: 800,
    opacity: 0,
    scale: 0.8,
  }}
  animate={{
    y: 0,
    opacity: 1,
    scale: 1,
  }}
  transition={{
    duration: 2,
    ease: "easeOut",
  }}
  style={{
    display: "flex",
    justifyContent: "center",
    padding: "50px 20px",
    position: "relative",
    zIndex: 9999,
  }}
>
          <div
  style={{
    maxWidth: "700px",
    width: "100%",
    background: "#fff",
    borderRadius: "25px",
    padding: "40px",
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
    border: "4px solid #d4af37",
    position: "relative",
    zIndex: 9999,
  }}
><div
  style={{
    position: "absolute",
    top: "15px",
    left: "15px",
    fontSize: "2rem",
  }}
>
  🌿🌸
</div>

<div
  style={{
    position: "absolute",
    top: "15px",
    right: "15px",
    fontSize: "2rem",
  }}
>
  🌸🌿
</div>
  <div
  style={{
    marginTop: "30px",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  }}
>
  <img
    src="/images/couple.jpg"
    alt="Sunitha and Vinod Kumar"
    style={{
      width: "100%",
      display: "block",
      objectFit: "cover",
    }}
  />
</div>
            <div style={{ textAlign: "center" }}>
  <p
    style={{
      color: "#556B2F",
      fontWeight: "bold",
      letterSpacing: "2px",
    }}
  >
    WE CORDIALLY INVITE YOU
    <br />
    TO CELEBRATE
    <br />
    THE WEDDING OF
  </p>

  <h1
    style={{
      fontSize: "4rem",
      color: "#556B2F",
      fontFamily: "cursive",
    }}
  >
    Sunitha
  </h1>

  <h2>&</h2>

  <h1
    style={{
      fontSize: "4rem",
      color: "#556B2F",
      fontFamily: "cursive",
    }}
  >
    Vinod Kumar
  </h1>

  <h3>Thursday</h3>

  <h2>25 June 2026</h2>

  <h3>Time: 8:00 AM - 9:00 AM</h3>

  <h2>Venue</h2>

  <p>
    T.T.D Functional Hall
    <br />
    Mantralayam, Kurnool District
  </p>

  <p>
    📞 9353376332
    <br />
    📞 9019163686
    <br />
    📞 7975268842
  </p>
</div>

            <button
              onClick={() => window.print()}
              style={{
                marginTop: "20px",
                padding: "15px 30px",
                border: "none",
                borderRadius: "30px",
                background: "#c2185b",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Download Invitation 📜
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default InvitationCard;