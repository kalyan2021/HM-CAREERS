import React,{Component} from "react";
import '../App.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slicimg from "./Carousel.json"







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
      arrows:true,
    };
    return (
      <Slider {...settings}>
        {
          slicimg && slicimg.map( slicks =>{
            return(
              <div className="home-carousel" key={slicks.id}>
                <img src={slicks.pic}/>
                <br />
                {slicks.caption}
              </div>
            )
          })
        }
      </Slider>
    );
  }
}
export default SimpleSlider