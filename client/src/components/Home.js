import React, { Component } from "react";
import Blocks from "./Blocks";

class Home extends Component {
  state = { walletInfo: {} };
  componentDidMount() {
    fetch(`${document.location.origin}/api/wallet-info`)
      .then(response => response.json())
      .then(json => this.setState({ walletInfo: json }));
  }

  render() {
    const { address, balance } = this.state.walletInfo;
    return (
      <div className="container mx-4">
        <div className="row">
          <div className="col-md-6">
            <h1>Address: {address}</h1>
            <h1>Balance: {balance}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
