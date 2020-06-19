import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SolarAccountManager from "./pages/SolarAccountManager";
import Profile from "./pages/Profile";
import Container from "@material-ui/core/Container";

class App extends Component {
  state = {
    accounts: [],
    customers: [],
    currentCustomer: {},
  };

  componentDidMount() {
    this.fetchCustomers();
    this.fetchAccounts();
  }

  fetchAccounts = () => {
    fetch("/api/getAccounts")
      .then((res) => res.json())
      .then((accounts) => this.setState({ accounts }));
  };

  fetchCustomers = () => {
    fetch("/api/getCustomers")
      .then((res) => res.json())
      .then((customers) => this.setState({ customers }));
  };

  fetchCustomer = (id) => {
    fetch(`/api/getCustomer/${id}`)
      .then((res) => res.json())
      .then((customer) => this.setState({ currentCustomer: customer }));
  };

  render() {
    return (
      <Container maxWidth="md">
        <Switch>
          <Route path="/profile/:id">
            <Profile
              loadCustomer={this.fetchCustomer}
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
