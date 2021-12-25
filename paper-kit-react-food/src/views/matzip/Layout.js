
import NavbarWhite from "components/Navbars/NavbarWhite"
import React from "react"
import Footer from "./Footer"
import FooterMain from "./FooterMain"

const Layout = props  => {
    return (
      <div>
        
        
        <main>
          {props.children}
        </main>
        

      </div>
    )
  }
  
  export default Layout