import React from "react";
import "./Main.css";
import HornedBeast from "../hornedbeast/HornedBeast";

export default function Main({ data, selectedHorns }) {
  const filteredData = data.filter((item) => {
    if (selectedHorns === "all") {
      return true;
    } else {
      return item.horns === parseInt(selectedHorns);
    }
  });

  return (
    <div className="grid-container">
      {filteredData.map((beast) => (
        <HornedBeast key={beast._id} data={beast} />
      ))}
    </div>
  );
}
