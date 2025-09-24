import textStyle from "./Text.module.css";

/**
 * Text component
 * @component
 * @param {JSX.Element | string} text - The text content to display
 * @param {string} type - The type of text (e.g., 'heading', 'paragraph')
 * @param {string} size - The size of the text (e.g., 'small', 'medium', 'large')
 * @param {string} className - Additional CSS classes to apply
 * @param {object} style - Inline styles to apply
 * @returns {JSX.Element} The rendered Text component
 */
export default function Text({
  text,
  type = "paragraph",
  size = "medium",
  className = "",
  style = {},
}) {
  if (type === "heading") {
    return (
      <h2
        className={`${textStyle.container} ${textStyle.heading} ${textStyle[size]} ${className}`}
        style={style}
      >
        {text}
      </h2>
    );
  }

  return (
    <p
      className={`${textStyle.container} ${textStyle.paragraph} ${textStyle[size]} ${className}`}
      style={style}
    >
      {text}
    </p>
  );
}
