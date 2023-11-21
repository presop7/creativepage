import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
