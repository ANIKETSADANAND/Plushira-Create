// Shared <symbol> definitions, rendered once near the root so every
// <use href="#id" /> elsewhere in the tree can reference them.
export default function BotanicalSprites() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <symbol id="sprig" viewBox="0 0 120 200">
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M60 196C60 150 58 96 62 8" />
          <path d="M61 150c-16 2-28-6-32-22 16-6 28 4 32 22z" />
          <path d="M62 132c14-2 24-12 25-29-16-3-26 9-25 29z" />
          <path d="M61 108c-15 2-26-6-30-22 15-6 26 4 30 22z" />
          <path d="M62 88c13-2 23-12 24-28-15-3-25 9-24 28z" />
          <path d="M61 64c-13 2-23-6-26-20 13-5 23 4 26 20z" />
          <path d="M62 44c11-2 20-11 21-25-13-2-22 8-21 25z" />
        </g>
      </symbol>
      <symbol id="leaf" viewBox="0 0 120 200">
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M60 198c0-52 4-96 4-96" />
          <path d="M64 102c30-14 44-48 38-88-38 6-54 42-38 88z" />
          <path d="M64 102C36 88 24 54 30 14c36 6 50 42 34 88z" />
          <path d="M64 96c4-30 8-52 16-68M62 96C56 66 50 44 42 28" />
        </g>
      </symbol>
      <symbol id="fern" viewBox="0 0 120 200">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M60 196C58 140 56 78 66 10" />
          <path d="M64 44c10-8 14-20 12-32M63 44c-10-6-14-18-13-30M65 76c13-9 18-24 16-38M62 76c-12-7-17-21-16-36M65 110c15-10 21-26 19-42M62 110c-14-8-19-23-18-39M64 144c16-11 22-28 20-45M61 144c-15-8-21-25-19-42" />
        </g>
      </symbol>
      <symbol id="leaf-mark" viewBox="0 0 48 48">
        <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M24 44c0-18 0-26 0-26" />
          <path d="M24 18c10-4 16-14 14-26C25-5 18 6 24 18z" />
          <path d="M24 26c-9 1-15-4-17-13 9-3 16 3 17 13z" />
        </g>
      </symbol>
    </svg>
  );
}

/**
 * Decorative botanical field for a section's background.
 * `sprigs` is an array of { symbol, className, style } — see usage in
 * each section component for the exact placement values used on the
 * live site.
 */
export function Botanicals({ sprigs = [] }) {
  return (
    <div className="botanicals" aria-hidden="true">
      {sprigs.map((s, i) => (
        <svg key={i} className={s.className} style={s.style} viewBox="0 0 120 200">
          <use href={`#${s.symbol}`} />
        </svg>
      ))}
    </div>
  );
}
