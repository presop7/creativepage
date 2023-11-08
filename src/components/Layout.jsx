import Nav from "./Nav.jsx"
import Footer from "./Footer.jsx";
import { Children } from "react";

export default function Layout({Children}) {
    return (
        <>
            <Nav></Nav>
                <main>{Children}</main>
            <Footer></Footer>
        </>
    )
}