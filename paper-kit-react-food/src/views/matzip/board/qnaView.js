import { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Container, Form } from "react-bootstrap";
import NavbarWhite from "components/Navbars/NavbarWhite";

const QnaView= (props)=>{
    const [qnaview , setQnaView]= useState({ //상세정보
        num: '',
        title : '',
        content :'',
        writer:'',
    })
    
    useEffect(()=>{ //초기실행
        let num= props.match.params.num
        console.log(num);
        load(num);
        freeCommentlist(num);
    },[])

    const load =(num)=>{ //상세보기
        axios.get("/matzip/qnaview/"+num)
        .then((resp)=>{
            console.log(resp.data);
            setQnaView(resp.data);
        })

    }
    const [freeCommetInsert , setFreeCommet]= useState({ //댓글 작성
        content:'',
        writer: sessionStorage.getItem("ID")
    }) //댓글

    const [freecommentList, setFreeCommetList]= useState([]) //댓글 저장

    const getValue =(e) =>{ //상세보기 수정
        setQnaView({
            ...qnaview,
           [e.target.name] : e.target.value
        })
    }

    const getCommet =(e) =>{ //댓글 입력
        setFreeCommet({
            ...freeCommetInsert,
           [e.target.name] : e.target.value
        })
    }

    const freeupdate = () =>{ //수정
         axios.put('/matzip/qnaUpdate/',{
            num: qnaview.num,
            title : qnaview.title,
            content :qnaview.content,
            writer: qnaview.writer,
         })
        .then((resp)=>{ //결과
            alert("수정 완료")
            props.history.push("/qnaboard")
            
        })
    }

    const freedelete = () =>{ //삭제
        axios.delete('/matzip/qnaDelete/'+qnaview.num) 
        .then((resp)=>{ //결과
            alert("삭제 완료")
            props.history.push("/qnaboard")
        })
    }

    const freeCommet= ()=>{ //댓글추가   
        axios.post("/matzip/qnaCommInsert/"+qnaview.num, {
           content: freeCommetInsert.content,
           writer: freeCommetInsert.writer
        })
        .then((resp)=>{ //결과
            alert("댓글추가 완료")
            props.history.push("/qnaboard")
        })
    }

    const freeCommentlist= (num)=>{ //댓글 가져오기
        axios.get('/matzip/qnaCommList/'+num)
        .then((resp)=>{
            console.log(resp.data)
            setFreeCommetList(resp.data)
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
                <Form.Control type="text" placeholder="title" name="title" onChange={getValue} value={qnaview.title}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="title" >
                <Form.Label>작성자:</Form.Label>
                <Form.Control plaintext readOnly defaultValue={qnaview.writer} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="content" >
                <Form.Label>내용:</Form.Label>
                <Form.Control as="textarea" name="content" rows={3} onChange={getValue} value={qnaview.content}/>
            </Form.Group>
            {
                  sessionStorage.getItem("ID") === qnaview.writer?(
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
              <th> {board.qcnum} </th>
              <th> {board.content}</th>
              <th> {board.regdate} </th>
            </tr>
          ))}
        </tbody>
        </table>
        
        </Form>
        </Container>
    </>
    )
}

export default QnaView;