import React,{Component} from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Form, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap"
import NavbarWhite from "components/Navbars/NavbarWhite"
import styled from "styled-components"
import '../matzip_CSS/Card.css'
const Adview = (props) =>{
    const Navbar = styled.div
    `
        margin-bottom : 100px
    `;

  

    const [loadImage, setLoadImage] = useState({
        num:'',
        title:'',
        writer:'',
        adname:'',
        content:'',
        adurl:''
    })
    
    useEffect(()=>{ //초기실행
        let num= props.match.params.num
        console.log(num);
        load(num);
    },[])

    const load =(num)=>{ //업로드이미지 가져오기
        axios.get("/matzip/adImage/"+num)
        .then((resp)=>{
            console.log(resp.data);
            setLoadImage(resp.data);
        })

    }

    return(
        <>
        <div>
        <Navbar>
        <NavbarWhite/>
        </Navbar>
            <Container>
            <div className="card-shadow">
            <Card 
                className="card-plain"
                body

            >
                <CardBody>
                <CardTitle tag="h5">
                {loadImage.title}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                상호명 : {loadImage.writer}
                </CardSubtitle>
                <br/>
              
                <CardText >
                {/* style={{ -webkit-line-clamp: 2; }} */}
                {loadImage.content}
                </CardText>

                <img src={process.env.PUBLIC_URL +"/image/"+ loadImage.adname} alt="image" width="400" height="300"/>
                </CardBody>

                {/* <Form>
        
            <Form.Group className="mb-3" controlId="title" >
                <Form.Label>제목:</Form.Label>
                <Form.Control type="text" placeholder="title" name="title"  value={loadImage.title}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="title" >
                <Form.Label>상호명:</Form.Label>
                <Form.Control plaintext readOnly defaultValue={loadImage.writer} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="content" >
                <Form.Label>내용:</Form.Label>
                <Form.Control as="textarea" name="content" rows={3}  value={loadImage.content}/>
            </Form.Group>
            {
                  sessionStorage.getItem("ID") === loadImage.writer?(
                    <div align="right">
                    <Button variant="danger" >수정</Button>
                    <Button variant="dark" >삭제</Button>
                    </div>
                  ):(
                    null
                  )
                
            }
            </Form> */}
            </Card>
            </div>
            
            </Container>
        </div>
        </>
    )
}
export default Adview;