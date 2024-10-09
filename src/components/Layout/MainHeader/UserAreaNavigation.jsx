import classes from "./UserAreaNavigation.module.css";
import { Link } from "react-router-dom";

import LoginIcon from "../../Icons/LoginIcon";
import FavoritesIcon from "../../Icons/FavoritesIcon";
import CartIcon from "../../Icons/CartIcon";
import Button from "../../UI/Button";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

function UserAreaNavigation() {
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <nav className={classes.navigation}>
      <ul>
        <Button className={classes["nav-button"]}>
          <LoginIcon />
        </Button>
        <Button className={classes["nav-button"]}>
          <FavoritesIcon />
        </Button>
        <Button className={classes["nav-button"]} onClick={toggleCartHandler}>
          <CartIcon />
        </Button>
      </ul>
    </nav>
  );
}

export default UserAreaNavigation;
