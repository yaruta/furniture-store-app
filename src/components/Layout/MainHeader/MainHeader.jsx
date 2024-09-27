import classes from "./MainHeader.module.css";
import CartIcon from "../../Icons/CartIcon.jsx";
import Button from "../../UI/Button.jsx";
import LoginIcon from "../../Icons/LoginIcon.jsx";
import FavoritesIcon from "../../Icons/FavoritesIcon.jsx";

function MainHeader() {
  return (
    <header className={classes.mainHeader}>
      <div className={classes.logo}>
        <h1>Möbel-Deko</h1>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li className={classes.navItem}>
            <button>Shop</button>
          </li>
          <li className={classes.navItem}>
            <button>Über uns</button>
          </li>
          <li className={classes.navItem}>
            <button>Kontakt</button>
          </li>
        </ul>
      </nav>
      <nav className={classes.navigation}>
        <ul>
          <Button >
            <LoginIcon />
          </Button>
          <Button>
            <FavoritesIcon />
          </Button>
          <Button>
            <CartIcon />
          </Button>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
