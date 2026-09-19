import Frame from "./Frame.jsx";
import { Botanicals } from "./BotanicalSprites.jsx";
import comingSoon from "../data/comingSoon.js";

export default function ComingSoon() {
  return (
    <section className="soon" id="soon">
      <Botanicals
        sprigs={[
          { symbol: "sprig", className: "bot", style: { "--rot": "-14deg", left: "-56px", top: "12%", width: 180, transform: "rotate(-14deg)" } },
          { symbol: "leaf", className: "bot gold", style: { "--rot": "26deg", right: "-40px", bottom: "8%", width: 150, transform: "rotate(26deg)" } },
        ]}
      />
      <div className="wrap">
        <div className="sec-head center reveal">
          <p className="eyebrow centered">In the making</p>
          <h2>More little things are coming&hellip;</h2>
          <p>Created for everyday moments of creativity.</p>
        </div>

        <div className="soon-grid">
          {comingSoon.map((item) => (
            <article className="soon-card reveal" key={item.key}>
              <Frame src={item.image} tone={item.tone} label={item.name} />
              <div className="t">
                <h3>{item.name}</h3>
                <span className="status">Coming soon</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
