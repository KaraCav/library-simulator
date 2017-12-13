import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
//import Homepage from './components/Homepage';
import { BrowserRouter } from 'react-router-dom';

import AuthView from './components/AuthView';

export default class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: ''
    };

    this.updateFirstName = this.updateFirstName.bind(this);
  }

  updateFirstName(userInput) {
    this.setState({ firstName: userInput });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={AuthView} />
        {/* <Route exact path="/Appointments" component={ZCart} /> */}
      </Switch>
    );
  }
}
