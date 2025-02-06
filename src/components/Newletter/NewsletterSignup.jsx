/**
 * The NewsletterSignup component allows users to subscribe to the newsletter
 * by entering their email address. Displays a notification after successful
 * submission, and resets the input field.
 *
 * @param {boolean} isFullscreen - Determines if the newsletter signup form should occupy the full screen.
 * @returns {JSX.Element} - The rendered newsletter signup form.
 */
import classes from "./NewsletterSignup.module.css";
import { useFetcher } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import TextButton from "../UI/TextButton";

function NewsletterSignup({ isFullscreen = false }) {
  const fetcher = useFetcher(); // Fetcher hook from react-router-dom to handle form submission
  const { data, state} = fetcher;
  const emailRef = useRef();
  const dispatch = useDispatch();

  // Effect to handle notifications after form submission
  useEffect(() => {
    if (state === "idle" && data && data.message) {
      emailRef.current.value = ""; // Clear the input field after successful submission
      dispatch(
        uiActions.showNotification({
          title: "Newsletter signup",
          status: "success",
          message: data.message,
        })
      );
    }
    // Hide notification after 2 seconds
    const timeout = setTimeout(() => {
      dispatch(uiActions.hideNotification());
    }, 2000);

    return () => clearTimeout(timeout); // Cleanup the timeout on component unmount
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
