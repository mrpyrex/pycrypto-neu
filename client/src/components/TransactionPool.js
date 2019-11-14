import React, { Component } from "react";
import Transaction from "./Transaction";

class TransactionPool extends Component {
  state = { transactionPoolMap: {} };

  fetchTransactionPoolMap = () => {
    fetch("http://localhost:3000/api/transaction-pool-map")
      .then(response => response.json())
      .then(json => this.setState({ transactionPoolMap: json }));
  };
  componentDidMount() {
    this.fetchTransactionPoolMap();
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
      </div>
    );
  }
}

export default TransactionPool;
