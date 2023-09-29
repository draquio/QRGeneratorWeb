import React from "react";
import { Home } from "../pages/home";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout";

export function WebRouter() {
  const loadLayaout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      <Route path="/" element={loadLayaout(Layout, Home)} />
    </Routes>
  );
}
