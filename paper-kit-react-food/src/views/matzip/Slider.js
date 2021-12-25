import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewCardPractice from './NewCardPractice';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }


export default class CenterMode extends Component {
    render() {
      const settings = {
        dots:true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        lazyload: true,
       
      };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <NewCardPractice/>
          </div>
          <div>
            <NewCardPractice/>
          </div>
        </Slider>
        <br/>
        <br/>
        <br/>
      </div>
      
    );
  }
}