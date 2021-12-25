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
import './matzip_CSS/Login.css'
import React, { useState } from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
// core components
import Footer from "./Footer";
import NavbarWhite from 'components/Navbars/NavbarWhite';
import axios from 'axios';

function Login(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });

  const [login, setLogin]= useState({
    id:'',
    password:'',
  });

  const getValue= (e)=>{ //입력시 기존에 값에 입력된값을 넣는다
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const LoginBtn= ()=>{ 
    //유효성검사
    if(login.id===''){
      alert("ID를 입력하세요")
      return false
    }
    if(login.password===''){
      alert("PASSWORD를 입력하세요")
      return false
    }

    axios.post('/matzip/login',{ 
      id:login.id,
      password: login.password
    }).then((resp)=>{ //결과
      if(resp.data=='fail'){
        alert("회원이 아닙니다")
      }
      if(resp.data=='IpPass'){
        alert("PASSWORD가 일치하지않습니다")
      }
      if(resp.data=='success'){
        alert("반갑습니다")
        // props.history.push("/index") 이걸로하면 화면만 바뀌는거라 이전 페이지대로 로그인이 남아있음
        window.location.replace("/index") //요걸로 하면 페이지를 다시 바꿔줘서 로그아웃으로 변경됨
        sessionStorage.setItem("ID",login.id)
      }
    })


  }
  return (
    <>
      <NavbarWhite/>
      <div
        className="page-header2"
        style={{
          backgroundImage:
            "url(" + require("assets/img/logfood.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h2 className="title mx-auto">Login</h2>
                <div className="social-line text-center">
                  
                </div>
                <Form className="register-form">
                <label>ID</label>
                  <Input placeholder="ID" type="text" name="id" onChange={getValue}/>
                  <label>Password</label>
                  <Input placeholder="Password" type="password" name="password" onChange={getValue}/>
                  <Button block className="btn-round" color="danger" onClick={LoginBtn}>
                    로그인
                  </Button>
                </Form>
              
                <div className="col text-center">
                <Link to="/join">
                <Button
                  className="btn-round"
                  color="danger"
                  // size="lg"
                  target="_blank"
                >
                 회원가입
                </Button>
                </Link>
              </div>
              </Card>
              
            </Col>
          </Row>
        </Container>
       <Footer/>
      </div>
    </>
  );
}

export default Login;
