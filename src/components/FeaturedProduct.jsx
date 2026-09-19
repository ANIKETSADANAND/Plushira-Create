import Frame from "./Frame.jsx";
import { Botanicals } from "./BotanicalSprites.jsx";

// Swap this for the real product photo once it's available, e.g.:
// import ninjaJournal from "../assets/ninja-journal.jpg";
const ninjaJournal = null;

export default function FeaturedProduct() {
  return (
    <section className="featured feat" id="featured">
      <Botanicals
        sprigs={[
          { symbol: "leaf", className: "bot gold", style: { "--rot": "-12deg", left: "4%", top: "-40px", width: 140, transform: "rotate(-12deg)" } },
          { symbol: "sprig", className: "bot", style: { "--rot": "22deg", right: "-40px", bottom: "-30px", width: 190, transform: "rotate(22deg)" } },
        ]}
      />
      <div className="wrap feat-grid">
        <div className="feat-art reveal">
          <div className="glow" aria-hidden="true" />
          <Frame src={ninjaJournal} tone="blush" label="My Ninja Journal cover photograph" alt="My Ninja Journal" />
        </div>
        <div className="reveal">
          <p className="eyebrow">Featured product</p>
          <h2>My Ninja Journal</h2>
          <p className="sub">Small Steps + Big Dreams</p>
          <p className="lede">
            An original creative journal designed to give little minds a space to draw, explore, imagine and create.
          </p>
          <a className="btn" href="#shop">
            View journal <span className="arw" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
