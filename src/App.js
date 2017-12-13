import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    axios.get('/api/test').then(response => console.log(response.data));
  }
  render() {
    return (
      <div className="App">
        <h1> My cool library app</h1>
      </div>
    );
  }
}

export default App;
