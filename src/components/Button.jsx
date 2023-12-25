import "../styles/Button.scss";
export default function Button({ style, text, href }) {
  return (
    <div>
      <button href={href} className={style}>
        {text}
      </button>
    </div>
  );
}
