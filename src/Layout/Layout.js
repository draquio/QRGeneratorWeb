import React from "react";
import "./Layout.scss";
import { Nav, Footer } from "../components";
export function Layout(props) {
  const { children } = props;
  return (
    <div className="Layout">
      <nav className="navbar">
        <Nav />
      </nav>
      <div className="separator">
        <div className="main">{children}</div>
      </div>
      <footer className="footerbar">
        <Footer />
      </footer>
    </div>
  );
}
