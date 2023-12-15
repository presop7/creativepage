import Hero from "../containers/Hero.jsx";
import Layout from "../containers/Layout.jsx";
import FirstRowOfCards from "../containers/FirstRowOfCards.jsx";
import FeaturesCardsContainer from "../containers/FeaturesCardsContainer.jsx";
import AboutTabs from "../containers/AboutTabs.jsx";
import OurWork from "../containers/OurWork.jsx";
import OurServices from "../containers/OurServices.jsx";
import PurchaseNowContainer from "../containers/PurchaseNowContainer.jsx";
import BreakingNewsContainer from "../containers/BreakingNewsContainer.jsx";
import SecondRowOfCards from "../containers/SecondRowOfCards.jsx";
import PricingTable from "../containers/PricingTable.jsx";

export default function Home() {
  const tabData = [
    { label: "OUR HISTORY" },
    { label: "BIOGRAPH" },
    { label: "OUR SKILLS" },
  ];

  return (
    <Layout>
      <Hero />
      <FirstRowOfCards />
      <FeaturesCardsContainer />
      <AboutTabs tabs={tabData} />
      <OurWork />
      <OurServices />
      <PurchaseNowContainer />
      <BreakingNewsContainer />
      <SecondRowOfCards />
      <PricingTable />
    </Layout>
  );
}
