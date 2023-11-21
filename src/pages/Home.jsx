import Hero from "../containers/Hero.jsx";
import Layout from "../containers/Layout.jsx";
import FirstRowOfCards from "../containers/FirstRowOfCards.jsx";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FirstRowOfCards></FirstRowOfCards>
    </Layout>
  );
}
