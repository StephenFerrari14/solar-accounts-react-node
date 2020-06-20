import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SolarAccountManager from "./pages/SolarAccountManager";
import Profile from "./pages/Profile";
import Container from "@material-ui/core/Container";
import { fetchAccounts, fetchCustomers, fetchCustomer } from "./services";

class App extends Component {
  state = {
    accounts: [],
    customers: [],
    currentCustomer: {},
  };

  componentDidMount() {
    // TODO Add loading spinners
    fetchCustomers()
      .then((customers) => this.setState({ customers }));
    fetchAccounts()
      .then((accounts) => this.setState({ accounts }));
  }

  getCustomer = (id) => {
    fetchCustomer(id)
      .then((customer) => this.setState({ currentCustomer: customer }));
  };

  render() {
    return (
      <Container maxWidth="md">
        <Switch>
          <Route path="/profile/:id">
            <Profile
              loadCustomer={this.getCustomer}
              customer={this.state.currentCustomer}
            ></Profile>
          </Route>
          <Route exact path="/">
            <SolarAccountManager
              accounts={this.state.accounts}
              customers={this.state.customers}
            ></SolarAccountManager>
          </Route>
        </Switch>
      </Container>
    );
  }
}

export default App;
