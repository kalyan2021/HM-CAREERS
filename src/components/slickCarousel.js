import React,{Component} from "react";
import '../App.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {Carousel} from 'react-responsive-carousel';
import slider1 from "../images/slider-1.jpg"
import slider2 from "../images/slider-2.jpg"
import slider3 from "../images/slider-3.jpg"
import slider4 from "../images/slider-4.jpg"






// export default function SlickCarousel() {
//   return (
//     <div>
//       <Carousel
//         infiniteLoop={true}
//         autoPlay={true}
//         showStatus={false}
//         showArrows={false}
//         showThumbs={false}
//         interval={5000}
//       >
//         <div>
//           <img src={slider1} alt=''/>
//           {/* <p className="legend">Legend 1</p> */}
//         </div>
//         <div>
//           <img src={slider2} alt='' />
//           {/* <p className="legend">Legend 2</p> */}
//         </div>
//         <div>
//           <img src={slider3} alt='' />
//           {/* <p className="legend">Legend 3</p> */}
//         </div>
//         <div>
//           <img src={slider4} alt='' />
//           {/* <p className="legend">Legend 3</p> */}
//         </div>
//       </Carousel>
     
//     </div>
//   );
// }


class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight:false,
      centerPadding: '60px',
      autoplay: true,
      arrows:true
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={slider1} style={{width:'100%'}}/>
          <div className="home-carousel_slideContent">
           <h2 className="home-carousel_heading_animation">Culture
           {/* <br>
           <div className="home-carousel_content">
            Our Mission is simple - Happiest People . Happiest Customers
            </div></br> */}
           </h2>
           <a href="/life-work">View Openings</a>
          </div>
        </div>
        <div>
          <img src={slider2} style={{width:'100%'}}/>
        </div>
        <div>
          <img src={slider3} style={{width:'100%'}}/>
        </div>
        <div>
          <img src={slider4} style={{width:'100%'}}/>
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider