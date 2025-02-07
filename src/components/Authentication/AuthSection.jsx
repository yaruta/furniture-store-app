/**
 * AuthSection component renders the authentication section, 
 * which can either display a login form or a sign-up form based on the URL mode.
 * 
 * It includes the appropriate page title and toggles between login and sign-up modes.
 * 
 * @module AuthSection
 * @returns {JSX.Element} - The rendered authentication section with either login or sign-up form.
 */
import { useSearchParams, Link } from "react-router-dom";
import classes from "./AuthSection.module.css";

import AuthForm from "./AuthForm";
import PageTitle from "../UI/PageTitle";

function AuthSection() {
  // Determine whether to show login or signup based on the URL query parameter
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  return (
    <section className={classes.authSection}>
      {isLogin ? <PageTitle title="Login" /> : <PageTitle title="Sign up" />}
      <AuthForm />

      {/* Toggle between login and signup options */}
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
