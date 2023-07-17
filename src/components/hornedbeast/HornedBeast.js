import React from "react";
import "./HornedBeast.css";

export default function HornedBeasts({ title, imgUrl, altText, description }) {
  return (
    <div className="beast">
      <h2>{title}</h2>
      <img src={imgUrl} alt={altText} title={title} />
      <p>{description}</p>
    </div>
  );
}
