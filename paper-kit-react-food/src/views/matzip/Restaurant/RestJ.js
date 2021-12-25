import React, { useEffect, useState } from "react";
import NavbarWhite from "components/Navbars/NavbarWhite";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, Card, CardGroup, Col, Row, Container } from "reactstrap";
import axios from "axios";
import { paginate } from "../pagination/paginate";
import { Box, Badge } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image";
import Pagination2 from "../pagination/Pagination";
import RestaurantCard from "./RestaurantCard";
import RestaurantPageB from "./RestaurantPageB";
import RestaurantPageJ from "./RestaurantPageJ";

const RestJ = () => {
   
    return(
        <>
        <ChakraProvider>
        <NavbarWhite/>
        <Container className="card-food ml-auto mr-auto">
        <br/><br/><br/>
        <RestaurantPageJ/>
        </Container>
        </ChakraProvider>
        </>
    )
}
export default RestJ;