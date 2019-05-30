import React, { Component } from "react";
import Slider from "react-slick";
import CardProduct from './CardProduct';
import Data from '../data';

const data = Data

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      
      <div>
        <h4> Products </h4>
        <Slider {...settings}>
          {Data.map((item, index) => (
            <div key={index}>
              <CardProduct title={item.title} text={item.text} link={item.link} src={item.img}/>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}