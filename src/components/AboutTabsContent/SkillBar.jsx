import "../../styles/AboutTabs/SkillBar.scss";
export default function SkillBar({ style, text }) {
  return (
    <div className="skillBarContainer">
      <div className="outBorder">
        <div className={`progress ${style}`}>
          <p className="text">{text}</p>
        </div>
      </div>
    </div>
  );
}
