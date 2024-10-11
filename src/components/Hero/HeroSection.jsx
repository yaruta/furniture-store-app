import { useState, useEffect, Suspense } from "react";

import classes from "./HeroSection.module.css";

import HeroItem from "./HeroItem";
import Button from "../UI/Button";
import PreviousIcon from "../Icons/PreviousIcon";
import NextIcon from "../Icons/NextIcon";

function HeroSection({ data }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const hero = Object.values(data);
  const heroLength = hero.length;

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(timeout);
    };
  }, [selectedIndex]);

  function handlePrevious() {
    const newIndex = selectedIndex - 1;
    const lastIndex = heroLength - 1;
    setSelectedIndex(newIndex >= 0 ? newIndex : lastIndex);
  }

  function handleNext() {
    const newIndex = selectedIndex + 1;
    const arrLength = heroLength;
    setSelectedIndex(newIndex >= arrLength ? 0 : newIndex);
  }

  return (
    <section className={classes.hero}>
      <Button onClick={handlePrevious} className={classes["hero-button"]}>
        <PreviousIcon />
      </Button>
      <HeroItem {...hero[selectedIndex]} />
      <Button onClick={handleNext} className={classes["hero-button"]}>
        <NextIcon />
      </Button>
    </section>
  );
}

export default HeroSection;