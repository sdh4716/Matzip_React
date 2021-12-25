import React from 'react';
import Map from './Map';
import Reply from './Reply';
import { Col, Row, Container } from 'reactstrap';
import NavbarWhite from 'components/Navbars/NavbarWhite';
import SliderInfo from './SliderInfo'
import Shopform2 from './Shopform2';
import ReplyList from './ReplyList';

const InfoPage2=()=>{
    return(
        <>
        <NavbarWhite/>
        <br/><br/><br/><br/><br/>
        <Container>
        <div className="card-title">필라델피아 매운탕</div>
        </Container>
        <br/>
        <div>
            
            {/* <SectionCarousel/> */}
            <SliderInfo/>
            
            <Container sm="10">
            <hr/>
            <Row>
                <Col>
                    <Shopform2/>
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
export default InfoPage2;