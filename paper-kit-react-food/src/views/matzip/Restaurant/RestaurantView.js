import axios from "axios";
import NavbarWhite from "components/Navbars/NavbarWhite";
import React, { useEffect, useState } from "react";
import {Form} from "react-bootstrap";
import { Badge, Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Label, Row } from "reactstrap";
import SliderInfo from '../SliderInfo'
import Map from '../Map';
import Star_Rating from "components/Star_Rating";
import Star_Rating2 from "components/Star_Rating2";
import { Table, Thead } from "@chakra-ui/react";
import Map_address from "./Map_address";

const RestaurantView=(props)=>{
    const [formContent , setFormContent]= useState({ //상세정보
        num:'',
        ownername: '',
        name : '',
        introduction :'',
        newname: '',
        address: '',
    })

    const [ratings, setRating] = useState(0) // initial rating value
    
    const [Avgstar, setAvgstar] = useState(0) // 별점 평균을 가져온다

    const getRating= (values)=>{
        setRating(values)
    }


    useEffect(()=>{ //초기실행
        let num= props.match.params.num
        console.log(num);
        submitBoard(num);
        resCommentlist(num);
        loadAvgstar(num);
  
    },[])

    const submitBoard = (num) =>{ 
        axios.get('/matzip/resview/'+num) 
        .then((resp)=>{ //결과
            console.log(resp.data);
            setFormContent(resp.data);
        })
    }

    const loadAvgstar =(num)=>{ 
        axios.get('/matzip/avgStar/'+num)
        .then((resp)=>{ 
            console.log(resp.data)
            // resp.data가 NaN이면 0을 return 
            if(isNaN(resp.data)){
                return 0;
            // 소수 첫째자리에서 반올림   
            }else{
                return setAvgstar(resp.data.toFixed(1));
            }
           

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

    const resdelete = () => {
        axios.delete('/matzip/resDelete/'+formContent.num) 
        .then((resp)=>{ //결과
            alert("삭제 완료")
            window.location.replace("/respage")
        })
    }

    const replydelete = (rcnum) =>{ // 댓글 삭제
        axios.delete('/matzip/resDelete/'+rcnum) 
        .then((resp)=>{ //결과
            alert("삭제 완료")
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
                {formContent.name} &nbsp;
                <Badge pill>
                    {Avgstar}
                </Badge>
                </CardTitle>
                <br/>
                <Form>
                    <Form.Group className="mb-3" controlId="name" >
                    <Form.Label>상호명</Form.Label>
                    <Form.Control type="text"  name="name" value={formContent.name} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="name" >
                    <Form.Label>작성자</Form.Label>
                    <Form.Control type="text"  name="name" value={formContent.ownername} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="name" >
                    <Form.Label>식당 소개</Form.Label>
                    <Form.Control as="textarea" rows={10}  name="name" value={formContent.introduction} />
                    </Form.Group>
                </Form>

                <br/>
                
                {/* 이미지/맵 */}
                <Row>
                    <Col>
                    <img src={process.env.PUBLIC_URL +"/image/"+ formContent.newname} alt="image" 
                    style={{ width: 400 },{ height: 400 }}/>
                    </Col>
                    <Col>
                    <Map_address address={formContent.address} name={formContent.name} />
                    </Col>

                </Row>
            {sessionStorage.getItem("ID") == formContent.ownername?(
                <>
                <br/><br/>
                <Row>
                    
                    <Col  align="right">
                        <Button color="danger" onClick={resdelete}>
                            삭제
                        </Button>
                    </Col>
                </Row>
                </>
            ):(
                null
            )
            }
                </CardBody>
                <hr/>

        {/* 평점 등록 */}
        {
        sessionStorage.getItem("ID") !== null?(
            <>
            <h3 className="mb-3">평점 등록</h3>
            <Row className="mb-3">
                <Col sm="7">
                <Form.Control type="text" placeholder="200자 이내로 리뷰를 남겨주세요." size="50" maxLength='200' name="content" onChange={getValue} />
                </Col>
                <Star_Rating getRating={getRating}/>
                &nbsp;&nbsp;
                <div >
                <Button  className="btn-round" color="danger" onClick={submitReply} position='absolute'> 등록 </Button>
                </div>
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
                {/* <th>삭제</th> */}
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

            <th> <Button color="danger" size="sm" onClick={()=>{replydelete(resview_reply.rcnum);}} >삭제</Button></th>

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