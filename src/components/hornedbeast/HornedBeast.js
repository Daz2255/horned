import React, { useState } from "react";
import SelectedBeast from "../selectedbeast/SelectedBeast";
import "./HornedBeast.css";

export default function HornedBeast({ data }) {
  const [favorites, setFavorites] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleFavoriteClick = () => {
    setFavorites((prevFavorites) => prevFavorites + 1);
  };

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="HornedBeast">
      <h3>{data.title}</h3>
      <img src={data.image_url} alt={data.title} onClick={handleImageClick} />
      <p>{data.description}</p>
      <span>{favorites} Favorites</span>
      <button onClick={handleFavoriteClick}>
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </button>

      {showModal && (
        <div className="modal-container">
          <div className="modal">
            <SelectedBeast data={data} onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
}
