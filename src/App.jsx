import { BrowserRouter, Routes, Route } from "react-router-dom";

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
  return (
    <BrowserRouter>
      <Routes>
        {/* Hero Page */}
        <Route path="/" element={<Hero />} />

        {/* Countdown Page */}
        <Route path="/countdown" element={<Countdown />} />

        {/* Main Invitation Website */}
        <Route path="/invitation" element={<InvitationPage />} />

        {/* Wedding Events Page */}
        <Route path="/events" element={<Events />} />
                                                                                                                                                                                                                                         
        {/* Invitation Card Page */}
        <Route
          path="/invitation-card"
          element={<InvitationCard />}
        />
        <Route path="/engagement" element={<Engagement />} />
         <Route path="/mehendi" element={<Mehendi />}
          />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/reception" element={<Reception />} />
          <Route path="/haldi" element={<Haldi />} />
        {/* 404 Page */}
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