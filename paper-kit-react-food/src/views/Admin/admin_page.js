import NavbarWhite from "components/Navbars/NavbarWhite";
import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components"
import '../matzip/matzip_CSS/Card.css'

function Adminpage() {
    const Navbar = styled.div
    `
        margin-bottom : 100px
    `;

    return(
        <>
        <div>
            <Navbar>
            <NavbarWhite />
            </Navbar>
                <Container>
                    <div className="card-shadow">
                        'dd'
                    </div>
                </Container>
        </div>
        </>
    )

}

export default Adminpage;