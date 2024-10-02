import { useState } from "react";

import classes from "./FavItemButton.module.css";
import FavoritesIcon from "../../Icons/FavoritesIcon";

function FavItemButton({ isDetails = false }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isFavoriteHover, setIsFavoriteHover] = useState(false);

  function handleStartHoverFavorites() {
    setIsFavoriteHover(true);
  }

  function handleStopHoverFavorites() {
    setIsFavoriteHover(false);
  }

  function handleClickFavorites() {
    setIsFavorite(!isFavorite);
  }

  return (
    <button
      className={
        isDetails
          ? classes["favorites-icon-details"]
          : classes["favorites-icon"]
      }
      onClick={handleClickFavorites}
      onMouseEnter={handleStartHoverFavorites}
      onMouseLeave={handleStopHoverFavorites}
    >
      <FavoritesIcon
        color={isDetails ? "black" : isFavorite ? "rgb(230, 6, 2)" : "white"}
        hover={isFavoriteHover}
        hoverColor="rgb(230, 6, 2)"
      />
    </button>
  );
}

export default FavItemButton;
