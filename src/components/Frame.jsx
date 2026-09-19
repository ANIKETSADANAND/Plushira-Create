/**
 * A bordered image frame. Pass `src` once you have the real photograph —
 * until then it renders an elegant neutral placeholder with the given
 * `label`, so nothing fake is ever shown in its place.
 *
 * `tone`: "" | "blush" | "sage" — placeholder background tint.
 * `fit`: "cover" (default) | "contain" — image object-fit.
 */
export default function Frame({
  src,
  alt = "",
  label = "Photograph coming soon",
  tone = "",
  fit = "cover",
  className = "",
  style,
}) {
  return (
    <div className={`frame ${className}`} style={style}>
      {src ? (
        <img src={src} alt={alt || label} loading="lazy" decoding="async" className={fit === "contain" ? "contain" : ""} />
      ) : (
        <div className={`ph ${tone}`}>
          <svg className="ph-leaf" viewBox="0 0 48 48" aria-hidden="true">
            <use href="#leaf-mark" />
          </svg>
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}
