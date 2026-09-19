const ITEMS = [
  {
    title: "Write",
    text: "For thoughts, stories and little notes.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 27l1.5-5.5L21 7a2.6 2.6 0 013.7 3.7L10.2 25.2 5 27z" />
        <path d="M18.6 9.6l3.8 3.8" />
      </svg>
    ),
  },
  {
    title: "Create",
    text: "For ideas waiting to come alive.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 4.5l3.1 7.6 8.2.6-6.3 5.3 2 8-7-4.4-7 4.4 2-8-6.3-5.3 8.2-.6z" />
      </svg>
    ),
  },
  {
    title: "Imagine",
    text: "For curious minds and big dreams.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 4a8 8 0 00-4.6 14.6c.7.5 1.1 1.3 1.1 2.1V22h7v-1.3c0-.8.4-1.6 1.1-2.1A8 8 0 0016 4z" />
        <path d="M13 26h6M14 29h4" />
      </svg>
    ),
  },
];

export default function Triad() {
  return (
    <section id="triad">
      <div className="wrap">
        <div className="triad">
          {ITEMS.map((item) => (
            <article className="tri reveal" key={item.title}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
