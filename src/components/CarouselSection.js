import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselSection.css";

function CarouselSection({ data, selected, setSelected }) {
  return (
    <Carousel fade activeIndex={selected} onSelect={setSelected}>
      {data &&
        data.map((e, index) => {
          return (
            <Carousel.Item key={"carouselItem-" + index}>
              <div className="carousel-wrapper">
                <img
                  className={"d-block w-100 carousel-item-img"}
                  src={e.src}
                  alt={e.label}
                />
                <Carousel.Caption>
                  <h2>{e.label}</h2>
                  <p>{e.text}</p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
}

export default CarouselSection;
