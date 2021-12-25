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
import Example from "./testtest2";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
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
        setNavbarColor("navbar-transparent");
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
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/join"
                // target="_blank"
                title="회원가입"
              >
                {/* <i className="fa fa-twitter" /> */}
                <p className="d-lg-none">회원가입</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/login"
                // target="_blank"
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
                // target="_blank"
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
            <Example /> 
            </div>
            {/* <NavItem>
              <NavLink
                data-placement="bottom"
                href=""
                target="_blank"
                title="Star on GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">기타</p>
              </NavLink>
            </NavItem>
           <NavItem>
              <NavLink
                href=""
                target="_blank"
              >
                <i className="nc-icon nc-book-bookmark" /> 
                <p className="d-lg-none">기타</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                href=""
                target="_blank"
              >
                <i className="nc-icon nc-spaceship"></i> Upgrade to Pro
              </Button>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
