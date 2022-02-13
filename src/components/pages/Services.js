import React from "react";
import "../../App.css";
import CarouselSection from "../CarouselSection";
import data from "../../data/data.json";

export default function Services() {
  return (
    <>
      <h1 className="services">Services</h1>
      <CarouselSection data={data.images} />
    </>
  );
}
