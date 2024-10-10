import classes from "./UserAreaNavigation.module.css";
import { Link } from "react-router-dom";

import LoginIcon from "../../Icons/LoginIcon";
import FavoritesIcon from "../../Icons/FavoritesIcon";
import CartIcon from "../../Icons/CartIcon";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import Bage from "./Bage";

function UserAreaNavigation() {
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const items = useSelector((state) => state.cart.items);
  const itemsAmount = items.reduce((accumulator, currentItem) => accumulator + parseInt(currentItem.quantity), 0);
  const isItemInCart = itemsAmount > 0;
  const isItemInFavorites = false;

  return (
    <nav className={classes.navigation}>
      <ul>
        <Button className={classes["nav-button"]}>
          <LoginIcon />
        </Button>
        <Button className={classes["nav-button"]}>
          <FavoritesIcon />
          {isItemInFavorites && <Bage />}
        </Button>
        <Button className={classes["nav-button"]} onClick={toggleCartHandler}>
          <CartIcon />
          {isItemInCart && <Bage value={itemsAmount}/>}
        </Button>
      </ul>
    </nav>
  );
}

export default UserAreaNavigation;
