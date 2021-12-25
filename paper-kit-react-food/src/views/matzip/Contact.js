import React, { useState } from "react";
import './matzip_CSS/Card.css'

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Card,
  Container
} from "reactstrap";
import axios from "axios";

const Contact = (props) => {
  const [formContent , setFormContent]= useState({
    name : '',
    content :''
})
const getValue =(e) =>{
    setFormContent({
        ...formContent,
       [e.target.name] : e.target.value
    })
}
const submitBoard = () =>{
    axios.post('/matzip/contactinsert',{ 
        name : formContent.name,
        content : formContent.content

      }).then(()=>{ //결과
        alert("등록완료")
        props.history.push("/")
      })
}

  return (
    <div>
    <hr/>
    <br/><br/>
    <Container >
    <div className="card-title">Contact</div>
    <Card className="card-contact ml-auto mr-auto card-plain">
    <form>
      <FormGroup>
        <Label for="name">name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          onChange={getValue}
          placeholder="이름을 입력하세요"
          
        />
      </FormGroup>
      <FormGroup>
        <Label for="content">Content</Label>
        <Input
          type="textarea"
          name="content"
          id="content"
          placeholder="내용을 입력하세요"
          onChange={getValue}
        />
      </FormGroup>
      <Button color="warning" type="submit" onClick={submitBoard}>
        보내기
      </Button>
    </form>
    </Card>
    </Container>
    </div>
  );
};

export default Contact;