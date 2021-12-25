import React from "react";
import {Form} from "react-bootstrap";
import { Col, Row } from "reactstrap";

const Shopform=()=>{
    
    return(
        <div className="info-title">
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            상호명
            </Form.Label>
            <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="사계절 식당" />
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            대표자명
            </Form.Label>
            <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="김아무개" />
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            식당 소개
            </Form.Label>
            <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="대동맛지도 선정 오늘의 맛집 12주 연속 1위! 사계절 식당입니다." />
            </Col>
            </Form.Group>
        </Form>  
        </div>
    )

}
export default Shopform;