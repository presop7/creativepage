import Footer from "../components/Qjlaina";
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
