import { Botanicals } from "./BotanicalSprites.jsx";

export default function Philosophy() {
  return (
    <>
      <hr className="rule" />
      <section className="philosophy">
        <Botanicals
          sprigs={[
            { symbol: "leaf", className: "bot blush", style: { "--rot": "-20deg", left: "6%", top: "18%", width: 130, transform: "rotate(-20deg)" } },
            { symbol: "fern", className: "bot", style: { "--rot": "16deg", right: "7%", bottom: "12%", width: 140, transform: "rotate(16deg)" } },
          ]}
        />
        <div className="wrap reveal">
          <div className="phil-words">
            <span>Colour</span>
            <span>Create</span>
            <span>Imagine</span>
          </div>
          <p>Plushira Create is about making everyday creativity feel simple, joyful and beautiful.</p>
        </div>
      </section>
    </>
  );
}
