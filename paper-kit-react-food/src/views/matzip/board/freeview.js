import { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Container, Form } from "react-bootstrap";
import NavbarWhite from "components/Navbars/NavbarWhite";


const FreeView = (props) => { //자유게시판 상세페이지
    const [formContent , setFormContent]= useState({ //상세정보
        num: '',
        title : '',
        content :'',
        writer:'',
    })


    const [freeCommetInsert , setFreeCommet]= useState({ //댓글 작성
        content:'',
        writer: sessionStorage.getItem("ID")
    }) //댓글

    const [freecommentList, setFreeCommetList]= useState([]) //댓글 저장

    const getValue =(e) =>{ //상세보기 수정
        setFormContent({
            ...formContent,
           [e.target.name] : e.target.value
        })
    }

    const getCommet =(e) =>{ //댓글 입력
        setFreeCommet({
            ...freeCommetInsert,
           [e.target.name] : e.target.value
        })
    }

    useEffect(()=>{ //초기실행
        let num= props.match.params.num
        console.log(num);
        submitBoard(num);
        freeCommentlist(num);
    },[])

    const submitBoard = (num) =>{ 
        axios.get('/matzip/freeview/'+num) 
        .then((resp)=>{ //결과
            console.log(resp.data);
            setFormContent(resp.data);
        })
    }

    const freeCommentlist= (num)=>{ //댓글 가져오기
        axios.get('/matzip/freeComList/'+num)
        .then((resp)=>{
            console.log(resp.data)
            setFreeCommetList(resp.data)
        })
    }

    const freeupdate = () =>{ //수정
         axios.put('/matzip/freeupdate/',{
            num: formContent.num,
            title : formContent.title,
            content :formContent.content,
            writer: formContent.writer,
         })
        .then((resp)=>{ //결과
            alert("수정 완료")
            props.history.push("/freeboard")
            
        })
    }

    const freedelete = (num) =>{ //삭제
        axios.delete('/matzip/freedelete/'+formContent.num) 
        .then((resp)=>{ //결과
            alert("삭제 완료")
            props.history.push("/freeboard")
        })
    }

    const freeCommet= ()=>{ //댓글추가   
        axios.post("/matzip/freeComInser/"+formContent.num, {
           content: freeCommetInsert.content,
           writer: freeCommetInsert.writer
        })
        .then((resp)=>{ //결과
            alert("댓글추가 완료")
            props.history.push("/freeboard")
        })
    }
 
    return(
    <>
    <NavbarWhite/>
    <br/><br/><br/><br/><br/><br/>
      <Container>
        <Form>
            {/* <Form.Group className="mb-3" controlId="title" >
                <Form.Label>번호:</Form.Label>
                <Form.Control plaintext readOnly defaultValue={formContent.num} />
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="title" >
                <Form.Label>제목:</Form.Label>
                <Form.Control type="text" placeholder="title" name="title" onChange={getValue} value={formContent.title}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="title" >
                <Form.Label>작성자:</Form.Label>
                <Form.Control plaintext readOnly defaultValue={formContent.writer} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="content" >
                <Form.Label>내용:</Form.Label>
                <Form.Control as="textarea" name="content" rows={3} onChange={getValue} value={formContent.content}/>
            </Form.Group>
            {
                  sessionStorage.getItem("ID") === formContent.writer?(
                    <div align="right">
                    <Button variant="danger" onClick={freeupdate}>수정</Button>{' '}
                    <Button variant="dark" onClick={freedelete}>삭제</Button>
                    </div>
                  ):(
                    null
                  )
                
            }
             {
                  sessionStorage.getItem("ID") !== null?(
                    <Form>
                        <Form.Group className="mb-3" controlId="contents" >
                        <Form.Label>댓글:</Form.Label>
                        <Form.Control as="textarea" name="content" rows={3} onChange={getCommet} value={freeCommetInsert.content}/>
                        </Form.Group>
                        <div align="right">
                            <Button onClick={freeCommet} >댓글쓰기</Button>
                        </div>
                    </Form>
                  ):(
                    null
                  )
                
            }
        댓글:<br/>
        </Form>
        <table class="table" >
        <thead>
            <tr>
                <th>번호</th>
                <th>내용</th>
                <th>작성일</th>
            </tr>
            </thead>
        <tbody>
            {freecommentList.map((board) => (
            <tr>
              <th> {board.fcnum} </th>
              <th> {board.content}</th>
              <th> {board.regdate} </th>
            </tr>
          ))}
        </tbody>
        </table>
       </Container>
    </>
    )
}
export default FreeView;