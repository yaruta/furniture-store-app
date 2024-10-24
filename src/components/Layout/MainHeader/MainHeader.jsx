import classes from "./MainHeader.module.css";
import { useSelector } from "react-redux";

import Logo from "./Logo.jsx";
import MainNavigation from "./MainNavigation.jsx";
import UserAreaNavigation from "./UserAreaNavigation.jsx";
import Notification from "../../UI/Notification.jsx";

function MainHeader() {
  const notification = useSelector((state) => state.ui.notification);

  return (
      <section className={classes.header}>
        {notification && (
          <Notification
            title={notification.title}
            message={notification.message}
            status={notification.status}
          />
        )}
        <header className={classes.mainHeader}>
        <Logo />
        <div className={classes.navigation}>
          <MainNavigation />
          <UserAreaNavigation />
        </div>
      </header>
      </section>
  );
}

export default MainHeader;
