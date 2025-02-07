/**
 * ErrorPage component displays an error message when a route fails to load.
 * It handles different error statuses (e.g., 404, 500) and shows appropriate messages.
 *
 * @module ErrorPage
 * @returns {JSX.Element} The ErrorPage component.
 */
import { useRouteError, Link } from "react-router-dom";
import MainHeader from "../components/Layout/MainHeader/MainHeader";
import PageContent from "../components/UI/PageContent";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { useEffect } from "react";

function ErrorPage() {
  const error = useRouteError(); // Retrieves the error object from React Router
  const dispatch = useDispatch();

  let title = "An error occured!";
  let message = "Something went wrong!";

  // Handling specific error statuses
  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Nicht gefunden(404)";
    message = "Die gewünschte Seite ist leider nicht vorhanden!";
  }
  useEffect(() => {
    // Dispatch an error notification when the component mounts
    dispatch(
      uiActions.showNotification({
        title: title,
        message: message,
        status: "error",
      })
    );
    // Automatically hide the notification after 3 seconds
    const timeout = setTimeout(() => {
      dispatch(uiActions.hideNotification());
    }, 3000);

    return () => clearTimeout(timeout); // Cleanup function to prevent memory leaks
  }, []);
 

  return (
    <>
      <MainHeader />
      <PageContent title={title}>
        <p>{message}</p>
        <Link to="/" style={{ color: "#f50b07" }}>
          Zurück zur Startseite
        </Link>
      </PageContent>
    </>
  );
}

export default ErrorPage;
