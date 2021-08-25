import { Component } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Subtotal from "./components/Subtotal/Subtotal.jsx";
import PickupSavings from "./components/PickupSavings/PickupSavings.jsx";
import TaxesFees from "./components/TaxesFees/TaxesFees.jsx";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal.jsx";
import ItemDetails from "./components/ItemDetails/ItemDetails.jsx";
import PromoCode from "./components/PromoCode/PromoCode";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      PickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disabledPromoButton: false,
    };
  }

  componentDidMount = () => {
    this.setState(
      {
        taxes: (this.state.total + this.state.PickupSavings) * 0.0875,
      },
      function () {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.PickupSavings + this.state.taxes,
        });
      }
    );
  };

  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal
            estimatedTotal={this.state.estimatedTotal.toFixed(2)}
          />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
          <hr />
          <PromoCode
            giveDiscount={() => this.giveDiscountHandler()}
            isDisable={this.state.disabledPromoButton}
          ></PromoCode>
        </Container>
      </div>
    );
  }
}

export default App;
