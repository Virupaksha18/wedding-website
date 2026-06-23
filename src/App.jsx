import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useEffect} from "react";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Invitation from "./components/Invitation";
import Gallery from "./components/Gallery";
import Venue from "./components/Venue";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import Events from "./components/Events";
import InvitationCard from "./components/InvitationCard";
import Engagement from "./components/Engagement";
import Mehendi from "./components/Mehendi";
import Haldi from "./components/Haldi";
import Reception from "./components/Reception";
import Wedding from "./components/Wedding";

function InvitationPage() {
  return (
    <>
      <Invitation />
      <Gallery />
      <Venue />
      <RSVP />
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    const audio = document.getElementById("weddingMusic");

    const playlist = [
      "song1.mp3",
      "song2.mp3",
      "song3.mp3",
      "song4.mp3",
    ];

    let currentSong = 0;

    if (audio) {
      audio.src = playlist[currentSong];

      audio.addEventListener("ended", () => {
        currentSong++;

        if (currentSong >= playlist.length) {
          currentSong = 0;
        }

        audio.src = playlist[currentSong];
        audio.play();
      });
    }
  }, []);
  return (
    <BrowserRouter>

      {/* Global Wedding Music
      <audio
        id="weddingMusic"
        src="/music.mp3"
        loop
      /> */}
      <audio id="weddingMusic" />

      <Routes>
        {/* Hero Page */}
        <Route path="/" element={<Hero />} />

        {/* Countdown Page */}
        <Route path="/countdown" element={<Countdown />} />

        {/* Main Invitation Website */}
        <Route
          path="/invitation"
          element={<InvitationPage />}
        />

        {/* Wedding Events */}
        <Route path="/events" element={<Events />} />

        {/* Invitation Card */}
        <Route
          path="/invitation-card"
          element={<InvitationCard />}
        />

        {/* Event Pages */}
        <Route
          path="/engagement"
          element={<Engagement />}
        />

        <Route
          path="/mehendi"
          element={<Mehendi />}
        />

        <Route
          path="/haldi"
          element={<Haldi />}
        />

        <Route
          path="/wedding"
          element={<Wedding />}
        />

        <Route
          path="/reception"
          element={<Reception />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div
              style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;