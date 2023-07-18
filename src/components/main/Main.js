import React from "react";
import "./Main.css";
import HornedBeast from "../hornedbeast/HornedBeast";
import data from "../data.json";

export default function Main() {
  return (
    <div className="grid-container">
      {data.map((beast) => (
        <HornedBeast key={beast._id} data={beast} />
      ))}
    </div>
  );
}
