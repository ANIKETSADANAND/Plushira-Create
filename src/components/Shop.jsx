import Frame from "./Frame.jsx";
import { Botanicals } from "./BotanicalSprites.jsx";
import products from "../data/products.js";

export default function Shop() {
  return (
    <section id="shop">
      <Botanicals
        sprigs={[
          { symbol: "fern", className: "bot blush", style: { "--rot": "20deg", right: "-50px", top: "10%", width: 170, transform: "rotate(20deg)" } },
        ]}
      />
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="eyebrow">Shop</p>
          <h2>The collection, as it grows.</h2>
          <p>Everything is designed in small, considered batches. The first journal is on its way.</p>
        </div>

        <div className="shop-grid">
          {products.map((p) => (
            <article className="product reveal" key={p.name}>
              {p.status && <span className="badge">{p.status}</span>}
              <Frame src={p.image} tone={p.tone} label={`${p.name} product photograph`} alt={p.name} />
              <div className="pbody">
                <h3>{p.name}</h3>
                {p.tagline && <p className="ptag">{p.tagline}</p>}
                <p>{p.description}</p>
                <div className="pmeta">
                  {p.price ? <span className="price">{p.price}</span> : <span className="price pending">Price to be announced</span>}
                  {p.links.length > 0 && (
                    <div className="buylinks">
                      {p.links.map((l) => (
                        <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer">
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="shop-note reveal">
          Nothing is available to buy just yet. When the journal is ready, this is where the photographs,
          description, price, variants and shop links will live.
        </p>
      </div>
    </section>
  );
}
