import React from "react";
import "./Home.scss";
import { MenuTab, Sidebar } from "../../components";

export function Home() {
  return (
    <>
      <div className="main_content">
        <div className="content_qr">
          <h2>Generador de QR</h2>
          <MenuTab />
        </div>
        <div className="content_sidebar">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
