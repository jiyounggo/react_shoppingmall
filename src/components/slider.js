import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BgSlider() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div>
      <div>
        <Slider {...settings}>
          <img src="img/backgroundimg.png" height="600px" />
          <img src="img/backgroundimg2.png" height="600px" />
          <img src="img/backgroundimg3.png" height="600px" />
        </Slider>
      </div>
    </div>
  );
}

export default BgSlider;
