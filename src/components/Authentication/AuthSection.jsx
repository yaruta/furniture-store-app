import { useSearchParams, Link } from "react-router-dom";
import classes from "./AuthSection.module.css";

import AuthForm from "./AuthForm";
import PageTitle from "../UI/PageTitle";

function AuthSection() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  return (
    <section className={classes.authSection}>
      {isLogin ? <PageTitle title="Login" /> : <PageTitle title="Sign up" />}
      <AuthForm />

      {isLogin ? (
        <p className={classes.toggleLine}>
          New customer? <Link to="/auth?mode=signup">Sign up</Link> for an
          account
        </p>
      ) : (
        <p className={classes.toggleLine}>
          Do you already have an account?{" "}
          <Link to="/auth?mode=login"> Login</Link>
        </p>
      )}
    </section>
  );
}

export default AuthSection;
