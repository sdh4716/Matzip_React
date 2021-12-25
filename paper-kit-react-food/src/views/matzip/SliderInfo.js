import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewCardPractice from './NewCardPractice';
import { Card, Container } from "reactstrap";
import { Box } from "@chakra-ui/layout";

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
        arrows:true,
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
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
       
      };
    return (
      <div>
        <Slider {...settings}>
          <div align="center">
            <Container>
            <Box>
          <div class="lb-image" class="d-none d-lg-block"> <img src={require("assets/img/food/res1.png").default} height="300px" width="500px"/></div>
          </Box>
          </Container>
          </div>

          <div align="center">
            <Container>
            <Box>
          <div class="lb-image" class="d-none d-lg-block"> <img src={require("assets/img/food/res1.png").default} height="300px" width="500px"/></div>
          </Box>
          </Container>
          </div>
        </Slider>
        <br/>
        <br/>
        <br/>
      </div>
      
    );
  }
}