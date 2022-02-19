import React, { useEffect } from "react";
import "../../App.css";
import data from "../../data/data.json";
import ImageGallery from "../ImageGallery";

function Gallery() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <h1 className="gallery">Gallery</h1>
      <ImageGallery data={data.gallery} />
    </>
  );
}

export default Gallery;
