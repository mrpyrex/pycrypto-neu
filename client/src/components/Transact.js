import React, { Component } from "react";
import history from "../history";

class Transact extends Component {
  state = { recipient: "", amount: 0 };

  updateRecipient = e => {
    this.setState({ recipient: e.target.value });
  };

  updateAmount = e => {
    this.setState({ amount: Number(e.target.value) });
  };

  conductTransaction = () => {
    const { recipient, amount } = this.state;

    fetch("http://localhost:3000/api/transact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipient, amount })
    })
      .then(response => response.json())
      .then(json => {
        alert(json.message || json.type);
        history.push("/transaction-pool");
      });
  };
  render() {
    console.log("this.state", this.state);
    return (
      <div className="container py-4">
        <h3>Conduct a Transaction</h3>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter recipient"
              value={this.state.recipient}
              onChange={this.updateRecipient}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Enter amount"
              value={this.state.amount}
              onChange={this.updateAmount}
            />
          </div>

          <button
            onClick={this.conductTransaction}
            type="submit"
            className="btn btn-danger"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Transact;
