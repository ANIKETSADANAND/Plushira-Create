import Frame from "./Frame.jsx";
import { Botanicals } from "./BotanicalSprites.jsx";
import work from "../data/work.js";

export default function OurWork() {
  return (
    <section id="work">
      <Botanicals
        sprigs={[
          { symbol: "fern", className: "bot", style: { "--rot": "-28deg", left: "-60px", bottom: "6%", width: 170, transform: "rotate(-28deg)" } },
          { symbol: "sprig", className: "bot blush", style: { "--rot": "18deg", right: "-54px", top: "8%", width: 160, transform: "rotate(18deg)" } },
        ]}
      />
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="eyebrow">Our work</p>
          <h2>Thoughtfully designed, one little detail at a time.</h2>
        </div>

        <div className="work-grid">
          {work.map((item) => (
            <article className="card reveal" key={item.key}>
              {item.soon && <span className="badge">Coming soon</span>}
              <Frame src={item.image} tone={item.tone} label={item.name} />
              <div className="card-body">
                <h3>{item.name}</h3>
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
