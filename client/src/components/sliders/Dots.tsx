import React from "react";
import Styles from "./slider.module.scss";

interface DotsProps {
  activeIndex: number;
  onClick: (index: number) => void;
  sliderImage: {
    urls: string;
    title: string;
    description: string;
  }[];
}

const Dots: React.FC<DotsProps> = ({ activeIndex, onClick, sliderImage }) => {
  return (
    <div className={Styles.allDots}>
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${
            activeIndex === index
              ? `${Styles.dot} ${Styles.activeDot}`
              : Styles.dot
          }`}
          onClick={() => onClick(index)}
        ></span>
      ))}
    </div>
  );
};

export default Dots;
