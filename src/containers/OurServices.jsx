import ServicesTab from "../components/ServicesTab";
import ShiftedDoubleLineBorder from "../components/ShiftedDoubleLineBorder";
import { useState } from "react";
export default function OurServices() {
  const [activeTab, setActiveTab] = useState(1);
  const tabData = [
    { label: "Web Design" },
    { label: "Graphic Design" },
    { label: "Online Support" },
    { label: "App Design" },
    { label: "Online Marketing" },
    { label: "SEO Service" },
  ];
  const tabContentData = [
    {
      img: "#",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas perspiciatis vel, ea culpa totam impedit ex laborum quaerat itaque. Accusantium?",
    },
    { img: "#", lorem: "Lorem ipsum dolor sit amet. Accusantium?" },
    {
      img: "#",
      lorem:
        "Lorem ipsum dolor sit amet. Quas perspiciatis vel, ea culpa totam impedit ex laborum quaerat itaque. Accusantium?",
    },
    {
      img: "#",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas perspiciatis vel, ea culpa totam impedit ex laborum quaerat itaque. Accusantium?",
    },
    {
      img: "#",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas perspiciatis vel. Accusantium?",
    },
    {
      img: "#",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas perspiciatis vel, ea culpa totam impedit ex laborum quaerat itaque.",
    },
  ];
  return (
    <div className="ourServicesContainer">
      <div className="headingContainer">
        <h1>Our Services</h1>
        <div className="lines">
          <ShiftedDoubleLineBorder />
        </div>
      </div>
      <div className="tabsContainer">
        <div className="tabs">
          {tabData.map((tab, index) => (
            <ServicesTab
              key={index}
              label={tab.label}
              onClick={() => setActiveTab(index)}
              isActive={index === activeTab}
            />
          ))}
        </div>
        {tabContentData.map((content, { index = activeTab }) => (
          <div className="tabContent" key={index}>
            <img src={content.img} alt="" />
            <p>{content.lorem}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
