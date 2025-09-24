import style from "./Text.module.css";

/**
 * Text component
 * @component
 * @param {JSX.Element | string} text - The text content to display
 * @param {string} type - The type of text (e.g., 'heading', 'paragraph')
 * @param {string} size - The size of the text (e.g., 'small', 'medium', 'large')
 * @param {string} className - Additional CSS classes to apply
 * @returns {JSX.Element} The rendered Text component
 */
export default function Text({
  text,
  type = "paragraph",
  size = "medium",
  className = "",
}) {
  if (type === "heading") {
    return (
      <h2
        className={`${style.container} ${style.heading} ${style[size]} ${className}`}
      >
        {text}
      </h2>
    );
  }

  return (
    <p
      className={`${style.container} ${style.paragraph} ${style[size]} ${className}`}
    >
      {text}
    </p>
  );
}
