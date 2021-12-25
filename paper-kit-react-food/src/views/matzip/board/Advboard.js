import React,{useEffect,useState} from "react";

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
import { paginate } from "../pagination/paginate";
import Pagination2 from "../pagination/Pagination";
import { Link } from "react-router-dom";

// core components

function Advboard() { //이벤트 게시판
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

  useEffect(()=>{ //초기실행
    loadContent();
        
    },[])


    const loadContent =()=>{ //axios 서버값 저장
    axios.get('/matzip/adImageget')
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
<h2 className="card-title">&nbsp;&nbsp;이벤트 게시판</h2>
</Col>
<Col>
<div  class="" align="right">
{
    sessionStorage.getItem("ID") !== null?(
      <Button
        className="btn-round"
        color="danger"
        type="button"
        href="/adinsert"
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
          <th>이벤트명</th>
          <th>상호</th>
          <th>조회수</th>
          <th>작성일</th>
          </tr>
        </thead>

        {/*테이블 body */}
        <tbody
        >
        {pagedMovies.map((movie) => (
            <tr>
              <Link to={"/adview/"+movie.num}>
                <th> {movie.num} </th>
              </Link>
              <th> {movie.title} </th>
              <th> {movie.writer} </th>
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
export default Advboard;