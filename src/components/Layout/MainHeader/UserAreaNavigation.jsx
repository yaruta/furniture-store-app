/**
 * UserAreaNavigation component renders the navigation area for logged-in users.
 * It displays buttons for login/logout, favorites, and cart, along with the number
 * of items in the cart and favorites.
 * 
 * @module UserAreaNavigation
 * @returns {JSX.Element} - The rendered navigation bar with user-related actions
 */
import classes from "./UserAreaNavigation.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import { useAuth } from "../../../store/authContext";
import { doSignOut } from "../../../firebase/auth";

import LoginIcon from "../../Icons/LoginIcon";
import LogoutIcon from "../../Icons/LogoutIcon";
import FavoritesIcon from "../../Icons/FavoritesIcon";
import CartIcon from "../../Icons/CartIcon";
import Button from "../../UI/Button";
import Badge from "./Badge";

function UserAreaNavigation() {
  const { userLoggedIn } = useAuth(); // Hook for user authentication status
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get cart items and calculate the total number of items in the cart
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemsAmount = cartItems.reduce(
    (accumulator, currentItem) => accumulator + parseInt(currentItem.quantity),
    0
  );
  const isItemInCart = cartItemsAmount > 0;

  // Get favorite items and calculate the total number of favorites
  const favoriteItems = useSelector((state) => state.favorites.items);
  const favoriteItemsAmount = favoriteItems.length;
  const isItemInFavorites = favoriteItemsAmount > 0;

  /**
   * Toggles the cart visibility
   */
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  /**
   * Navigates to the specified path
   */
  function handleNavigate(path) {
    navigate(path);
  }

  /**
   * Handles user logout
   */
  function handleLogout() {
    doSignOut(); // Log the user out
    navigate("/"); // Navigate to the home page
  }

  return (
    <nav className={classes.navigation}>
      <ul>
        {/* If the user is not logged in, show the login button */}
        {!userLoggedIn && (
          <Button
            className={`${classes["nav-button"]} ${classes.login}`}
            onClick={() => handleNavigate("/auth?mode=login")}
          >
            <LoginIcon />
          </Button>
        )}
        {/* If the user is logged in, show the logout button */}
        {userLoggedIn && (
          <Button className={classes["nav-button"]} onClick={handleLogout}>
            <LogoutIcon />
          </Button>
        )}

        <Button
          className={classes["nav-button"]}
          onClick={() => handleNavigate("/favorites")}
        >
          <FavoritesIcon />
          {isItemInFavorites && <Badge value={favoriteItemsAmount} />}
        </Button>
        <Button className={classes["nav-button"]} onClick={toggleCartHandler}>
          <CartIcon />
          {isItemInCart && <Badge value={cartItemsAmount} />}
        </Button>
      </ul>
    </nav>
  );
}

export default UserAreaNavigation;
