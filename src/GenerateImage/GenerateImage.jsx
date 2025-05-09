import React from "react";
import "./GenerateImage.css";
import html2canvas from "html2canvas";
import CheckCards from "../CheckCards";

const GenerateImage = ({ persons, products }) => {
    const generateImage = () => {
      html2canvas(document.querySelector(".result-container")).then((canvas) => {
        const imgUrl = canvas.toDataURL();
        const link = document.createElement("a");
        link.href = imgUrl;
        link.download = "result.png";
        link.click();
      });
    };
  
    return (
      <div>

        <CheckCards persons={persons} products={products} />
  
        <button onClick={generateImage} className="btn btn-download">Скачать</button>
      </div>
    );
  };

export default GenerateImage;