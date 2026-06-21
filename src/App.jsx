import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import "../src/assets/css/responsive.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";

import UAESurveyingServices from "./pages/UAESurveyingServices";
import Technology from "./pages/Technology";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/UAEserveying" element={<UAESurveyingServices />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
