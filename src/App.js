import { Component } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Subtotal from "./components/Subtotal/Subtotal.jsx";
import PickupSavings from "./components/PickupSavings/PickupSavings.jsx";
import TaxesFees from "./components/TaxesFees/TaxesFees.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      PickupSavings: -3.85,
      taxes: 0,
    };
  }

  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
        </Container>
      </div>
    );
  }
}

export default App;
