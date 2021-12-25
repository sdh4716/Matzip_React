import React from 'react';
import SectionCarousel from 'views/index-sections/SectionCarousel';
import Map from './Map';
import Reply from './Reply';
import Shopform from './Shopform';
import { Col, Row, Container } from 'reactstrap';
import NavbarWhite from 'components/Navbars/NavbarWhite';
import SliderInfo from './SliderInfo'
import ReplyList from './ReplyList';


const InfoPage=()=>{
    return(
        <>
        <NavbarWhite/>
        <br/><br/><br/><br/><br/>
        <Container>
        <div className="card-title">사계절 식당</div>
        </Container>
        <br/>
        <div>
            
            {/* <SectionCarousel/> */}
            <SliderInfo/>
            
            <Container sm="10">
            <hr/>
            <Row>
                <Col>
                    <Shopform />
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
export default InfoPage;