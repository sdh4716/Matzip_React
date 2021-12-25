import React from "react";
import { Grid, Box } from "@chakra-ui/react"
import { Card, CardImg, Col, Container, Row } from "reactstrap"

import './matzip_CSS/image.css';
import './matzip_CSS/Card.css';
import { Link } from "react-router-dom";

const Menu2=()=>{


//card-plain 카드 그림자 제거 및 호버 제거
return(
  <>
<hr/>
<Card className="card-menu ml-auto mr-auto card-plain">
  <div className="card-title">메뉴별 맛집</div>
  <br/>
  <Container>
  <br/>
      <Row>
        <Col>
          <Card>
          <Link to="/respagefood/한식"
             >
          <div class="lb-wrap"
           class="text-nowrap bd-highlight">
            <div class="lb-text">
            <h2 class="textfont" >한식&nbsp;</h2>
            </div>
            
            <div class="lb-image" class="d-none d-lg-block"> <img src={require("assets/img/food/hansick.jpg").default} /></div>
          </div>
          </Link>
          </Card>
        </Col>
        <Col>
          <Card>
          <Link to="/respagefood/일식"
             >
          <div class="lb-wrap"
           class="text-nowrap bd-highlight">
            <div class="lb-text">
            <h2 class="textfont">일식&nbsp;</h2>
            </div>
            <div class="lb-image" class="d-none d-lg-block"> <img src={require("assets/img/food/jap.jpg").default} /></div>
          </div>
          </Link>
          </Card>
        </Col>
        <Col>
        <Link to="/respagefood/양식"
             >
          <Card>
          <div class="lb-wrap" 
          class="text-nowrap bd-highlight">
            <div class="lb-text">
            <h2 class="textfont">양식&nbsp;</h2>
            </div>
            <div class="lb-image" class="d-none d-lg-block" > <img src={require("assets/img/food/yangsick.jpg").default} /></div>
          </div>
          </Card>
          </Link>
        </Col>
        <Col>
        <Link to="/respagefood/중식"
             >
          <Card>
          <div class="lb-wrap"
           class="text-nowrap bd-highlight">
            <div class="lb-text">
            <h2 class="textfont">중식&nbsp;</h2>
            </div>
            <div class="lb-image" class="d-none d-lg-block"> <img src={require("assets/img/food/joongsik.jpg").default} /></div>
          </div>
          </Card>
          </Link>
        </Col>

      </Row>
      <br/>

      <Row>
        <Col>
        <Link to="/respagefood/디저트"
             >
          <Card>
          <div class="lb-wrap"
           class="text-nowrap bd-highlight">
            <div class="lb-text">
            <h2 class="textfont">디저트&nbsp;</h2>
            </div>
            <div class="lb-image" class="d-none d-lg-block"> <img src={require("assets/img/food/dessert.jpg").default} /></div>
          </div>
          </Card>
          </Link>
        </Col>
        <Col>
        <Link to="/respagefood/야식"
             >
          <Card>
          <div class="lb-wrap"
           class="text-nowrap bd-highlight">
            <div class="lb-text">
            <h2 class="textfont">야식&nbsp;</h2>
            </div>
            <div class="lb-image" class="d-none d-lg-block"> <img src={require("assets/img/food/yasick.jpg").default} /></div>
          </div>
          </Card>
          </Link>
        </Col>
        <Col>
        <Link to="/respagefood/분식"
             >
          <Card>
          <div class="lb-wrap"
           class="text-nowrap bd-highlight">
            <div class="lb-text">
            <h2 class="textfont">분식&nbsp;</h2>
            </div>
            <div class="lb-image" class="d-none d-lg-block"> <img src={require("assets/img/food/boonsick.jpg").default} /></div>
          </div>
          </Card>
          </Link>
        </Col>
        <Col>
        <Link to="/respagefood/기타"
             >
          <Card>
          <div class="lb-wrap"
           class="text-nowrap bd-highlight">
            <div class="lb-text">
            <h2 class="textfont">기타&nbsp;</h2>
            </div>
            <div class="lb-image" class="d-none d-lg-block"> <img src={require("assets/img/food/guitar.jpg").default} /></div>
          </div>
          </Card>
          </Link>
        </Col>

      </Row>
    </Container>
    </Card>
    </>

)
}

export default Menu2;