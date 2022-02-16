import React, { useEffect } from "react";
import "../../App.css";
import data from "../../data/data.json";
import LocationSection from "../LocationSection";

export default function Contacts() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <h1 className="contacts">Location</h1>
      <LocationSection data={data.locations} />
    </>
  );
}
