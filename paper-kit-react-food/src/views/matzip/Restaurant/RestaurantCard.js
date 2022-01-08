import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup, Col, Row, Container } from "reactstrap";
import axios from "axios";
import { paginate } from "../pagination/paginate";
import { Box, Badge } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image";
import Pagination2 from "../pagination/Pagination";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components"
import Star_Rating2_list from "components/Star_Rating2_list"

function RestaurantCard() {
 
  // 음식점 소개가 2줄이 넘으면 넘어가는 글자들은 ...으로 대체
  const Line = styled.div
  `
    overflow: hidden;
    display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
  `

  const [loginRole, setLoginRole] = useState({
    id:sessionStorage.getItem("ID"),
    role:''
  })

  useEffect(()=>{ //초기실행
    Role();
  },[])

  const Role= ()=>{
  if(loginRole.id!== null){
    axios.get("/matzip/adinsertCheck/"+loginRole.id)
    .then((resp)=>{ //결과
      if(resp.data=="success"){
      setLoginRole({
        role: loginRole.id
      })
      }
    })
  }else{
      setLoginRole({
        role:''
      })
    }; 
  }

  //반응형form검색 필터
  const [word, setWord] = useState(
    function(){
      if(sessionStorage.getItem("word")==null){
       return '';
      }
      else{
        return sessionStorage.getItem("word")
      }
    
  }
    );

  let history = useHistory();

  const getValue = (e) =>{
    setWord(e.target.value)
}
  
  useEffect(()=>{ //초기실행
    loadContent();
    sessionStorage.removeItem("word");

  },[word])

  const loadContent =()=>{ //axios 서버값 저장
    axios.get('/matzip/resget?name='+word)
      .then((resp)=>{
        setMovies({ ...movies, data: resp.data });
        console.log(resp.data);
      })
  }



  const loadAvgstar =(num)=>{ 
    axios.get('/matzip/avgStar/'+num)
    .then((resp)=>{ 
        console.log(resp.data)
        // resp.data가 NaN이면 0을 return 
        if(isNaN(resp.data)){
            return 0;
        // 소수 첫째자리에서 반올림   
        }else{
            return resp.data.toFixed(1)
        }

    })

    
  }

  


  const [movies, setMovies] = useState({ // 음식점 정보를 담는 state
      data: [], // 음식점 정보
      pageSize: 8, // 한 페이지에 보여줄 아이템(음식점목록) 개수
      currentPage: 1 // 현재 활성화된 페이지 위치
    });
  
    const handlePageChange = (page) => {
      setMovies({ ...movies, currentPage: page });
    };
  
    const { data, pageSize, currentPage } = movies;
    const pagedMovies = paginate(data, currentPage, pageSize); // 페이지 별로 아이템이 속한 배열을 얻어옴
  
    const { length: count } = movies.data;

return(
  <>
  <Container>
    <form class="mb-2"> 
    <div style={{width:400},{ margin :0}}>
      <input placeholder="음식점 검색" name="word" class="form-control" 
      onChange={getValue} value={word} > 
      </input>
    </div>
    </form>
    <br/><br/>
  </Container>
  <div  class="" align="right">
{
    sessionStorage.getItem("ID") !== null?(
      <Button
        className="btn-round"
        color="danger"
        type="button"
        href="/resinsert"
        >
        음식점 등록
      </Button>
    ):(
      null
    )
  }
</div>

<Row>
  {pagedMovies.map((cards) => (
<div>
<br/>
<br/>
<br/>
<br/>
  <Col>
<Box maxH="lg" minH="lg" maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
  <Image src={process.env.PUBLIC_URL +"/image/"+ cards.newname} height="300" style={{ width: '100%' }}/>
  <Box p="6">
    <Box d="flex" alignItems="baseline" className="info-title">
      <Badge borderRadius="full" px="2" colorScheme="red">
        구분
      </Badge>
      <Box
        fontFamily=""
        color="gray.500"
        fontWeight="bold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        ml="2"
      >
       {cards.food}
      </Box>
    </Box>

    <Box
      className="res-name"
      mt="1"
      fontWeight="semibold"
      as="h4"
      lineHeight="tight"
      isTruncated
    >
      {cards.name}
    </Box>
    <br/>
    <Box className="info-title">
    <Line>
      <div>
    {cards.introduction}
    
      </div>
      
    </Line>
    
      <Box as="span" color="gray.600" fontSize="sm">
      
      
        
        

      </Box>
   

    </Box>
   
    <div align="center">
    <br/>
    <Link to={"/resview/"+cards.num}>
    <Button className="btn-round detail-btn" color="danger" size="sm" align="center"> 상세정보 </Button>
    </Link>
    </div>
    

  </Box>
</Box>
</Col>
</div>
 ))}
 </Row>
 <Pagination2
    pageSize={pageSize}
    itemsCount={count}
    currentPage={currentPage}
    onPageChange={handlePageChange}
    
  />



 </>
 
)

       
  
    
}
export default RestaurantCard;