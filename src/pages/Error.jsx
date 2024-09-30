import { useRouteError, Link } from "react-router-dom";
import MainHeader from "../components/Layout/MainHeader/MainHeader";
import PageContent from "../components/UI/PageContent";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occured!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Nicht gefunden(404)";
    message = "Die gewünschte Seite ist leider nicht vorhanden!";
  }

  return (
    <>
      <MainHeader />
      <PageContent title={title}>
        <p>{message}</p>
        <Link to="/" style={{color: "#f50b07"}}>Zurück zur Startseite</Link>
      </PageContent>
    </>
  );
}

export default ErrorPage;
