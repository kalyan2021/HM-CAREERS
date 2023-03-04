import React from "react";
import '../App.css'
import Slider from "react-slick";
import slider1 from "../images/slider-1.jpg"
import slider2 from "../images/slider-2.jpg"
import slider3 from "../images/slider-3.jpg"
import slider4 from "../images/slider-4.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ReactSlickDemo extends React.Component {
  render() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay:1200
    };
    return (
        <Slider {...settings}>
          <div>
            <img src={slider1}/>
          </div>
          <div>
            <img src={slider2}/>
          </div>
          <div> 
            <img src={slider3} />
          </div>
          <div>
            <img src={slider4} />
          </div>
        </Slider>
    );
  }
}

export default ReactSlickDemo;