import ShiftedDoubleLineBorder from "../components/ShiftedDoubleLineBorder";
import "..//styles/AboutTabs/AboutTabs.scss";
import { useState } from "react";
import AboutTab from "../components/AboutTab.jsx";
import aboutImage from "../assets/maskImgAboutTab.png";
import SkillBar from "../components/AboutTabsContent/SkillBar.jsx";

const AboutTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <div className="aboutTabsContainer" id="about">
      <img className="aboutImg" src={aboutImage} alt="" />
      <div className="tabs-container">
        <div className="headingContainer">
          <h1>About Our Company</h1>
          <ShiftedDoubleLineBorder />
        </div>

        <div className="tabs">
          {tabs.map((tab, index) => (
            <AboutTab
              key={index}
              label={tab.label}
              onClick={() => setActiveTab(index)}
              isActive={index === activeTab}
            />
          ))}
        </div>
        <div className="tab-content">
          {activeTab === 0 && (
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                saepe reprehenderit error ipsam, repellat vel sequi facere!
                Laudantium magnam facere optio, eius molestiae, recusandae
                assumenda delectus nemo quisquam perferendis libero ad earum
                sequi unde ullam aliquam amet atque. Nihil quam et autem
                obcaecati, delectus tenetur sed quaerat aliquid magni
                repellendus!
              </p>
            </div>
          )}
          {activeTab === 1 && (
            <div className="biographyTab">
              <p className="paragraphOne">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                eligendi velit animi sapiente consequuntur id cum minus corporis
                quam soluta! Sapiente, quod. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. At corrupti corporis repellat, et
                voluptate suscipit.
              </p>
              <p className="paragraphTwo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="paragraphThree">
                Sapiente, quod. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. At corrupti corporis repellat, et voluptate
                suscipit.
              </p>
            </div>
          )}
          {activeTab === 2 && (
            <div className="barsContainer">
              <SkillBar style={`a70`} text={"LOREM, IPSUM."} />
              <SkillBar style={`a85`} text={"SAEPE, ODIO."} />
              <SkillBar style={`a65`} text={"IPSAM, MINIMA."} />
              <SkillBar style={`a95`} text={"COMMODI, NECESSITATIBUS."} />
              <SkillBar style={`a90`} text={"REM, IUSTO."} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutTabs;
