import React, { Component } from 'react';
// import Navbar from './Navbar';
import '../img/128px-Book_icoline.png';
import { Link } from 'react-router-dom';

import './AuthView.css';

export default class AuthView extends Component {
  // addToCart(name, price) {
  //   this.setState({ productName: name, productPrice: price });
  //   axios.post('/cart', {
  //     name: this.state.productName,
  //     price: this.state.productPrice
  //   });
  // }
  render() {
    // <button
    //           className="loginButton"
    //           onClick={() => {
    //             this.addToCart(product.name, product.price);
    //           }}
    //         />
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
              <input className="inputAuth" />
            </div>
            <div className="usernameAuth">
              <p>Password</p>
              <input className="inputAuth" />
            </div>
            <button className="buttonAuth">Register</button>{' '}
            <button className="buttonAuth">Login </button>
          </div>
        </div>
      </div>
    );
  }
}
