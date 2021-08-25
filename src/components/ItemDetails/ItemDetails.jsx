import { Component } from "react";
import { Button, Collapse, Well, Media, Row, Col } from "react-bootstrap";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? "See" : "Hide"} item details{" "}
          {this.state.open === false ? "+" : "-"}
        </Button>

        <Row className="show-grid">
          <Col md={6}></Col>
          <Col md={6}></Col>
        </Row>
      </div>
    );
  }
}
