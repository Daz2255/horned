import React from "react";
import HornedBeast from "../hornedbeast/HornedBeast";
import "./HornedBeastList.css";

export default function HornedBeastList({
  data,
  selectedHorns,
  onHornsChange,
}) {
  const uniqueHorns = [...new Set(data.map((item) => item.horns))];

  const filteredData = data.filter((item) => {
    if (selectedHorns === "all") {
      return true;
    } else {
      return item.horns === parseInt(selectedHorns);
    }
  });

  return (
    <div>
      <select value={selectedHorns} onChange={onHornsChange}>
        <option value="all">All Horns</option>
        {uniqueHorns.map((horns) => (
          <option key={horns} value={horns}>
            {horns} {horns === 1 ? "Horn" : "Horns"}
          </option>
        ))}
      </select>

      {filteredData.map((beast) => (
        <HornedBeast key={beast._id} data={beast} />
      ))}
    </div>
  );
}
