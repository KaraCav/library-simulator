import React, { Component } from 'react';
// import Navbar from './Navbar';
import '../img/128px-Book_icoline.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AuthView.css';

export default class AuthView extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
    this.createUser = this.createUser.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePass = this.handlePass.bind(this);
  }
  createUser(username, password) {
    axios.post('/user', {
      username: this.state.username,
      password: this.state.password
    });
  }

  handleName(userInput) {
    this.setState({ username: userInput });
  }

  handlePass(userInput) {
    this.setState({ password: userInput });
  }
  render() {
    <button
      className="loginButton"
      onClick={() => {
        this.createUser(this.state.username, this.state.password);
      }}
    />;
    return (
      <div className="mainAuth">
        <div className="secondAuth">
          <div className="book">
            <img src={require('../img/128px-Book_icoline.png')} />
            <h1>Book Exchange</h1>
          </div>
          <div className="thirdAuth">
            <div className="usernameAuth">
              <p>Username</p>
              <input
                className="inputAuth"
                onChange={e => this.handleName(e.target.value)}
              />
            </div>
            <div className="usernameAuth">
              <p>Password</p>
              <input
                className="inputAuth"
                onChange={e => this.handlePass(e.target.value)}
              />
            </div>
            <button
              className="buttonAuth"
              onClick={() => {
                this.createUser();
              }}
            >
              Register
            </button>{' '}
            <button className="buttonAuth">Login </button>
          </div>
        </div>
      </div>
    );
  }
}
