/**
 * A button component that toggles the favorite status of an item.
 * It displays an icon representing the current favorite status and
 * allows the user to add or remove an item from their favorites.
 * 
 * @param {Object} props - The component props.
 * @param {Function} props.onFavorite - The callback function to handle the toggle action.
 * @param {boolean} props.isFav - The initial favorite status of the item.
 * 
 * @returns {JSX.Element} The rendered button with an icon indicating the favorite status.
 */
import { useState } from "react";

import classes from "./FavItemButton.module.css";
import FavoritesIcon from "../../Icons/FavoritesIcon";
import FavoriteIconChecked from "../../Icons/FavoriteIconChecked";

function FavItemButton({ onFavorite, isFav }) {
  const [isFavorite, setIsFavorite] = useState(isFav);

  /**
   * Handles the click event to toggle the favorite status of the item.
   * It updates the local state and calls the provided `onFavorite` callback.
   */
  function handleClickFavorites() {
    setIsFavorite(!isFavorite);  // Toggle the favorite state
    onFavorite();  // Invoke the callback to update the parent state
  }

  return (
    <button
      className={classes["favorites-icon"]}
      onClick={handleClickFavorites}
    >
      {isFavorite && <FavoriteIconChecked />} {/* Display checked icon if favorited */}
      {!isFavorite && <FavoritesIcon />} {/* Display regular icon if not favorited */}
    </button>
  );
}

export default FavItemButton;
