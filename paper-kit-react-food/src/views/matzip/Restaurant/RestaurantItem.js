import React from "react";
import { Image } from "@chakra-ui/image";
import { Button, Card, CardGroup, Col, Row } from "reactstrap";
import { Box, Container, Badge } from "@chakra-ui/react"
import '../matzip_CSS/Card.css';

const RestaurantItem = ({board}) =>{
    const property = {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        food: '',
        name: '',
        explain: '',
        reviewCount: 34,
        rating: 4,
      }

      const CardView= {
        food:board.food,
        name:board.name,
        introduction:board.introduction
    }
    



 
      return (
      

 
      <div >
          <Col>
        <br/>
        <br/>
        <br/>
        <br/>
        <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
          <Image src={require("assets/img/food/res3.jpg").default} alt={property.imageAlt} />
          <Box p="6">
            <Box d="flex" alignItems="baseline" className="info-title">
              <Badge borderRadius="full" px="2" colorScheme="orange">
                구분
              </Badge>
              <Box
                fontFamily=""
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
               {board.food}
              </Box>
            </Box>
            <Box
              className="info-title"
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {board.name}
            </Box>
            <Box className="info-title">
            {board.introduction}
              <Box as="span" color="gray.600" fontSize="sm">
  
              </Box>
            </Box>
            <Box d="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  '★'
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm" className="info-title">
                {property.reviewCount} reviews
              </Box>
            </Box>
            <div align="center">
            <br/>
            <Button className="btn-round" color="danger" href="/info" size="sm" align="center"> 자세히 보기 </Button>
            </div>
          </Box>
        </Box>

          </Col>
        </div>
        

)
}
export default RestaurantItem;