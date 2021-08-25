import { Component } from "react";
import {
  Button,
  Collapse,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import { connect } from "react-redux";
import { handleChange } from "../../actions/promoCodeActions";

class PromoCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleChange = (e) => {
    this.props.handleChange(e);
  };

  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply ` : `Hide `} promo code{" "}
          {this.state.open === false ? `+ ` : `- `}
        </Button>

        <Collapse in={this.state.open}>
          <div>
            <Row className="show-grid ">
              <Col md={12}>
                <Form className="d-grid gap-2">
                  <FormGroup controlId="formInlineName">
                    <FormLabel>Promo Code</FormLabel>
                    <FormControl
                      type="text"
                      placeholder="Enter promo code"
                      value={this.props.promoCode}
                      onChange={this.handleChange}
                    />
                  </FormGroup>

                  <div className="d-grid gap-2">
                    <Button
                      variant="success"
                      className="btn-round"
                      disabled={this.props.isDisabled}
                      onClick={this.props.giveDiscount}
                    >
                      Apply
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  promoCode: state.promoCode.value,
});

export default connect(mapStateToProps, { handleChange })(PromoCode);
