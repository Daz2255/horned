import React from "react";
import "./Header.css";
import HornedBeastList from "../hornedbeastlist/HornedBeastList";

export default function Header({ data, onHornsChange }) {
  return (
    <div className="header">
      <h1>Horned Beasts</h1>
      <HornedBeastList data={data} onHornsChange={onHornsChange} />
    </div>
  );
}
