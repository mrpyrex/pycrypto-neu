import React, { Component } from "react";
import Transaction from "./Transaction";
import history from "../history";

const POLL_INTERVAL_MS = 10000;

class TransactionPool extends Component {
  state = { transactionPoolMap: {} };

  fetchTransactionPoolMap = () => {
    fetch(`${document.location.origin}/api/transaction-pool-map`)
      .then(response => response.json())
      .then(json => this.setState({ transactionPoolMap: json }));
  };

  fetchMineTransactions = () => {
    fetch(`${document.location.origin}/api/mine-transactions`).then(
      response => {
        if (response.status === 200) {
          alert("success");
          history.push("/blocks");
        } else {
          alert("The mine-transactions block request did not complete");
        }
      }
    );
  };
  componentDidMount() {
    this.fetchTransactionPoolMap();

    setInterval(() => this.fetchTransactionPoolMap(), POLL_INTERVAL_MS);
  }
  render() {
    return (
      <div>
        <h3>TransactionPool</h3>
        {Object.values(this.state.transactionPoolMap).map(transaction => {
          return (
            <div key={transaction.id}>
              <hr />
              <Transaction transaction={transaction} />
              <hr />
            </div>
          );
        })}
        <button onClick={this.fetchMineTransactions} className="btn btn-danger">
          Mine Transaction
        </button>
      </div>
    );
  }
}

export default TransactionPool;
