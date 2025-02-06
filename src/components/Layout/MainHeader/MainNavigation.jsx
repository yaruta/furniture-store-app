/**
 * MainNavigation component renders the main navigation bar for the application.
 * It includes navigation links to the shop, about page, and FAQ.
 * The active link is highlighted using CSS class.
 * 
 * @returns {JSX.Element} - Rendered main navigation bar with links to shop, about, and FAQ
 */
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <nav className={classes["main-navigation"]}>
      <ul>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Über uns
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            FAQ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
