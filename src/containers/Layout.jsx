import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
