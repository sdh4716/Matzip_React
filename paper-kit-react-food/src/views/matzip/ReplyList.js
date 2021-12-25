import axios from "axios"
import { useEffect, useState } from "react"
import ReplyItem from './ReplyItem';


function ReplyList(){
    //저장
    const [listcontent, setListContent] = useState([])
  
    useEffect(()=>{ //초기실행
      loadContent();
    },[])
  

    const loadContent =()=>{ //axios 서버값 저장
      axios.get('/matzip/replyget')
        .then((resp)=>{
          console.log(resp.data);
          setListContent(resp.data);
        })
    }

    const replyDelete =(num) =>{
        axios.delete("/matzip/replydelete/"+num)
        .then(()=>{
          alert("삭제성공") 
          setListContent (listcontent.filter(reply=>reply.num!==num))
        })
    
    }
  
  
    return (
       <>
              {   
  
                  listcontent.map((board,index)=>(
                    <ReplyItem key={index} board={board} replyDelete={replyDelete}/>
                  ))
              } 
        </>
    );
    
  }
  export default ReplyList;