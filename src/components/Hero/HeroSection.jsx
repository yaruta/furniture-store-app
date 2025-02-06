/**
 * HeroSection component represents a carousel-like hero section with featured items.
 * The component automatically cycles through the hero items every 8 seconds.
 * Users can also manually navigate to the next item using the next button.
 *
 * @param {Object} props - Component properties
 * @param {Object} props.data - The hero data containing the featured items
 * @returns {JSX.Element} - Rendered HeroSection component
 */
import { useState, useEffect } from "react";
import classes from "./HeroSection.module.css";

import HeroItem from "./HeroItem";
import Button from "../UI/Button";
import NextIcon from "../Icons/NextIcon";
import { AnimatePresence } from "framer-motion";

function HeroSection({ data }) {
  // State for tracking the currently selected hero item index
  const [selectedIndex, setSelectedIndex] = useState(0);
  // Convert the hero data into an array and store the length
  const hero = Object.values(data);
  const heroLength = hero.length;

  // Automatically transition to the next hero item after 8 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleNext();
    }, 8000);

    return () => {
      clearInterval(timeout); // Cleanup the timeout when component unmounts
    };
  }, [selectedIndex]);

  /**
   * Handle the transition to the next hero item.
   * If the last item is reached, it loops back to the first item.
   */
  function handleNext() {
    const newIndex = selectedIndex + 1;
    const arrLength = heroLength;
    setSelectedIndex(newIndex >= arrLength ? 0 : newIndex); // Loop back to the first item if at the end
  }

  return (
    <section className={classes.hero}>
      {/* Animate the hero item using Framer Motion */}
      <AnimatePresence>
        <HeroItem
          key={selectedIndex}
          {...hero[selectedIndex]}
        />
      </AnimatePresence>
      {/* Button to manually navigate to the next item */}
      <Button onClick={handleNext} className={classes["hero-button"]}>
        <NextIcon />
      </Button>
    </section>
  );
}

export default HeroSection;
