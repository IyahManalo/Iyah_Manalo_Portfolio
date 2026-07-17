/**
 * Renders intentionally broken editorial headline lines. Keeping the text
 * visible by default prevents empty layout blocks when mobile browsers delay
 * or skip intersection-observer animations.
 */
export default function RevealText({ as: Tag = "h2", lines, className = "" }) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block">
          {line}
        </span>
      ))}
    </Tag>
  );
}
