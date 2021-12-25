import React, { useEffect, useState } from "react";
import '../matzip_CSS/Card.css'

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col

} from "reactstrap";
import Sidebar from "../Sidebar";
import { Center } from "@chakra-ui/layout";
import NavbarWhite from "components/Navbars/NavbarWhite";
import Layout from "../Layout";
import FooterMain from "../FooterMain";
import axios from "axios";
import Pagination2 from "../pagination/Pagination";
import { paginate } from "../pagination/paginate";
import { Link } from "react-router-dom";

// core components

function Freeboard() {
  
  useEffect(()=>{ //초기실행
    loadContent();
        
    },[])


    const loadContent =()=>{ //axios 서버값 저장
    axios.get('/matzip/freeget')
      .then((resp)=>{
        setMovies({ ...movies, data: resp.data });
        console.log(resp.data);
      })
  }

  const [movies, setMovies] = useState({ // 영화 정보를 담는 state
    data: [], // 영화 정보
    pageSize: 10, // 한 페이지에 보여줄 아이템(영화목록) 개수
    currentPage: 1 // 현재 활성화된 페이지 위치
  });

  const handlePageChange = (page) => {
    setMovies({ ...movies, currentPage: page });
  };

  const { data, pageSize, currentPage } = movies;
  const pagedMovies = paginate(data, currentPage, pageSize); // 페이지 별로 아이템이 속한 배열을 얻어옴

  const { length: count } = movies.data;
  // if (count === 0) 
  //   return "";
   
  return (


<body>

<warp>

<NavbarWhite/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>



  <article
  style={{display:'inline-flex'}}>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<section
    >
      <div><Sidebar /></div>
    </section>

    
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <section
    style={{float:'center'}}>
      
      <div>


      <Row>
<Col>
<h2 className="card-title">&nbsp;&nbsp;자유게시판</h2>
</Col>
<Col>
<div  class="" align="right">
{
    sessionStorage.getItem("ID") !== null?(
      <Button
        className="btn-round"
        color="danger"
        type="button"
        href="/freeinsert"
        >
        글쓰기
      </Button>
    ):(
      null
    )
  }
</div>
</Col>
</Row>
  {/*테이블 top */}
  
  <table class="table"
    style={{width:'900px'}}>
        <thead>
          <tr>
                <td>글번호</td>
                <td>제목</td>
                <td>작성자</td>
                <td>글내용</td>
                <td>조회수</td>
                <td>작성일</td>
          </tr>
        </thead>

        {/*테이블 body */}
        <tbody
        >
        {pagedMovies.map((movie) => (
            <tr>
              <Link to={"/freeview/"+movie.num}>
                <th> {movie.num} </th>
              </Link>
              <th> {movie.title} </th>
              <th> {movie.writer} </th>
              <th> {movie.content}</th>
              <th> {movie.hitcount} </th>
              <th> {movie.regdate} </th>
            </tr>
          ))}
        </tbody>
    </table>
    

    <div>
    <Pagination2
          pageSize={pageSize}
          itemsCount={count}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>


      </div>
     
    </section>
  </article>
</warp>

{/* <FooterMain /> */}
</body>



)
}
export default Freeboard;