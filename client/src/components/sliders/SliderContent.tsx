import React from "react";
import Styles from "./slider.module.scss";
interface SliderContentProps {
  activeIndex: number;
  sliderImage: {
    urls: string;
    title: string;
    description: string;
  }[];
}

const SliderContent: React.FC<SliderContentProps> = ({
  activeIndex,
  sliderImage,
}) => {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={
            index === activeIndex
              ? `${Styles.slides} ${Styles.active}`
              : Styles.inactive
          }
        >
          <img
            className={Styles.slideImage}
            src={slide.urls}
            alt={slide.title}
          />
          <h2 className={Styles.slideTitle}>{slide.title}</h2>
          <h3 className={Styles.slideText}>{slide.description}</h3>
        </div>
      ))}
    </section>
  );
};

export default SliderContent;
