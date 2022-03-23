import React from "react";
import "./utils.css";

function Card({ imagePath, imgPath, link, text }) {
  return (
    <div
      style={{
        backgroundImage: `url(${imagePath})`,
      }}
      className="card"
    >
      <div className="card-content">
        <img className="card-img" src={imgPath} alt="card-img" />
        <a href={link} className="card-text">
          {text}
        </a>
      </div>
    </div>
  );
}

export default Card;
