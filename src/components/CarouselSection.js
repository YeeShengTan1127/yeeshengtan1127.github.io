import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CarouselSection.css";

function CarouselSection({ data, selected, changeSelected }) {
  return (
    <Carousel
      fade
      activeIndex={selected}
      onSelect={changeSelected}
      interval={selected != null ? null : 1000}
    >
      {data &&
        data.map((e, index) => {
          return (
            <Carousel.Item key={"carouselItem-" + index}>
              <Link
                to={e.id}
                className="carousel-wrapper"
                onClick={() => changeSelected(selected)}
              >
                <img
                  className={"d-block w-100 carousel-item-img"}
                  src={e.src}
                  alt={e.label}
                />
                <Carousel.Caption>
                  <h2 className="">{e.label}</h2>
                  <p>{e.text}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
}

export default CarouselSection;
