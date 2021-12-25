import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  Row,
  Col,
} from "reactstrap";

import StarRatingComponent from 'react-star-rating-component';

class Star extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}



class Cards extends React.Component {
  render() {
    return (
      <>
        <CardGroup >
          <Row>
            <Col>
        <Card className="text-center" style={{ width: "30rem" }}>
          
          <CardImg
            alt="..."
            src={require("assets/img/food/foodbackground.jpg").default}
            top
          />
          <CardBody>
            <CardTitle>음식점 가게이름</CardTitle>
            <CardText>
              가게 설명입니다.
            </CardText>
            <Star />
            <Button
              color="primary"
              href="/info"
            >
              자세히 보기
            </Button>
          </CardBody>
        </Card>
        </Col>

        <Col>
        <Card className="text-center" style={{ width: "30rem"}}>
          <CardImg
            alt="..."
            src={require("assets/img/food/res1.png").default}
            top
          />
          <CardBody>
            <CardTitle>호호식당</CardTitle>
            <CardText>
              가게 설명입니다.
            </CardText>
            <Button
              color="primary"
              href="#pablo"
            >
              자세히 보기
            </Button>
          </CardBody>
        </Card>
        </Col>

        <Col>
        <Card className="text-center" style={{ width: "30rem"}}>
          
          <CardImg
            alt="..."
            src={require("assets/img/food/res2.jpg").default}
            top
          />
          <CardBody>
            <CardTitle>테스트식당</CardTitle>
            <CardText>
              가게 설명입니다.
            </CardText>
            <Button
              color="primary"
              href="#pablo"
            >
              자세히 보기
            </Button>
          </CardBody>
        </Card>
        </Col>
          </Row>
        </CardGroup>
      </>
    );
  }
}

export default Cards;