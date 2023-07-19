import React from "react";
import "./SelectedBeast.css";

export default function SelectedBeast({ data, onClose }) {
  return (
    <div className="SelectedBeast">
      <h3>{data.title}</h3>
      <img src={data.image_url} alt={data.title} className="modal-image" />
      <p>{data.description}</p>
      <button className="modal-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
}
