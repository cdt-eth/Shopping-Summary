import Subtotal from "./components/Subtotal/Subtotal.jsx";
import { Container } from "react-bootstrap";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
    };
  }
  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)} />
        </Container>
      </div>
    );
  }
}

export default App;
