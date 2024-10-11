import classes from './ProductTypeNavigation.module.css';
import { NavLink } from 'react-router-dom';

function ProductTypeNavigation() {
    return (
        <nav className={classes["type-navigation"]}>
          <ul>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Stühle
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Tische
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
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