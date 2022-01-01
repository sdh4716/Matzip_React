import { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Container, Form } from "react-bootstrap";
import NavbarWhite from "components/Navbars/NavbarWhite";
import { Input } from "reactstrap";

const InsertFormAdImage = (props) => {
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
    const handleFileChange= (e)=>{
        setAdImageupload(e.target.files)
    }

    
    /*const [loadImage, setLoadImage] = useState([])

    useEffect(()=>{ //초기실행
        load();
    },[])

    const load =()=>{ //업로드이미지 가져오기
        axios.get('/matzip/adImageget')
        .then((resp)=>{
            console.log(resp.data);
            setLoadImage(resp.data);
        })
    }*/

    const uploadImage = () =>{
        const formData= new FormData();
       // const formWriter= new FormData();
        for(let i=0; i< adboardImage.length; i++){
            formData.append("myfile", adboardImage[i], adboardImage[i].name)
            formData.append("writer", sessionStorage.getItem("ID"))
            formData.append("title", adboard.title)
            formData.append("content", adboard.content)
        }
        const config= {
            headers:{
                "content-type": "multipart/form-data;",
            },
        }

        axios.post('/matzip/adImageinsert', formData, config)
        .then(()=>{ //결과
            alert("등록완료")
            props.history.push("/advboard")
        })
    }

    return(
        <>
        <NavbarWhite/>
        <br/><br/><br/><br/><br/><br/>
        <Container>
            <h5>음식점 등록</h5>
            <Form.Group className="mb-3" controlId="title" >
                <Form.Label>이벤트명</Form.Label>
                <Form.Control type="text" placeholder="title" name="title" onChange={getValue} />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="writer" >
                <Form.Label>상호명</Form.Label>
                <Form.Control type="text" placeholder="writer" name="writer" readOnly="readonly" value={sessionStorage.getItem("ID")}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="content" >
                <Form.Label>이벤트 내용</Form.Label>
                <Form.Control as="textarea" name="content" rows={3} onChange={getValue} />
            </Form.Group>
            <Input type="file" onChange={handleFileChange} />
			<Button onClick={uploadImage}>추가</Button>
           
            {/* {
                loadImage.map((board,index)=>(
                  <ImageItem key={index} board={board}/>

                ))
            }  */}
           
       </Container>
        </>
    )
}
export default InsertFormAdImage;