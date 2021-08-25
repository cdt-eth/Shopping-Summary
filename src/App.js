import { Component } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Subtotal from "./components/Subtotal/Subtotal.jsx";
import PickupSavings from "./components/PickupSavings/PickupSavings.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      PickupSavings: -3.85,
    };
  }

  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings} />
        </Container>
      </div>
    );
  }
}

export default App;
