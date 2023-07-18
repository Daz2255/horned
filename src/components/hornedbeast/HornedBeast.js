import React, { useState } from "react";

import "./HornedBeast.css";

export default function HornedBeast({ data }) {
  const [favorites, setFavorites] = useState(0);

  const handleFavoriteClick = () => {
    setFavorites((prevFavorites) => prevFavorites + 1);
  };

  return (
    <div className="HornedBeast">
      <h3>{data.title}</h3>
      <img
        src={data.image_url}
        alt={data.title}
        onClick={handleFavoriteClick}
      />
      <p>{data.description}</p>
      <span>{favorites} Favorites</span>
      <button onClick={handleFavoriteClick}>
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </button>
    </div>
  );
}
