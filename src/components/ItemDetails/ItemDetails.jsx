import { Component } from "react";
import { Button, Collapse, Row, Col } from "react-bootstrap";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div class="d-grid gap-2">
        <Button
          className="item-details-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? "See" : "Hide"} item details{" "}
          {this.state.open === false ? "+" : "-"}
        </Button>

        <Collapse in={this.state.open}>
          <div class="d-flex ">
            <div class="flex-shrink-0">
              <img
                width={100}
                height={100}
                alt="thumbnail"
                src="https://i5.wal.co/asr/f8b123bd-b25f-4c1c-92f1-20ec2e82d0c3.1848a0405dc66d7521123225984509ba.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
              />
            </div>
            <div class="flex-grow-1 ms-3">
              This is some content from a media component. You can replace this
              with any content and adjust it as needed.
            </div>
            <Row className="show-grid ">
              <Col md={6}>
                <strong>{`$${this.props.price}`}</strong>
                <br />
                <strong className="price-strike">{`$${this.props.price}`}</strong>
              </Col>
              <Col md={6}>Qty: 1</Col>
            </Row>
          </div>
        </Collapse>
      </div>
    );
  }
}
