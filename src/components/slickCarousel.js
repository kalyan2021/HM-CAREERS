import React from "react";
import '../App.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import {Carousel} from 'react-responsive-carousel';
import slider1 from "../images/slider-1.jpg"
import slider2 from "../images/slider-2.jpg"
import slider3 from "../images/slider-3.jpg"
import slider4 from "../images/slider-4.jpg"






export default function SlickCarousel() {
  return (
    <div>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img src={slider1} alt=''/>
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={slider2} alt='' />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={slider3} alt='' />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img src={slider4} alt='' />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
     
    </div>
  );
}
