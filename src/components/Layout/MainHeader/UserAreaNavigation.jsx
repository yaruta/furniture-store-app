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
  const { userLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const cartItemsAmount = cartItems.reduce(
    (accumulator, currentItem) => accumulator + parseInt(currentItem.quantity),
    0
  );
  const isItemInCart = cartItemsAmount > 0;

  const favoriteItems = useSelector((state) => state.favorites.items);
  const favoriteItemsAmount = favoriteItems.length;
  const isItemInFavorites = favoriteItemsAmount > 0;

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  function handleNavigate(path) {
    navigate(path);
  }

  function handleLogout() {
    doSignOut();
    navigate("/");
  }

  return (
    <nav className={classes.navigation}>
      <ul>
        {!userLoggedIn && (
          <Button
            className={`${classes["nav-button"]} ${classes.login}`}
            onClick={() => handleNavigate("/auth?mode=login")}
          >
            <LoginIcon />
          </Button>
        )}
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
