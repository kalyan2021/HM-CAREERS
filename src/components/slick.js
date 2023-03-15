// import  Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import React from 'react';
// import "../App.css";
// import data from '../components/Carousel.json'

// const ImageSlider = ({images}) => {
  
//     const settings = {
//       infinite: true,
//       dots: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       lazyLoad: true,
//       autoplay: true,
//     autoplaySpeed: 2000,
     
//     };

//     const image = data.data 
//     return (
//       <>
     
//         <div>
//           <Slider {...settings}>
//             {image.map((data) => (
//               <div key={data.id}>
//                 <img src={data.src}  alt={data.alt} />
//               </div>
//             ))}
//           </Slider>
//         </div>
//             </>
//     )
//   }
//   export default ImageSlider;