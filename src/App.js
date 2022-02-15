import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import StyledButton from "./components/StyledButton";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) setShowScroll(true);
      else setShowScroll(false);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        {showScroll && (
          <StyledButton
            customStyle={"back_to_top"}
            onClick={scrollToTop}
            title={"Back To Top"}
            children={<i className="fa fa-arrow-up" />}
          />
        )}
        <Footer />
      </Router>
    </>
  );
}

export default App;
