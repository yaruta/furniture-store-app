import { useState, useEffect } from "react";

import classes from "./Accordion.module.css";
import { accItems } from "../store/accordion";

import AccordionItem from "./AccordionItem";
import AccordionButton from "./AccordionButton";
import PreviousIcon from "../Icons/PreviousIcon";
import NextIcon from '../Icons/NextIcon';

function Accordion() {
  const defaultValue = {
    image: accItems[0].image,
    collection: accItems[0].collection,
    title: accItems[0].title,
    description: accItems[0].description,
    index: 0,
  };
  const [selectedImage, setSelectedImage] = useState(defaultValue);
  const accLength = accItems.length;

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(timeout);
    };
  }, [selectedImage]);

  function handlePrevious() {
    const newIndex = selectedImage.index - 1;
    const lastIndex = accLength - 1;
    setSelectedImage(
      newIndex >= 0
        ? {
            image: accItems[newIndex].image,
            collection: accItems[newIndex].collection,
            index: newIndex,
            title: accItems[newIndex].title,
            description: accItems[newIndex].description,
          }
        : {
            image: accItems[lastIndex].image,
            collection: accItems[lastIndex].collection,
            index: lastIndex,
            title: accItems[lastIndex].title,
            description: accItems[lastIndex].description,
          }
    );
  }

  function handleNext() {
    const newIndex = selectedImage.index + 1;
    setSelectedImage(
      newIndex >= accLength
        ? {
            image: accItems[0].image,
            collection: accItems[0].collection,
            index: 0,
            title: accItems[0].title,
            description: accItems[0].description,
          }
        : {
            image: accItems[newIndex].image,
            collection: accItems[newIndex].collection,
            index: newIndex,
            title: accItems[newIndex].title,
            description: accItems[newIndex].description,
          }
    );
  }

  return (
    <section className={classes.accordion}>
      <AccordionButton onClick={handlePrevious}><PreviousIcon/></AccordionButton>
      <AccordionItem {...selectedImage} />
      <AccordionButton onClick={handleNext}><NextIcon /></AccordionButton>
    </section>
  );
}

export default Accordion;
