import { Image } from "@chakra-ui/image";
import { Button, Card, CardGroup, Col, Row } from "reactstrap";
import { Box, Container, Badge } from "@chakra-ui/react"
import './matzip_CSS/Card.css';



function NewCardPractice() {
    const property = {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      food: "한식",
      title: "사계절 식당",
      explain: "자연을 담은 인테리어, 신선한 재료만을 사용하는 20년 경력 셰프의 퓨젼 한식을 경험하세요",
      reviewCount: 34,
      rating: 4,
    }
    return (
    
    <div  >
      <br/>
      <br/>
      <br/>
      <br/>
      
      <Card className="card-register2 ml-auto mr-auto card-plain">
      <div className="card-title">오늘의 맛집</div>
      <br/><br/>
      <Row>
        <Col>
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
             한식
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
            사계절 식당
          </Box>
          <Box className="info-title">
            "자연을 담은 인테리어, 신선한 재료만을 사용하는 20년 경력 셰프의 퓨젼 한식을 경험하세요"
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
        
        <Col>
      <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
        <Image src={require("assets/img/food/res4.jpg").default} alt={property.imageAlt} />
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
             한식
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
            필라델피아 매운탕
          </Box>
          <Box className="info-title">
            "필라델피아에서 한국의 맛으로 성공한 퓨전 한식을 경험하세요"
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
          <Button className="btn-round" color="danger" href="/info2" size="sm" align="center"> 자세히 보기 </Button>
          </div>
        </Box>
      </Box>
        </Col>

        <Col>
      <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
        <Image src={require("assets/img/food/res2.jpg").default} alt={property.imageAlt} />
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
             양식
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
            이탈리안 국밥
          </Box>
          <Box className="info-title">
            "이탈리아에서 공수해온 재료로 만든 국밥을 경험하세요"
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
          <Button className="btn-round" color="danger" href="/info3" size="sm" align="center"> 자세히 보기 </Button>
          </div>
        </Box>
      </Box>
        </Col>
       
        </Row>
        </Card>
        
      </div>
    )
  }
  export default NewCardPractice;