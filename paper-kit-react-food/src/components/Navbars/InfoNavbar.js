import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";
import Example from './testtest2';

// core components

function InfoNavbar() {
  const [bodyClick, setBodyClick] = React.useState(false);
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
          }}
        />
      ) : null}
      <Navbar color="dark" expand="lg">
        <Container>
          <NavbarBrand
            className="test2"
            data-placement="bottom"
            href="/index"
            title="Coded by Creative Tim"
          >
            대동맛지도
          </NavbarBrand>
          <div align="right">
          <button
            className="navbar-toggler"
            id="navbarNavDropdown"
            type="button"
            onClick={() => {
              document.documentElement.classList.toggle("nav-open");
              setBodyClick(true);
            }}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbarNavDropdown">
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href=""
                title="Follow us on Twitter"
              >
                {/* <i className="fa fa-twitter" /> */}
                <p className="d-lg-none">회원가입</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/login"
                title="로그인"
              >
                {/* <i className="fa fa-facebook-square" /> */}
                <p className="d-lg-none">로그인</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/freeboard"
                title="게시판"
              >
                {/* <i className="fa fa-instagram" /> */}
                <p className="d-lg-none">게시판</p>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/respage"
                // target="_blank"
                title="음식점목록"
              >
                {/* <i className="fa fa-instagram" /> */}
                <p className="d-lg-none">음식점목록</p>
              </NavLink>
              </NavItem>


            <div class="d-none d-lg-block">
            <Example/>
            </div>
          </Nav>
          </UncontrolledCollapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default InfoNavbar;