import React from "react";
import {Form} from "react-bootstrap";
import { Col, Row } from "reactstrap";

const Shopform3=()=>{
    
    return(
        <div className="info-title">
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            상호명
            </Form.Label>
            <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="이탈리안 국밥" />
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            대표자명
            </Form.Label>
            <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="최점례" />
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            식당 소개
            </Form.Label>
            <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="이태리 타올로 때밀이 장인이 만드는 든-든한 국밥" />
            </Col>
            </Form.Group>
        </Form>  
        </div>
    )

}
export default Shopform3;