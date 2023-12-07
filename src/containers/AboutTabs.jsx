import ShiftedDoubleLineBorder from "../components/ShiftedDoubleLineBorder";
import "..//styles/AboutTabs.scss";
import { useState } from "react";
import AboutTab from "../components/AboutTab.jsx";
import aboutImage from "../assets/maskImgAboutTab.png";

const AboutTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="aboutTabsContainer">
      <img className="aboutImg" src={aboutImage} alt="" />
      <div className="tabs-container">
        <div className="headingContainer">
          <h1>About Our Company</h1>
          <div className="separatorLines">
            <ShiftedDoubleLineBorder />
          </div>
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
              <div className="barOne externalBar">
                <div className="barFillOne innerBar">
                  <p className="text">Lorem, ipsum.</p>
                </div>
              </div>
              <div className="barOne externalBar">
                <div className="barFillOne innerBar">
                  <p className="text">Lorem, ipsum.</p>
                </div>
              </div>
              <div className="barOne externalBar">
                <div className="barFillOne innerBar">
                  <p className="text">Lorem, ipsum.</p>
                </div>
              </div>
              <div className="barOne externalBar">
                <div className="barFillOne innerBar">
                  <p className="text">Lorem, ipsum.</p>
                </div>
              </div>
              <div className="barOne externalBar">
                <div className="barFillOne innerBar">
                  <p className="text">Lorem, ipsum.</p>
                </div>
              </div>
              <div className="barOne externalBar">
                <div className="barFillOne innerBar">
                  <p className="text">Lorem, ipsum.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutTabs;
