/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components

import './IndexNavbar.css';

import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function NavbarWhite() {
  const authenticated = sessionStorage.getItem("ID") !== null;

  const logout=()=> {
    sessionStorage.clear();
  }

  const [navbarColor, setNavbarColor] = React.useState("");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            className="Navfont1"
            data-placement="bottom"
            href="/index"
            // target="_blank"
            title="Coded by Creative Tim"
          >
            대동맛지도
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            {/* authenticate 유저가 존재하는지 
        참 거짓 으로 로그인&로그아웃 표시 */}

{authenticated ? 
        (
          <>
          <NavItem>
              <NavLink
                href="/index"
                onClick={logout}
              >
               로그아웃
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink
                href="/freeboard"
              >
               게시판
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink
                href="/respage"
              >
               음식점 목록
              </NavLink>
          </NavItem>
          </>
        )

        :(
          <>
           <NavItem>
              <NavLink
                href="/login"
              >
               로그인
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink
                href="/join"
              >
               회원가입
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink
                href="/freeboard"
              >
               게시판
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink
                href="/respage"
              >
               음식점 목록
              </NavLink>
          </NavItem>
          </>
        )}
           
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarWhite;
