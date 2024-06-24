import React from "react";
import Styles from "./slider.module.scss";

interface ArrowsProps {
  prevSlide: () => void;
  nextSlide: () => void;
}

const Arrows: React.FC<ArrowsProps> = ({ prevSlide, nextSlide }) => {
  return (
    <div className={Styles.arrows}>
      <span className={Styles.prev} onClick={prevSlide}>
        &#10094;
      </span>
      <span className={Styles.next} onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
};

export default Arrows;
