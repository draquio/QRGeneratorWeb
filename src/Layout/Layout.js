import React, {useEffect} from "react";
import "./Layout.scss";
import { Nav, Footer } from "../components";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Layout(props) {
  const { children } = props;
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="Layout">
      <nav className="navbar">
        <Nav />
      </nav>
        <div className="main" data-aos="fade-up">{children}</div>
      <footer className="footerbar">
        <Footer />
      </footer>
    </div>
  );
}
