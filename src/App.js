import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/" element={<Services />}>
            <Route path="/services/:name" element={<Services />} />
          </Route>
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
