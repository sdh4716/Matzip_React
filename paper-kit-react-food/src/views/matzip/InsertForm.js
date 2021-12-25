import { useState } from "react";
import axios from 'axios';
import { Button, Container, Form } from "react-bootstrap";
const InsertForm = (props) => {
    const [formContent , setFormContent]= useState({
        title : '',
        content :'',
        writer : sessionStorage.getItem("ID")
    })
    const getValue =(e) =>{
        setFormContent({
            ...formContent,
           [e.target.name] : e.target.value
        })
    }
    const submitBoard = () =>{
        axios.post('/matzip/freeinsert',{ 
            title : formContent.title,
            content : formContent.content,
            writer : formContent.writer

          }).then(()=>{ //결과
            alert("등록완료")
            props.history.push("/freeboard")
          })
    }
    return(
      <Container>
        <Form>
            <Form.Group className="mb-3" controlId="title" >
                <Form.Label>title</Form.Label>
                <Form.Control type="text" placeholder="title" name="title" onChange={getValue} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="writer">
                <Form.Label>writer</Form.Label>
                <Form.Control type="text" value={sessionStorage.getItem("ID")} name="writer" onChange={getValue}  readonly="readonly"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="content" >
                <Form.Label>content</Form.Label>
                <Form.Control as="textarea" name="content" rows={3} onChange={getValue} />
            </Form.Group>
            <Button variant="secondary" onClick={submitBoard}>전송</Button>
        </Form>
       </Container>

    )
}
export default InsertForm;