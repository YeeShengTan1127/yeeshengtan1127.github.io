import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import data from "../data/data.json";

function Cards({ ExtraInfo }) {
  return (
    <div id={"Menu"} className="cards">
      <div className="cards__container">
        {ExtraInfo}
        <div className="cards__wrapper">
          <ul className="cards__items">
            {data.images.map((e, index) => {
              return (
                <CardItem
                  key={"cardItem-" + index}
                  src={e.src}
                  text={e.text}
                  label={e.label}
                  path={e.path}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
