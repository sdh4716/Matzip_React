import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import profile from "assets/img/food/meal.png";

const Side = styled.div`
 
  border-right: 2px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;

  
`
const Profile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
`
const Menu = styled.div`
  margin-top: 50px;
  width: 300px;
  display: flex;
  flex-direction: column;
`

function Sidebar() {
  const menus = [
    { name: "자유게시판", path: "/freeboard" },
    { name: "이벤트 홍보 게시판", path: "/advboard" },
    { name: "Q&A 게시판", path: "/qnaboard" },
  ];
  return (

    <div>
    <Side>
      <Profile src={profile}></Profile>
      <br/>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink 
              exact
              style={{color: "gray", textDecoration: "none" }}
              to={menu.path}
              key={index}
              activeStyle={{color: "red"}}
            >
              <SidebarItem
                menu={menu}
              />
            </NavLink>
          );
        })}
      </Menu>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </Side>
    </div>
  );
}

export default Sidebar;