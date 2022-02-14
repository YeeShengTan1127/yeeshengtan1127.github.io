import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../App.css";
import data from "../../data/data.json";
import CarouselSection from "../CarouselSection";
import TableSection from "../TableSection";

export default function Services() {
  let { name } = useParams();

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    window.scroll(0, 0);
    if (name) {
      let selectedService = data.services.find((x) => x.id === name);
      if (selectedService) {
        let order = parseInt(selectedService.Order) - 1;
        setSelected(order);
      }
    }
  }, []);

  return (
    <>
      <h1 className="services">Services</h1>
      <CarouselSection
        data={data.services}
        selected={selected}
        setSelected={setSelected}
      />
      <TableSection data={data.services} selected={selected} />
    </>
  );
}
