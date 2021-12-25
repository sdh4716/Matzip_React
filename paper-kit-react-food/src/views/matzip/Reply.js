import axios from 'axios';
import { useState } from 'react';
import { Form } from "react-bootstrap";
import { Button, Col, Row,Container, Label} from "reactstrap";

const Reply=(props)=>{
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
    const submitBoard = (num) =>{
        axios.post('/matzip/resCommentInsert'+num,{
            content : replyContent.content,
            writer : replyContent.writer,
            star : replyContent.star

          }).then(()=>{ //결과
            alert("등록완료")
            window.location.replace("/info")
          })
    }
    return(
        <Container>
            <div className="card-title">댓글</div>
            <Row className="mb-3">
                <Col sm="10">
                <Form.Control type="text" placeholder="200자 이내로 리뷰를 남겨주세요." size="50" maxLength='200' name="content" onChange={getValue} />
                </Col>
               
                <Button className="btn-round" color="danger" onClick={submitBoard} position='absolute'> 등록 </Button>
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
    )
}
export default Reply;