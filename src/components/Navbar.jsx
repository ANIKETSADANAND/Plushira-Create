import { useEffect, useRef, useState } from "react";
import wordmark from "../assets/plushira-wordmark.png";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#shop", label: "Shop" },
  { href: "#work", label: "Our Work" },
  { href: "#about", label: "About" },
  { href: "#soon", label: "Coming Soon" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ onNavigate, onToast }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const searchInputRef = useRef(null);
  const firstDrawerLinkRef = useRef(null);

  // sticky-nav shadow state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // active-section spy
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    if (drawerOpen) firstDrawerLinkRef.current?.focus();
  }, [drawerOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && drawerOpen) setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  const go = (href) => (e) => {
    e.preventDefault();
    setDrawerOpen(false);
    onNavigate(href);
  };

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="nav-inner">
          <a className="brand" href="#home" aria-label="Plushira Create, back to top" onClick={go("#home")}>
            <img src={wordmark} alt="Plushira Create" />
          </a>

          <nav className="nav-links" aria-label="Main">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className={active === l.href ? "active" : ""} onClick={go(l.href)}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav-tools">
            <button
              className="icon-btn"
              aria-label="Search"
              aria-expanded={searchOpen}
              aria-controls="searchbar"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" />
              </svg>
            </button>
            <button className="icon-btn" aria-label="Shopping bag" onClick={() => onToast("Your bag opens when the first journal launches.")}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 8h12l-1 12H7L6 8z" />
                <path d="M9.5 8V6.5a2.5 2.5 0 015 0V8" />
              </svg>
            </button>
            <button
              className="icon-btn burger"
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              aria-controls="drawer"
              onClick={() => setDrawerOpen(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="searchbar" id="searchbar">
            <form
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                onToast("Search will be available when the shop opens.");
              }}
            >
              <label htmlFor="searchInput" style={{ position: "absolute", left: "-9999px" }}>
                Search Plushira Create
              </label>
              <input ref={searchInputRef} id="searchInput" type="search" placeholder="Search the collection" autoComplete="off" />
              <span className="mini-note">Search opens with the shop.</span>
            </form>
          </div>
        )}
      </header>

      <div className={`scrim${drawerOpen ? " open" : ""}`} hidden={!drawerOpen} onClick={() => setDrawerOpen(false)} />

      <aside className={`drawer${drawerOpen ? " open" : ""}`} id="drawer" aria-label="Menu" aria-hidden={!drawerOpen}>
        <div className="drawer-top">
          <img src={wordmark} alt="Plushira Create" />
          <button className="icon-btn" aria-label="Close menu" onClick={() => setDrawerOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        {LINKS.map((l, i) => (
          <a key={l.href} href={l.href} ref={i === 0 ? firstDrawerLinkRef : null} onClick={go(l.href)}>
            {l.label}
          </a>
        ))}
        <p className="script">
          Made with creativity <span className="heart">&#9825;</span>
        </p>
      </aside>
    </>
  );
}
