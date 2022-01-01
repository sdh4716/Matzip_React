/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React, { useState } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container, Button,FormGroup,Input,InputGroupAddon, InputGroupText, InputGroup, Form, Col} from "reactstrap";


// core components
import './IndexHeader.css';


function IndexHeader() {

  const getValue = (e) =>{
    sessionStorage.setItem("word",e.target.value)
    
  }


  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/food/foodbackground.jpg").default + ")",
            
        }}
      >

      
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="main-title">대동맛지도</h1>
           
            </div>
            <h2 className="main-subtitle text-center">
              당신의 맛집을 공유하세요
            </h2>
            <br/>
            <br/>
            <br/>
            <br/>

            

            <div class="input-group">    
              <input
              style={{borderRadius:'5px'}}
              placeholder="맛집이름검색" type="test" name="word" onChange={getValue} class="form-control"/>
              &nbsp;&nbsp;&nbsp;
              <Link to = {{
                pathname: '/respage'
              
              }}>
              <Button className="" color="danger" >검색</Button> 
              </Link>
              </div>
              
          
          
          </Container>
        </div>
      </div>
      
    </>
  );
}

export default IndexHeader;
