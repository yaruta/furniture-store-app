import { Link } from "react-router-dom";
import classes from './SocialMediaNavigation.module.css';
import InstagramIcon from "../../Icons/Instagram";
import FacebookIcon from "../../Icons/Facebook";
import YoutubeIcon from "../../Icons/Youtube";

export default function SocialMediaNavigation() {
  return (
    <div className={classes.smNavigation}>
      <Link to="https://instagram.com">
        <InstagramIcon />
      </Link>
      <Link to="https://facebook.com">
        <FacebookIcon />
      </Link>
      <Link to="https://youtube.com">
        <YoutubeIcon />
      </Link>
    </div>
  );
}
