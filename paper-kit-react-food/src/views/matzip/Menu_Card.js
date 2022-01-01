import React from "react";
import { Grid, Box } from "@chakra-ui/react"
import { Card, CardImg, Col, Container, Row } from "reactstrap"

import './matzip_CSS/image.css';
import './matzip_CSS/Card.css';
import { Link } from "react-router-dom";

const Menu2=()=>{

  const menu1 = (e) =>{
    sessionStorage.setItem("word",'한식')
    
  }
  const menu2 = (e) =>{
    sessionStorage.setItem("word",'일식')
    
  }
  const menu3 = (e) =>{
    sessionStorage.setItem("word",'양식')
    
  }
  const menu4 = (e) =>{
    sessionStorage.setItem("word",'중식')
    
  }
  const menu5 = (e) =>{
    sessionStorage.setItem("word",'디저트')
    
  }
  const menu6 = (e) =>{
    sessionStorage.setItem("word",'야식')
    
  }
  const menu7 = (e) =>{
    sessionStorage.setItem("word",'분식')
    
  }
  const menu8 = (e) =>{
    sessionStorage.setItem("word",'기타')
    
  }


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
          <Card onClick={menu1}>
          <Link to="/respage"
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
          <Card onClick={menu2}>
          <Link to="/respage"
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
          <Card onClick={menu3}>
          <Link to="/respage">
          <div class="lb-wrap" 
          class="text-nowrap bd-highlight">
            <div class="lb-text">
            <h2 class="textfont">양식&nbsp;</h2>
            </div>
            <div class="lb-image" class="d-none d-lg-block" > <img src={require("assets/img/food/yangsick.jpg").default} /></div>
          </div>
          </Link>
          </Card>
        </Col>

        <Col>
          <Card onClick={menu4}>
          <Link to="/respage">
          <div class="lb-wrap"
           class="text-nowrap bd-highlight">
            <div class="lb-text">
            <h2 class="textfont">중식&nbsp;</h2>
            </div>
            <div class="lb-image" class="d-none d-lg-block"> <img src={require("assets/img/food/joongsik.jpg").default} /></div>
          </div>
          </Link>
          </Card>
        </Col>
      </Row>

      <br/>

      <Row>
        <Col>
          <Card onClick={menu5}>
          <Link to="/respage">
          <div class="lb-wrap"
           class="text-nowrap bd-highlight">
            <div class="lb-text">
            <h2 class="textfont">디저트&nbsp;</h2>
            </div>
            <div class="lb-image" class="d-none d-lg-block"> <img src={require("assets/img/food/dessert.jpg").default} /></div>
          </div>
          </Link>
          </Card>
        </Col>

        <Col>
          <Card onClick={menu6}>
          <Link to="/respage">
          <div class="lb-wrap"
           class="text-nowrap bd-highlight">
            <div class="lb-text">
            <h2 class="textfont">야식&nbsp;</h2>
            </div>
            <div class="lb-image" class="d-none d-lg-block"> <img src={require("assets/img/food/yasick.jpg").default} /></div>
          </div>
          </Link>
          </Card>
        </Col>

        <Col>
          <Card onClick={menu7}>
          <Link to="/respage">
          <div class="lb-wrap"
           class="text-nowrap bd-highlight">
            <div class="lb-text">
            <h2 class="textfont">분식&nbsp;</h2>
            </div>
            <div class="lb-image" class="d-none d-lg-block"> <img src={require("assets/img/food/boonsick.jpg").default} /></div>
          </div>
          </Link>
          </Card>
        </Col>

        <Col>
          <Card onClick={menu8}>
          <Link to="/respage">
          <div class="lb-wrap"
           class="text-nowrap bd-highlight">
            <div class="lb-text">
            <h2 class="textfont">기타&nbsp;</h2>
            </div>
            <div class="lb-image" class="d-none d-lg-block"> <img src={require("assets/img/food/guitar.jpg").default} /></div>
          </div>
          </Link>
          </Card>
        </Col>

      </Row>
    </Container>
    </Card>
    </>

)
}

export default Menu2;