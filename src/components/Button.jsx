import "../styles/Button.scss";
export default function Button({ css, text, href }) {
  return (
    <div>
      <button href={href} className={css}>
        {text}
      </button>
    </div>
  );
}
