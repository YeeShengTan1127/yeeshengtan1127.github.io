import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import data from "../data/data.json";
import { Col, Row } from "react-bootstrap";

function Cards({ ExtraInfo }) {
  return (
    <div id={"Menu"} className="cards">
      <div className="cards__container">
        {ExtraInfo}
        <Row xs={1} md={3} className={"g-4"}>
          {data.images.map((e, index) => {
            return (
              <Col key={"cardItem-" + index}>
                <CardItem
                  src={e.src}
                  text={e.text}
                  label={e.label}
                  path={e.path}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Cards;
