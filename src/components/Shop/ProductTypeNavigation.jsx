import classes from "./ProductTypeNavigation.module.css";
import { NavLink, useLocation } from "react-router-dom";

function ProductTypeNavigation() {
  const { search } = useLocation();
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
