import ServicesTab from "../components/ServicesTab";
import ShiftedDoubleLineBorder from "../components/ShiftedDoubleLineBorder";
import { useState } from "react";
import "../styles/OurServices.scss";
export default function OurServices() {
  const [activeTab, setActiveTab] = useState(0);
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
        "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nam veniam repellendus deleniti, corrupti modi accusantium quo minima molestiae sapiente incidunt officia! Fugiat est ipsam iure numquam consectetur libero. Suscipit? consectetur adipisicing elit. Quas perspiciatis vel, ea culpa totam impedit ex laborum quaerat itaque. Accusantium?",
    },
    {
      img: "#",
      lorem:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nam veniam repellendus deleniti, corrupti modi accusantium quo minima molestiae sapiente incidunt officia! Fugiat est ipsam iure numquam consectetur libero. Suscipit? Lorem ipsum dolor sit amet. Accusantium?",
    },
    {
      img: "#",
      lorem:
        "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nam veniam repellendus deleniti, corrupti modi accusantium quo minima molestiae sapiente incidunt officia! Fugiat est ipsam iure numquam consectetur libero. Suscipit? Quas perspiciatis vel, ea culpa totam impedit ex laborum quaerat itaque. Accusantium?",
    },
    {
      img: "#",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nam veniam repellendus deleniti, corrupti modi accusantium quo minima molestiae sapiente incidunt officia! Fugiat est ipsam iure numquam consectetur libero. Suscipit? Quas perspiciatis vel, ea culpa totam impedit ex laborum quaerat itaque. Accusantium?",
    },
    {
      img: "#",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas perspiciatis vel. Accusantium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nam veniam repellendus deleniti, corrupti modi accusantium quo minima molestiae sapiente incidunt officia! Fugiat est ipsam iure numquam consectetur libero. Suscipit?",
    },
    {
      img: "#",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas perspiciatis vel, ea culpa totam impedit ex laborum quaerat itaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nam veniam repellendus deleniti, corrupti modi accusantium quo minima molestiae sapiente incidunt officia! Fugiat est ipsam iure numquam consectetur libero. Suscipit?",
    },
  ];
  return (
    <div className="ourServicesContainer" id="service">
      <div className="widthContainer">
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
          {tabContentData.map((content, index) => (
            <div
              className="tabContent"
              key={index}
              style={{ display: index === activeTab ? "block" : "none" }}
            >
              <div className="tabContentContainer">
                <img src={content.img} alt="" />
                <p>{content.lorem}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
