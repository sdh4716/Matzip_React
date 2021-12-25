/***** ./components/MoviesPage.jsx *****/

import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { paginate } from './paginate';
import Pagination2 from './Pagination';



const MoviesPage = () => {
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
    if (count === 0) 
      return <p>영화 정보가 없습니다.</p>;
  
    return (
      <>
        <p>{count} 개의 영화 정보가 있습니다.</p>
  
        <table className="table">
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
          <tbody>
            {pagedMovies.map((movie) => (
              <tr>
              <th> {movie.num} </th>
              <th> {movie.title} </th>
              <th> {movie.writer} </th>
              <th> {movie.content}</th>
              <th> {movie.hitcount} </th>
              <th> {movie.regdate} </th>
            </tr>
    
            ))}
          </tbody>
        </table>
        <Pagination2
          pageSize={pageSize}
          itemsCount={count}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </>
    );
  };
  
  export default MoviesPage;