import React from "react";
import NavbarWhite from "components/Navbars/NavbarWhite";
import RestaurantList from "./RestaurantList";
import { ChakraProvider } from "@chakra-ui/react";
import { Container, Row } from "reactstrap";



function RestaurantPage() {


    return(
        <>
        <ChakraProvider>
        <NavbarWhite/>
        <Container className="card-food ml-auto mr-auto">
        <br/><br/><br/>
        <Row>
        <RestaurantList/>
        </Row>
        </Container>
        </ChakraProvider>
        </>
    )
}
export default RestaurantPage;