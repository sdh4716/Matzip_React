import axios from "axios";
import NavbarWhite from "components/Navbars/NavbarWhite";
import React, { useEffect, useState } from "react";
import {Form} from "react-bootstrap";
import { Button, Col, Container, Label, Row } from "reactstrap";
import SliderInfo from '../SliderInfo'
import Map from '../Map';

const RestaurantView=(props)=>{
    const [formContent , setFormContent]= useState({ //상세정보
        num:'',
        ownername: '',
        name : '',
        introduction :'',
    })

    useEffect(()=>{ //초기실행
        let num= props.match.params.num
        console.log(num);
        submitBoard(num);
    },[])

    const submitBoard = (num) =>{ 
        axios.get('/matzip/resview/'+num) 
        .then((resp)=>{ //결과
            console.log(resp.data);
            setFormContent(resp.data);
        })
    }


    const [replyContent , setReplyContent]= useState({
        content :'',
        writer : sessionStorage.getItem("ID"),
        star : '1'
    })
    const getValue =(e) =>{
        setReplyContent({
            ...replyContent,
           [e.target.name] : e.target.value
        })
    }
    const submitReply = () =>{ //댓글 추가
        axios.post('/matzip/resCommentInsert/'+formContent.num,{
            content : replyContent.content,
            writer : replyContent.writer,
            star : replyContent.star

          }).then(()=>{ //결과
            alert("등록완료")
            window.location.replace("/resview/"+formContent.num)
          })
    }
    return(
<>
        <NavbarWhite/>
        <br/><br/><br/><br/><br/>
        <Container>
        <div className="card-title">{formContent.name}</div>
        </Container>
        <br/>
        <div>
            
            {/* <SectionCarousel/> */}
            <SliderInfo/>
            
            <Container sm="10">
            <hr/>
            <Row>
                <Col>
        <div className="info-title">
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            상호명
            </Form.Label>
            <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={formContent.name} />
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            대표자명
            </Form.Label>
            <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={formContent.ownername} />
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            식당 소개
            </Form.Label>
            <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={formContent.introduction} />
            </Col>
            </Form.Group>
        </Form>  
        </div>

        </Col>
                <Col>
                    <Map/>
                </Col>
            </Row>
            <br/><br/><br/>
            <hr/>

            <Container>
            <div className="card-title">댓글</div>
            <Row className="mb-3">
                <Col sm="10">
                <Form.Control type="text" placeholder="200자 이내로 리뷰를 남겨주세요." size="50" maxLength='200' name="content" onChange={getValue} />
                </Col>
               
                <Button className="btn-round" color="danger" onClick={submitReply} position='absolute'> 등록 </Button>
            </Row>
            <Row>
            <Form.Group>
                <Label for="star">별점</Label>
                <Form.Control 
                as="select" 
                name="star" 
                id="star" 
                onChange={getValue}
                >
                <option value="star1">1</option>
                <option value="star2">2</option>
                <option value="star3">3</option>
                <option value="star4">4</option>
                <option value="star5">5</option>
                </Form.Control>
            </Form.Group>
            </Row>
        </Container>
            <hr/>
        
            </Container>
        </div>
        </>
    )

}
export default RestaurantView;