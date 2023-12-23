import "../styles/Button.scss";
export default function Button({ style, text }) {
  return (
    <div>
      <button className={style}>{text}</button>
    </div>
  );
}
