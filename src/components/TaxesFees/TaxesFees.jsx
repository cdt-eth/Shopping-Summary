import { Component } from "react";
import { Col, Row } from "react-bootstrap";

export default class TaxesFees extends Component {
  render() {
    return (
      <div>
        <Row className="show-grid">
          <Col md={6}>Est. taxes & fees (Based on 958383)</Col>
          <Col md={6}> {`$${this.props.taxes}`} </Col>
        </Row>
      </div>
    );
  }
}
