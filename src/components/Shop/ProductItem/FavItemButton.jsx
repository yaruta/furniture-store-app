import { useState } from "react";

import classes from "./FavItemButton.module.css";
import FavoritesIcon from "../../Icons/FavoritesIcon";
import FavoriteIconChecked from "../../Icons/FavoriteIconChecked";

function FavItemButton({ onFavorite, isFav }) {
  const [isFavorite, setIsFavorite] = useState(isFav);

  function handleClickFavorites() {
    setIsFavorite(!isFavorite);
    onFavorite();
  }

  return (
    <button
      className={classes["favorites-icon"]}
      onClick={handleClickFavorites}
    >
      {isFavorite && <FavoriteIconChecked />}
      {!isFavorite && <FavoritesIcon />}
    </button>
  );
}

export default FavItemButton;
