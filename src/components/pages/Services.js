import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../App.css";
import data from "../../data/data.json";
import CarouselSection from "../CarouselSection";
import ContentSection from "../ContentSection";

export default function Services() {
  let { name } = useParams();

  const [selected, setSelected] = useState(0);
  const [selectedData, setSelectedData] = useState([]);

  const changeSelected = (item) => {
    setSelected(item);
    setSelectedData(data.services.filter((x) => x.Order === item));
  };

  const initial = () => {
    window.scroll(0, 0);
    var newDataArr = data.services.filter((x) => x.id === name);
    setSelectedData(newDataArr);
    if (newDataArr.length > 0) setSelected(newDataArr[0].Order);
  };

  useEffect(() => {
    initial();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <>
      {!name && (
        <h1 className="services">
          {selectedData.length > 0 ? selectedData[0].label : "Services"}
        </h1>
      )}
      <CarouselSection
        data={data.services}
        selected={selected}
        changeSelected={changeSelected}
      />
      <ContentSection data={selectedData} />
    </>
  );
}
