import { useState } from "react";
import useReveal from "./hooks/useReveal.js";

import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import TournamentDashboard from "./components/TournamentDashboard.jsx";
import Registration from "./components/Registration.jsx";
import About from "./components/About.jsx";
import ComingSoon from "./components/ComingSoon.jsx";
import Sponsors from "./components/Sponsors.jsx";
import Gallery from "./components/Gallery.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [activeGame, setActiveGame] = useState("");

  useReveal([]);

  return (
    <>
      <Nav />

      <Hero />

      <TournamentDashboard />

      <Registration
        activeGame={activeGame}
        onSelectGame={setActiveGame}
      />

      <About />

      <ComingSoon />

      <Sponsors />

      <Gallery />

      <Testimonials />

      <FAQ />

      <Footer />
    </>
  );
}