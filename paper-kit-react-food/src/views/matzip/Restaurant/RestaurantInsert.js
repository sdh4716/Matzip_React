import { CircularProgressLabel } from "@chakra-ui/progress"
import axios from "axios"
import NavbarWhite from "components/Navbars/NavbarWhite"
import React from "react"
import { useState } from "react"
import { Container, Form, Button } from "react-bootstrap"
import { FormGroup, Input, Label } from "reactstrap"

const RestaurantInsert = (props) => {
    const [formContent , setFormContent]= useState({
        name : '',
        food : '한식',
        introduction : '',
        ownername : ''
    })
    const getValue =(e) =>{
        setFormContent({
            ...formContent,
           [e.target.name] : e.target.value
        })
    }
    const submitBoard = () =>{
        axios.post('/matzip/resinsert',{ 
            name : formContent.name,
            food : formContent.food,
            introduction : formContent.introduction,
            ownername : formContent.ownername
          }).then(()=>{ //결과
            alert("등록완료")
            props.history.push("/")
          })
    }
    return(
        <>
        <NavbarWhite/>
        <br/><br/><br/><br/><br/><br/>
        <Container>
        <Form>
            <Form.Group className="mb-3" controlId="name" >
                <Form.Label>상호명</Form.Label>
                <Form.Control type="text"  name="name" onChange={getValue} />
            </Form.Group>

            <Form.Group>
                <Label for="food">음식 종류</Label>
                <Form.Control 
                as="select" 
                name="food" 
                id="food" 
                onChange={getValue}
                >
                <option value="한식">한식</option>
                <option value="일식">일식</option>
                <option value="양식">양식</option>
                <option value="중식">중식</option>
                <option value="디저트">디저트</option>
                <option value="야식">야식</option>
                <option value="분식">분식</option>
                <option value="기타">기타</option>
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="ownername" >
                <Form.Label>대표자명</Form.Label>
                <Form.Control type="text" name="ownername" onChange={getValue} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="introduction" >
                <Form.Label>소개</Form.Label>
                <Form.Control as="textarea" name="introduction" rows={3} onChange={getValue} />
            </Form.Group>
            <Button type="button" variant="secondary" onClick={submitBoard}>전송</Button>
        </Form>
       </Container>
        </>
    )
}
export default RestaurantInsert;