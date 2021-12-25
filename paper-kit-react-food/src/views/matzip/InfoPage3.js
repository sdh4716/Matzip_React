import React from 'react';
import Map from './Map';
import Reply from './Reply';
import { Col, Row, Container } from 'reactstrap';
import NavbarWhite from 'components/Navbars/NavbarWhite';
import SliderInfo from './SliderInfo'
import Shopform3 from './Shopform3';
import ReplyList from './ReplyList';

const InfoPage3=()=>{
    return(
        <>
        <NavbarWhite/>
        <br/><br/><br/><br/><br/>
        <Container>
        <div className="card-title">이탈리안 국밥</div>
        </Container>
        <br/>
        <div>
            
            {/* <SectionCarousel/> */}
            <SliderInfo/>
            
            <Container sm="10">
            <hr/>
            <Row>
                <Col>
                    <Shopform3 />
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
export default InfoPage3;