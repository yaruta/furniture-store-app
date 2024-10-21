import classes from "./UserAreaNavigation.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

import LoginIcon from "../../Icons/LoginIcon";
import FavoritesIcon from "../../Icons/FavoritesIcon";
import CartIcon from "../../Icons/CartIcon";
import Button from "../../UI/Button";
import Bage from "./Bage";

function UserAreaNavigation() {
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

  function handleNavigate() {
    navigate("/favorites");
  }

  return (
    <nav className={classes.navigation}>
      <ul>
        <Button className={classes["nav-button"]}>
          <LoginIcon />
        </Button>
        <Button className={classes["nav-button"]} onClick={handleNavigate}>
          <FavoritesIcon />
          {isItemInFavorites && <Bage value={favoriteItemsAmount} />}
        </Button>
        <Button className={classes["nav-button"]} onClick={toggleCartHandler}>
          <CartIcon />
          {isItemInCart && <Bage value={cartItemsAmount} />}
        </Button>
      </ul>
    </nav>
  );
}

export default UserAreaNavigation;
