import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import Gallery from "./components/pages/Gallery";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import StyledButton from "./components/StyledButton";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  const currentURL = window.location.href;
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
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/location" element={<Contacts />} />
        </Routes>
        {showScroll && (
          <StyledButton
            customStyle={"back_to_top"}
            onClick={scrollToTop}
            title={"Back To Top"}
            children={<i className="fa fa-arrow-up" />}
          />
        )}
        <WhatsappButton
          phoneNumber={"6596129066"}
          text={
            "Hi, I just visited your website, " +
            currentURL +
            " . Could you please provide more info on your services?"
          }
        />
        <Footer />
      </Router>
    </>
  );
}

export default App;
