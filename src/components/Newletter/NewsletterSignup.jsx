import classes from "./NewsletterSignup.module.css";
import { useFetcher } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import TextButton from "../UI/TextButton";

function NewsletterSignup({ isFullscreen = false }) {
  const fetcher = useFetcher();
  const { data, state} = fetcher;
  const emailRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      emailRef.current.value = "";
      dispatch(
        uiActions.showNotification({
          title: "Newsletter signup",
          status: "success",
          message: data.message,
        })
      );
    }
    const timeout = setTimeout(() => {
      dispatch(uiActions.hideNotification());
    }, 2000);

    return () => clearTimeout(timeout);
  }, [data, state]);

  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={
        isFullscreen ? classes.newsletterFullscreen : classes.newsletter
      }
    >
      <h2>Newletter</h2>
      <div className={classes.input}>
        <input
          type="email"
          name="email"
          placeholder="Anmeldung für Newsletter"
          ref={emailRef}
        />
        <TextButton styleType="type2" className={classes.button}>
          Submit
        </TextButton>
      </div>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
