import React from 'react';
import SectionCarousel from 'views/index-sections/SectionCarousel';
import Map from './Map';
import Reply from './Reply';
import { Col, Row, Container } from 'reactstrap';
import NavbarWhite from 'components/Navbars/NavbarWhite';
import SliderInfo from './SliderInfo'
import ReplyList from './ReplyList';
import RestaurantView from './Restaurant/RestaurantView';

const Infopageget=()=>{
    return(
        <>
        <NavbarWhite/>
        <br/><br/><br/><br/><br/>
        <Container>
        </Container>
        <br/>
        <div>
            
            {/* <SectionCarousel/> */}
            <SliderInfo/>
            
            <Container sm="10">
            <hr/>
            <Row>
                <Col>
                    <RestaurantView />
                </Col>
                <Col>
                    <Map/>
                </Col>
            </Row>
            <br/><br/><br/>
            <hr/>

            <Reply/>
            <hr/>
            <ReplyList/>
            </Container>
        </div>
        </>
    )

}
export default Infopageget;