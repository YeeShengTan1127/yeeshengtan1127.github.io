import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselSection.css";

function CarouselSection({ data }) {
  return (
    <Carousel fade>
      {data &&
        data.map((e, index) => {
          return (
            <Carousel.Item key={"carouselItem-" + index}>
              <div className="carousel-img-wrapper">
                <img
                  className={"d-block w-100 carousel-item-img"}
                  src={e.src}
                  alt={e.label}
                />
              </div>
              <Carousel.Caption>
                <h2>{e.label}</h2>
                <p>{e.text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
}

export default CarouselSection;
