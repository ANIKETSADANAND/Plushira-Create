import { useCallback, useRef, useState } from "react";
import BotanicalSprites from "./components/BotanicalSprites.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import OurWork from "./components/OurWork.jsx";
import FeaturedProduct from "./components/FeaturedProduct.jsx";
import Triad from "./components/Triad.jsx";
import Philosophy from "./components/Philosophy.jsx";
import ComingSoon from "./components/ComingSoon.jsx";
import About from "./components/About.jsx";
import Shop from "./components/Shop.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Toast from "./components/Toast.jsx";
import useReveal from "./hooks/useReveal.js";

export default function App() {
  useReveal();

  const [toastMsg, setToastMsg] = useState("");
  const [toastShow, setToastShow] = useState(false);
  const toastTimer = useRef(null);

  const showToast = useCallback((msg) => {
    setToastMsg(msg);
    setToastShow(true);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastShow(false), 3200);
  }, []);

  // Smooth-scrolls to a section, offsetting for the sticky navbar height.
  const navigateTo = useCallback((href) => {
    const target = document.querySelector(href);
    if (!target) return;
    const nav = document.getElementById("nav");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const top = target.getBoundingClientRect().top + window.pageYOffset - ((nav?.offsetHeight || 0) - 1);
    window.scrollTo({ top: Math.max(top, 0), behavior: reduce ? "auto" : "smooth" });
    history.replaceState(null, "", href);
  }, []);

  return (
    <>
      <div className="paper-grain" aria-hidden="true" />
      <BotanicalSprites />

      <Navbar onNavigate={navigateTo} onToast={showToast} />

      <main>
        <Hero />
        <hr className="rule" />
        <OurWork />
        <FeaturedProduct />
        <Triad />
        <Philosophy />
        <ComingSoon />
        <About />
        <hr className="rule" />
        <Shop />
        <Contact />
      </main>

      <Footer onNavigate={navigateTo} />

      <Toast message={toastMsg} show={toastShow} />
    </>
  );
}
