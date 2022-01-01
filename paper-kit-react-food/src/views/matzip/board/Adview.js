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
                <CardText>
                {loadImage.content}
                </CardText>
                <img src={process.env.PUBLIC_URL +"/image/"+ loadImage.adname} alt="image" />
                </CardBody>
            </Card>
            </div>
            
            </Container>
        </div>
        </>
    )
}
export default Adview;