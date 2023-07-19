import React from "react";
import "./Main.css";
import HornedBeast from "../hornedbeast/HornedBeast";

export default function Main({ data }) {
  return (
    <div className="grid-container">
      {data.map((beast) => (
        <HornedBeast key={beast._id} data={beast} />
      ))}
    </div>
  );
}
