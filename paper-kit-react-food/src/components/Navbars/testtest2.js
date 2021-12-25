import React from "react";



// reactstrap components
import {
  Button,
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";




function Example(){
  
  const authenticated = sessionStorage.getItem("ID") !== null;

  const logout=()=> {
    sessionStorage.clear();
    // props.history.push("/login")
    // history.push({
    //   pathname:'/'
    // })
  }
  return (
    <>
     <UncontrolledDropdown>
        <DropdownToggle
          aria-expanded={false}
          aria-haspopup={true}
          caret
          color="danger"
          data-toggle="dropdown"
          href="#pablo"
          id="dropdownMenuLink"
          onClick={e => e.preventDefault()}
          role="button"
        >
           메뉴
        </DropdownToggle>
        <DropdownMenu
    color="danger"
    >

{/* authenticate 유저가 존재하는지 
        참 거짓 으로 로그인&로그아웃 표시 */}

          {authenticated ? (
          <><DropdownItem href="/index" onClick={logout}>
            로그아웃
            </DropdownItem>
            <DropdownItem href="/join" >
          회원가입
          </DropdownItem>
            <DropdownItem href="/freeboard">
            게시판
            </DropdownItem>
            <DropdownItem href="/respage">
            음식점 목록
            </DropdownItem>
            </>
          ) 
        
        : (
          <>
          <DropdownItem href="/login">
            로그인
          </DropdownItem>
          <DropdownItem href="/join" >
          회원가입
          </DropdownItem>
          <DropdownItem href="/freeboard">
            게시판
          </DropdownItem>
          <DropdownItem href="/respage">
            음식점 목록
            </DropdownItem>
    
          </>
          )}

    </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
}

export default Example;