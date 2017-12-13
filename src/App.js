import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import  from './components/Homepage';
import Router from './Router';

class App extends Component {
  componentDidMount() {
    axios.get('/api/test').then(response => console.log(response.data));
  }
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
