import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup, Col, Row, Container } from "reactstrap";
import axios from "axios";
import { Box, Badge } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image";
import { Link } from "react-router-dom";
import styled from "styled-components"

function Today_page1() {
 
  // 음식점 소개가 2줄이 넘으면 넘어가는 글자들은 ...으로 대체
  const Line = styled.div
  `
    overflow: hidden;
    display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
  `


  useEffect(()=>{ //초기실행
    loadContent();
  },[])

  const [today, setToday]= useState([]) //댓글 저장

  const loadContent =()=>{ //axios 서버값 저장
    axios.get('/matzip/todayget')
      .then((resp)=>{
        setToday(resp.data);
        console.log(resp.data);
      })
  }


return(
  <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  <Container className=" ml-auto mr-auto card-plain">
  <div className="card-title">오늘의 맛집</div>
  <br/><br/>
<Row >
  {today.map((cards) => (
<div>
  <Col>
<Box maxW="350" maxH="lg" borderWidth="2px" borderRadius="lg" overflow="hidden">
  <Image src={process.env.PUBLIC_URL +"/image/"+ cards.newname} height="250"  style={{ width: '100%' }}/>
  <Box p="5">
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
 </Container>
 </>
 
)

       
  
    
}
export default Today_page1;