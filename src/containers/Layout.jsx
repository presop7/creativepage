import Footer from "../components/Footer";
import Nav from "../components/Header";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
