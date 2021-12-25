import React, { useState } from 'react';
import axios from "axios";

import {
    Button,
    Card,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    FormGroup,
    Label,
  } from "reactstrap";
import Footer from './Footer';
import NavbarWhite from 'components/Navbars/NavbarWhite';

const Join=(props)=>{
  const [join, setJoin]= useState({
    id:'',
    password:'',
    address:'',
    name:'',
    role:'',
  });

  const [pass, setPass]= useState()

  const getPass= (e)=>{
    setPass(e.target.value);
  }

  const getValue= (e)=>{ //입력시 기존에 값에 입력된값을 넣는다
    setJoin({
      ...join,
      [e.target.name]: e.target.value
    })
  }

  const joinBtn= ()=>{ 
      //유효성검사
      if(join.id===''){
        alert("id를 입력하세요")
        return false
      }
      if(join.password===''){
        alert("password를 입력하세요")
        return false
      }
      if(join.password!==pass){ //password 확인
        alert("password를 다시입력하세요")
        return false
      }
      if(join.address===''){
        alert("주소를 입력하세요")
        return false
      }
      if(join.name===''){
        alert("이름를 입력하세요")
        return false
      }



    axios.post('/matzip/join',{ 
      id:join.id,
      password: join.password,
      address: join.address,
      name: join.name,
      role: join.role
    }).then((resp)=>{ //결과+id중복확인
      if(resp.data=='fail'){
        alert("이미 등록된 ID입니다")
      }
      if(resp.data=='success'){
        alert("회원가입 완료")
        props.history.push("/login")
      }
    })
}
    return(
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
                <Col className="mx-auto" lg="4" md="6">
                  <Card className="card-register">
                  <h2 className="title mx-auto">Join</h2>
                    <div className="social-line text-center">
                    </div>
                    <Form className="register-form">
                    <label>ID</label>
                    <Input placeholder="ID" type="text" name="id" onChange={getValue} value={join.id}/>
                    <label>Password</label>
                    <Input placeholder="Password" type="password"  name="password" onChange={getValue} />
                    <label>Password-Check</label>
                    <Input placeholder="Password_Check" type="password" name="pass" onChange={getPass} />
                    <label>Address</label>
                    <Input placeholder="Address" type="text" name="address" onChange={getValue} />
                    <label>name</label>
                    <Input placeholder="사업자이시면 상호명을 입력하세요." type="text" name="name" onChange={getValue} />
                    
                    <FormGroup check algin="center">
                    <Label check>
                      <Input type="checkbox" value="1" name="role" onChange={getValue} />{' '}
                      사업자로 회원가입하기
                      <span className="form-check-sign">
                        <span className="check"></span>
                      </span>
                    </Label>
                    </FormGroup>


                      <Button
                        block
                        className="btn-round"
                        color="danger"
                        type="button"
                        onClick={joinBtn}
                      >
                        회원가입
                      </Button>
                    </Form>
                    <div className="forgot">
                      {/* <Button
                        className="btn-link"
                        color="danger"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Forgot password?
                      </Button> */}
                    </div>
                  </Card>
                  <div className="col text-center">
                    {/* <Button
                      className="btn-round"
                      outline
                      color="neutral"
                      href="/register-page"
                      size="lg"
                      target="_blank"
                    >
                     회원가입
                    </Button> */}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>{" "}
          <Footer/>
        </>

    )

}
export default Join;