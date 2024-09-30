import classes from "./UserAreaNavigation.module.css";

import LoginIcon from "../../Icons/LoginIcon";
import FavoritesIcon from "../../Icons/FavoritesIcon";
import CartIcon from "../../Icons/CartIcon";
import Button from "../../UI/Button";

function UserAreaNavigation() {
  return (
    <nav className={classes.navigation}>
      <ul>
        <Button className={classes["nav-button"]}>
          <LoginIcon />
        </Button>
        <Button className={classes["nav-button"]}>
          <FavoritesIcon />
        </Button>
        <Button className={classes["nav-button"]}>
          <CartIcon />
        </Button>
      </ul>
    </nav>
  );
}

export default UserAreaNavigation;
