import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import history from "../history";
import Blocks from "./Blocks";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Transact from "./Transact";
import TransactionPool from "./TransactionPool";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blocks" component={Blocks} />
          <Route path="/conduct-transaction" component={Transact} />
          <Route path="/transaction-pool" component={TransactionPool} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
