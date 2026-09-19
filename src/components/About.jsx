import Frame from "./Frame.jsx";

// Swap for the real editorial/flat-lay photo once available, e.g.:
// import aboutPhoto from "../assets/about-flatlay.jpg";
const aboutPhoto = null;

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="reveal">
          <p className="eyebrow">About Plushira Create</p>
          <h2>Where little ideas become something beautiful.</h2>
          <p style={{ marginTop: "1.6rem" }}>
            Plushira Create is a creative stationery and paper-goods brand bringing together imagination, creativity
            and everyday joy.
          </p>
          <p>
            We design products that encourage children and everyday users to colour, write, imagine and create
            &mdash; one page at a time.
          </p>
          <p className="script">
            Little ideas. Brighter tomorrows. <span className="heart">&#9825;</span>
          </p>
        </div>
        <div className="about-art reveal">
          <Frame src={aboutPhoto} label="Studio or flat-lay photograph" alt="Plushira Create studio photograph" />
          <div className="leafcard" aria-hidden="true">
            <svg viewBox="0 0 120 200">
              <use href="#leaf" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
