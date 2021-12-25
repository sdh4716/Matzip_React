import axios from "axios"
import { useEffect, useState } from "react"
import RestaurantItem from "./RestaurantItem";
import {Form  } from "reactstrap";
import { useHistory } from "react-router";




function RestaurantCard2(){

 
//반응형form검색 필터
  const [word, setWord] = useState('');

  let history = useHistory();

  const getValue = (e) =>{
    setWord(e.target.value)
}



  //저장
  const [listcontent, setListContent] = useState([])
 
  useEffect(()=>{
    loadContent();
    // if(word!=''){
    //     loadContent();
    //     //history.push("/search/"+word)
    // }else{
    //   setWord(null)
    //   loadContent();
    // }
   },[word])
  

  const loadContent =()=>{ //axios 서버값 저장
    axios.get('/matzip/resgetfood?food='+word)
      .then((resp)=>{
        console.log(resp.data);
        setListContent(resp.data);
      })
  }
  

  return (
     <>
      
    <form class="d=flex mb-2">
            <input placeholder="가게이름검색" name="word" class="form-control"
            onChange={getValue} value={word}>

            </input>
            </form>

            {
                listcontent.map((board,index)=>(

                  <RestaurantItem key={index} board={board}/>

                ))
            } 
      </>
  );
  
}
export default RestaurantCard2;


