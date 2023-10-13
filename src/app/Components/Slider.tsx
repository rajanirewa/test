'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Settings } from "react-slick";


type settings = {
  dots: boolean;
  speed: number;
  slidesToShow: number;
  centerMode: boolean;
  arrows: boolean;
  vertical: boolean;
  autoplay: boolean;
  autoplaySpeed: number;
  infinite: boolean;
  responsive: {
      breakpoint: number;
      settings: {
          slidesToShow: number;
          slidesToScroll: number;
      };
  }[];
};

export default class SimpleSlider extends Component {
  render() {
    const settings: settings = {
        dots: false,
        speed: 5000,
        slidesToShow: 7,
        centerMode: true,
        arrows: false,
        vertical: true,
        // verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
            ],
    };
    return (
        <Slider {...settings}>
        <div className='col-md-12 grid grid-2 opacity-low'>
            <div className="grid-inner p-2">Practice makes perfect; build proficiency in patterns with your favorite stocks</div>
        </div>
        <div className='col-md-12 grid grid-3 opacity-medium'>
            <div className="grid-inner p-2">Leverage the odds in your favor with trading psychology</div>
        </div>
        <div className='col-md-12 grid grid-4 opacity-high'>
            <div className="grid-inner p-2">Minimize Stop Losses, Maximize Target Hits; get down with the nitty-gritty of trading</div>
        </div>
        <div className='col-md-12 grid grid-5 opacity-medium'>
            <div className="grid-inner p-2">No worries in our world: Safe and Secured Simulated environment to help you learn better</div>
        </div>
        <div className='col-md-12 grid grid-6 opacity-low'>
            <div className="grid-inner p-2">Risk-free and fun! With a virtual cash feature, get ready for the real market!</div>
        </div>
        <div className='col-md-12 grid grid-6 opacity-low'>
            <div className="grid-inner p-2">Intuitive. Interactive. Fun and FREE!</div>
        </div>
        <div className='col-md-12 grid grid-2 opacity-hight'>
        <div className="grid-inner p-2">Practice makes perfect; build proficiency in patterns with your favorite stocks</div>
        </div>
        <div className='col-md-12 grid grid-3 opacity-medium'>
            <div className="grid-inner p-2">Leverage the odds in your favor with trading psychology</div>
        </div>
        
        </Slider>
    );
  }
}