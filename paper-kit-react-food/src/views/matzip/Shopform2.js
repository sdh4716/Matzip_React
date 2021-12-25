import React from "react";
import {Form} from "react-bootstrap";
import { Col, Row } from "reactstrap";

const Shopform2=()=>{
    
    return(
        <div className="info-title">
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            상호명
            </Form.Label>
            <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="필라델피아 매운탕" />
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            대표자명
            </Form.Label>
            <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="로버트 박" />
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            식당 소개
            </Form.Label>
            <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="전 사실 필라델피아에 살아 본 적 없습니다." />
            </Col>
            </Form.Group>
        </Form>  
        </div>
    )

}
export default Shopform2;