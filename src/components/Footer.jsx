import { Botanicals } from "./BotanicalSprites.jsx";
import wordmark from "../assets/plushira-wordmark.png";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#shop", label: "Shop" },
  { href: "#work", label: "Our Work" },
  { href: "#about", label: "About" },
  { href: "#soon", label: "Coming Soon" },
  { href: "#contact", label: "Contact" },
];

export default function Footer({ onNavigate }) {
  const go = (href) => (e) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <footer>
      <Botanicals
        sprigs={[
          { symbol: "leaf", className: "bot", style: { "--rot": "-18deg", left: "-50px", bottom: "-30px", width: 180, transform: "rotate(-18deg)" } },
          { symbol: "sprig", className: "bot gold", style: { "--rot": "24deg", right: "-30px", top: "-20px", width: 140, transform: "rotate(24deg)" } },
        ]}
      />
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <img src={wordmark} alt="Plushira Create" />
            <p className="tag">Colour &bull; Create &bull; Imagine</p>
          </div>

          <nav className="foot-col" aria-label="Footer">
            <h4>Explore</h4>
            <ul>
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={go(l.href)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="foot-col">
            <h4>Say hello</h4>
            <ul>
              <li>
                <a href="mailto:plushiracreate@gmail.com">plushiracreate@gmail.com</a>
              </li>
              <li>
                <a className="social" href="https://www.instagram.com/plushiracreate/" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="1" />
                  </svg>
                  @plushiracreate
                </a>
              </li>
            </ul>
            <p className="script" style={{ marginTop: "1.6rem" }}>
              Thank you for being here <span className="heart">&#9825;</span>
            </p>
          </div>
        </div>

        <div className="foot-bottom">
          <span>&copy; 2026 Plushira Create. All rights reserved.</span>
          <span>Designed in small, considered batches.</span>
        </div>
      </div>
    </footer>
  );
}
