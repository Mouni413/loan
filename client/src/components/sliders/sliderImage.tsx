import First from "../../assets/sliderImages/one.png";
import Second from "../../assets/sliderImages/two.png";
import Third from "../../assets/sliderImages/three.png";
import Fourth from "../../assets/sliderImages/four.png";
import Fifth from "../../assets/sliderImages/five.png";
import Sixth from "../../assets/sliderImages/six.png";

interface SliderImage {
  title: string;
  description: string;
  urls: string;
}

const sliderImages: SliderImage[] = [
  {
    title: "First Slide",
    description: "This is the first slider Image of our carousel",
    urls: First,
  },
  {
    title: "Second Slide",
    description: "This is the second slider Image of our carousel",
    urls: Second,
  },
  {
    title: "Third Slide",
    description: "This is the Third slider Image of our carousel",
    urls: Third,
  },
  {
    title: "Fourth Slide",
    description: "This is the Fourth slider Image of our carousel",
    urls: Fourth,
  },
  {
    title: "Fifth Slide",
    description: "This is the Fifth slider Image of our carousel",
    urls: Fifth,
  },
  {
    title: "Sixth Slide",
    description: "This is the Sixth slider Image of our carousel",
    urls: Sixth,
  },
];

export default sliderImages;
