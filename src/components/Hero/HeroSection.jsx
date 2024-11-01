import { useState, useEffect } from "react";
import classes from "./HeroSection.module.css";

import HeroItem from "./HeroItem";
import Button from "../UI/Button";
import NextIcon from "../Icons/NextIcon";
import { AnimatePresence } from "framer-motion";

function HeroSection({ data }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const hero = Object.values(data);
  const heroLength = hero.length;

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleNext();
    }, 8000);

    return () => {
      clearInterval(timeout);
    };
  }, [selectedIndex]);

  function handleNext() {
    const newIndex = selectedIndex + 1;
    const arrLength = heroLength;
    setSelectedIndex(newIndex >= arrLength ? 0 : newIndex);
  }

  return (
    <section className={classes.hero}>
      <AnimatePresence>
        <HeroItem
          key={selectedIndex}
          {...hero[selectedIndex]}
        />
      </AnimatePresence>
      <Button onClick={handleNext} className={classes["hero-button"]}>
        <NextIcon />
      </Button>
    </section>
  );
}

export default HeroSection;
