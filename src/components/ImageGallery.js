import React, { useState } from "react";
import "./ImageGallery.css";

function ImageGallery({ data }) {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img alt={"ModelPhoto"} src={tempImgSrc} />
        <i className="fa fa-times" onClick={() => setModel(false)} />
      </div>
      <div className="imageGallery pt-3">
        {data.map((e, index) => {
          return (
            <div
              className="pics"
              key={"image-" + index}
              onClick={() => getImg(e.imgSrc)}
            >
              <img alt={e.imgSrc} src={e.imgSrc} className="w-100" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ImageGallery;
