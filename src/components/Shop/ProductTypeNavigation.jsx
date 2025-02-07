/**
 * Component for navigating between different product types in the shop.
 *
 * @returns {JSX.Element} The rendered product type navigation component.
 */
import classes from "./ProductTypeNavigation.module.css";
import { NavLink, useLocation } from "react-router-dom";

function ProductTypeNavigation() {
  /**
   * Retrieves the current search parameters from the URL.
   */
  const { search } = useLocation();
  /**
   * Extracts the "type" of product query parameter from the URL.
   */
  const type = new URLSearchParams(search).get("type");
  
  return (
    <nav className={classes["type-navigation"]}>
      <ul>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive && !type ? classes.active : undefined
            }
          >
            Alles
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop?type=chair"
            className={({ isActive }) =>
              isActive && type === "chair" ? classes.active : undefined
            }
          >
            Stühle
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop?type=table"
            className={({ isActive }) =>
              isActive && type === "table" ? classes.active : undefined
            }
          >
            Tische
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop?type=commode"
            className={({ isActive }) =>
              isActive && type === "commode" ? classes.active : undefined
            }
          >
            Kommode
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ProductTypeNavigation;
