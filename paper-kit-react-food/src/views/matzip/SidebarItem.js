import React from "react";
import "../matzip/matzip_CSS/Card.css"

function SidebarItem({ menu }) {
  return (
    <div className="sidebar-item ml-3">
      <p className="sidebar-title mb-3" >{menu.name}</p>
    </div>

  );
}

export default SidebarItem;