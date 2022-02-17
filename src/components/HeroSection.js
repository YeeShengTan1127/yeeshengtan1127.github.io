import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import data from "../data/data.json";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-home.mp4" autoPlay loop muted />
      <h1>{data.Slogan.main}</h1>
      <p>{data.Slogan.sub}</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle={"btn--outline--white"}
          buttonSize={"btn--large"}
          to={"#Menu"}
        >
          {data.IntroButtonText}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
