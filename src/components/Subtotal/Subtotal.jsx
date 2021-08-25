import { Component } from "react";
import { Col, Row } from "react-bootstrap";

export default class Subtotal extends Component {
  render() {
    return (
      <div>
        <Row className="show-grid">
          <Col md={6}>Subtotal</Col>
          <Col md={6}> {`$${this.props.price}`} </Col>
        </Row>
      </div>
    );
  }
}
