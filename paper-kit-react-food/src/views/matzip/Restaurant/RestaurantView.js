import axios from "axios";
import NavbarWhite from "components/Navbars/NavbarWhite";
import React, { useEffect, useState } from "react";
import {Form} from "react-bootstrap";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Label, Row } from "reactstrap";
import SliderInfo from '../SliderInfo'
import Map from '../Map';
import Star_Rating from "components/Star_Rating";
import Star_Rating2 from "components/Star_Rating2";
import { Table, Thead } from "@chakra-ui/react";

const RestaurantView=(props)=>{
    const [formContent , setFormContent]= useState({ //상세정보
        num:'',
        ownername: '',
        name : '',
        introduction :'',
        newname: '',
    })

    const [ratings, setRating] = useState(0) // initial rating value
    
    const getRating= (values)=>{
        setRating(values)
    }

    useEffect(()=>{
        console.log(sessionStorage.getItem("ID"))
    })

    useEffect(()=>{ //초기실행
        let num= props.match.params.num
        console.log(num);
        submitBoard(num);
        resCommentlist(num);
    },[])

    const submitBoard = (num) =>{ 
        axios.get('/matzip/resview/'+num) 
        .then((resp)=>{ //결과
            console.log(resp.data);
            setFormContent(resp.data);
        })
    }

    const [rescommentList, setresCommetList]= useState([]) //댓글 저장

    const resCommentlist= (num)=>{ //댓글 가져오기
        axios.get('/matzip/resCommentList/'+num)
        .then((resp)=>{
            console.log(resp.data)
            setresCommetList(resp.data)
        })
    }


    const [replyContent , setReplyContent]= useState({
        content :'',
        writer : sessionStorage.getItem("ID"),
        star : '',
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
            star :  (ratings/20)

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
            <div className="card-shadow">
            <Card 
                className="card-plain info-title"
                body

            >
                <CardBody>
                <CardTitle tag="h5">
                {formContent.name}
                </CardTitle>
                {/* <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                </CardSubtitle> */}
                <br/>
                <CardText>
                상호명 : {formContent.name}
                </CardText>
                <CardText>
                대표자명 : {formContent.ownername}
                </CardText>
                <CardText>
                식당 소개 : {formContent.introduction}
                </CardText>
               
                <Row>
                    <Col>
                    <img src={process.env.PUBLIC_URL +"/image/"+ formContent.newname} alt="image" 
                    style={{ width: 400 },{ height: 300 }}/>
                    </Col>
                    <Col>
                    <Map style={{ width: 400 },{ height: 300 }}/>
                    </Col>

                </Row>
                
                
                

                </CardBody>
                {
                 sessionStorage.getItem("ID") !== null?(
            <>
                
            <div className="card-title">평점 등록({ratings})</div>
            <Row className="mb-3">
                <Col sm="7">
                <Form.Control type="text" placeholder="200자 이내로 리뷰를 남겨주세요." size="50" maxLength='200' name="content" onChange={getValue} />
                </Col>
                <Star_Rating getRating={getRating}/>
                <Button className="btn-round" color="danger" onClick={submitReply} position='absolute'> 등록 </Button>
            </Row>

            
            <br/>
            </>
             ):(
                null
             )
        }

            <table class='table'>
        <thead>
            <tr>
                <th>번호</th>
                <th>작성자</th>
                <th>평가</th>
                <th>작성일</th>
                <th>별점</th>
            </tr>
        </thead>
        <tbody>
        {rescommentList.map((resview_reply) => (
            <tr>
              <th> {resview_reply.rcnum} </th>
              <th> {resview_reply.writer} </th>
              <th> {resview_reply.content}</th>
              <th> {resview_reply.regdate} </th>
              <th> <Star_Rating2 star={resview_reply.star}/> </th>
            {
            sessionStorage.getItem("ID") == resview_reply.writer?(

            <th> <Button color="danger" size="sm" >삭제</Button></th>

             ):(
                null
             )
            }
            </tr>
          ))}
        </tbody>
        </table>
            </Card>
            </div>
            
            </Container>
    
        </>
    )

}
export default RestaurantView;