import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import data from "../../data/data.json";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards
        ExtraInfo={
          <>
            <h1>{data.HomePageTitle}</h1>
            <p>{data.HomePageTitleDescription}</p>
            <h2>{"Our Services"}</h2>
          </>
        }
      />
    </>
  );
}

export default Home;
