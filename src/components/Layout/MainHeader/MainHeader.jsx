/**
 * MainHeader component renders the main header of the application.
 * It includes the logo, main navigation, user area navigation, and optionally a notification.
 * 
 * @module MainHeader
 * @returns {JSX.Element} - Rendered main header section with logo, navigation, and notification
 */
import classes from "./MainHeader.module.css";
import { useSelector } from "react-redux";

import Logo from "./Logo.jsx";
import MainNavigation from "./MainNavigation.jsx";
import UserAreaNavigation from "./UserAreaNavigation.jsx";
import Notification from "../../UI/Notification.jsx";

function MainHeader() {
  // Retrieve notification state from Redux store
  const notification = useSelector((state) => state.ui.notification);

  return (
      <section className={classes.header}>
        {/* Conditionally render Notification component if a notification exists */}
        {notification && (
          <Notification
            title={notification.title}
            message={notification.message}
            status={notification.status} // Notification status (e.g., success, error)
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
