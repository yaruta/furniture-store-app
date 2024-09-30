import Logo from "./Logo.jsx";
import classes from "./MainHeader.module.css";

import MainNavigation from "./MainNavigation.jsx";
import UserAreaNavigation from "./UserAreaNavigation.jsx";

function MainHeader() {
  return (
    <header className={classes.mainHeader}>
      <Logo />
      <MainNavigation />
      <UserAreaNavigation />
    </header>
  );
}

export default MainHeader;
