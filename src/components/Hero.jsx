import Frame from "./Frame.jsx";
import { Botanicals } from "./BotanicalSprites.jsx";
import mark from "../assets/plushira-mark.png";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <Botanicals
        sprigs={[
          { symbol: "sprig", className: "bot", style: { "--rot": "-16deg", left: "-70px", top: "40px", width: 210, transform: "rotate(-16deg)" } },
          { symbol: "leaf", className: "bot blush", style: { "--rot": "24deg", right: "-46px", top: "-40px", width: 180, transform: "rotate(24deg)" } },
          { symbol: "fern", className: "bot gold", style: { "--rot": "8deg", right: "16%", bottom: "-70px", width: 150, transform: "rotate(8deg)" } },
        ]}
      />

      <div className="wrap hero-grid">
        <div className="reveal">
          <p className="eyebrow">A little space to</p>
          <h1>
            Colour<span className="dot">&bull;</span>Create<span className="dot">&bull;</span>Imagine
          </h1>
          <p className="lede">Thoughtfully created paper goods for little ideas, big dreams and everyday creativity.</p>
          <div className="hero-cta">
            <a className="btn" href="#work">
              Explore collection <span className="arw" aria-hidden="true">&rarr;</span>
            </a>
            <p className="script" style={{ margin: 0 }}>
              Made with creativity <span className="heart">&#9825;</span>
            </p>
          </div>
        </div>

        <div className="hero-art reveal">
          <div className="disc" aria-hidden="true" />
          <Frame src={mark} alt="Plushira Create — colour, create, imagine" fit="contain" className="f-main" />
          <div className="stamp" aria-hidden="true">
            little
            <br />
            ideas
          </div>
        </div>
      </div>
    </section>
  );
}
