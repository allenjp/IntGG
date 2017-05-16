import React from 'react'
import Slider from 'react-slick'
import Card from './Card'

class Banner extends React.Component {
  render() {
    let settings = {
      dots: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      centerMode: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div><Card data={'1'}/></div>
        <div><Card data={'2'}/></div>
        <div><Card data={'3'}/></div>
        <div><Card data={'4'}/></div>
        <div><Card data={'5'}/></div>
        <div><Card data={'6'}/></div>
      </Slider>
    )
  };
};

export default Banner;
