import { Botanicals } from "./BotanicalSprites.jsx";

export default function Contact() {
  return (
    <>
      <hr className="rule" />
      <section className="contact" id="contact">
        <Botanicals
          sprigs={[
            { symbol: "sprig", className: "bot", style: { "--rot": "-22deg", left: "4%", bottom: "6%", width: 150, transform: "rotate(-22deg)" } },
            { symbol: "leaf", className: "bot blush", style: { "--rot": "14deg", right: "5%", top: "8%", width: 140, transform: "rotate(14deg)" } },
          ]}
        />
        <div className="wrap reveal">
          <p className="eyebrow centered">Contact</p>
          <h2>Let&rsquo;s create something lovely.</h2>
          <p className="lede">
            For questions, collaborations or simply to say hello, we&rsquo;d love to hear from you.
          </p>
          <div className="contact-rows">
            <a href="mailto:plushiracreate@gmail.com">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3.5 6.5l8.5 6 8.5-6" />
              </svg>
              plushiracreate@gmail.com
            </a>
            <a href="https://www.instagram.com/plushiracreate/" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" />
              </svg>
              @plushiracreate
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
