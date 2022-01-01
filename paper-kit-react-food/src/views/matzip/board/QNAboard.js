import React, { useEffect, useState } from "react";
import IndexHeader from "components/Headers/IndexHeader";

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
import NavbarWhite from "components/Navbars/NavbarWhite";
import Sidebar from "../Sidebar";
import axios from "axios";
import Pagination2 from "../pagination/Pagination";
import { paginate } from "../pagination/paginate";
import { Link } from "react-router-dom";





// core components


function QNAboard() {
  useEffect(()=>{ //초기실행
    loadContent();
        
    },[])


    const loadContent =()=>{ //axios 서버값 저장
    axios.get('/matzip/qnaget')
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

  return (


<body>

<warp>

<NavbarWhite/>
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
<h2 className="card-title">&nbsp;&nbsp;질문 & 답변</h2>
</Col>
<Col>
<div  class="" align="right">
{
    sessionStorage.getItem("ID") !== null?(
      <Button
        className="btn-round"
        color="danger"
        type="button"
        href="/qnainsert"
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
        <th>글번호</th>
        <th>제목</th>
        <th>작성자</th>
        <th>조회수</th>
        <th>작성일</th>
       </tr>
    </thead>

        {/*테이블 body */}
        <tbody
        >
        {pagedMovies.map((movie) => (
            <tr>
              
                <th> {movie.num} </th>
             
              <th> <Link to={"/qnaView/"+movie.num}>{movie.title}  </Link></th>
              <th> {movie.writer} </th>
              <th> {movie.hitcount} </th>
              <th> {movie.regdate}</th>
            </tr>
          ))}
        </tbody>
    </table>
    

    <div
    class="pagination justify-content-center">
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
export default QNAboard;