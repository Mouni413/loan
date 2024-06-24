
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerContent from './BannerContent';
import { bannerData } from './data';

export default function HomeBanner() {
    const settings = {
        dots: true,
        speed: 1000,
        // autoplaySpeed: 2000,
        // cssEase: "linear",
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        // draggable: true,
    };

    return (
        <>
            <Slider {...settings}>
                {bannerData.map((item, index) => {
                    return <div key={index}><BannerContent data={item} /> </div>
                })}
            </Slider>

        </>

    )
}
