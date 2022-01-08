import { CircularProgressLabel } from "@chakra-ui/progress"
import axios from "axios"
import NavbarWhite from "components/Navbars/NavbarWhite"
import React from "react"
import { useState } from "react"
import { Container, Form, Button } from "react-bootstrap"
import { Col, FormGroup, Input, Label, Row } from "reactstrap"

const RestaurantInsert = (props) => {
    const [formContent , setFormContent]= useState({
        name : '',
        food : '한식',
        introduction : '',
        ownername : sessionStorage.getItem("ID"),
        address:'' // 주소
    })

    const [adboardImage, setAdImageupload]= useState(null)

    const handleFileChange= (e)=>{
        setAdImageupload(e.target.files)
    }

    // form에 입력된 값을 가져온다
    const getValue =(e) =>{
        setFormContent({
            ...formContent,
           [e.target.name] : e.target.value
        })
    }
    // const submitBoard = () =>{
    //     axios.post('/matzip/resinsert',{ 
    //         name : formContent.name,
    //         food : formContent.food,
    //         introduction : formContent.introduction,
    //         ownername : formContent.ownername,
    //         wido : formContent.wido,
    //         gyeongdo : formContent.gyeongdo,

    //       }).then(()=>{ //결과
    //         alert("등록완료")
    //         props.history.push("/")
    //       })
    // }

    //추가버튼 이벤트처리
    const submitBoard = () =>{
        const formData= new FormData();
        for(let i=0; i< adboardImage.length; i++){
            formData.append("file", adboardImage[i], adboardImage[i].name)
            formData.append("name", formContent.name)
            formData.append("food", formContent.food)
            formData.append("ownername", formContent.ownername)
            formData.append("introduction", formContent.introduction)
            formData.append("member_id", sessionStorage.getItem("ID"))
            formData.append("address", formContent.address)
        }
        const config= {
            headers:{
                "content-type": "multipart/form-data;",
            },
        }

        axios.post('/matzip/resinsert', formData, config)
        .then(()=>{ //결과
            alert("식당 등록완료")
            props.history.push("/restaurant")
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
                <Form.Label>작성자</Form.Label>
                <Form.Control type="text" name="ownername" value={sessionStorage.getItem("ID")} readonly="readonly" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="location" >
                <Form.Label>위치정보 (맵에 표시되는 주소입니다 정확하게 입력해주세요!!)</Form.Label>
                <Form.Control placeholder="주소" type="text" name="address" onChange={getValue}/>

            </Form.Group>

            <Form.Group className="mb-3" controlId="introduction" >
                <Form.Label>소개</Form.Label>
                <Form.Control as="textarea" name="introduction" rows={3} onChange={getValue} />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>식당 대표 사진</Form.Label>
                <Form.Control type="file" onChange={handleFileChange}/>
            </Form.Group>

            <Button type="button" variant="secondary" onClick={submitBoard}>전송</Button>
        </Form>
       </Container>
        </>
    )
}
export default RestaurantInsert;