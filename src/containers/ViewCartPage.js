import React, { Component } from 'react';
import Header from '../components/Header';
import CartProductThumbnail from '../components/CartProductThumbnail';

export default class ViewCartPage extends Component {

  state = {
    cartItems: []
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/v1/carts/1')
    .then(res => res.json())
    .then(json => this.setState({
      cartItems: json.products
    }))
  }

  generateCartProductThumbnails = () => {
    return this.state.cartItems.map((product) =>
      <CartProductThumbnail product={product} />)
  }

  calculateTotal = () => {
    let runningTotal = 0.0
    for (let item in this.state.cartItems) {
      runningTotal += this.state.cartItems[item].price
    }
    return runningTotal
  }

  render() {
    return (
      <div>
        <Header />
        <h1> Cart Page </h1>
        {this.generateCartProductThumbnails()}
        <h3> Total: {this.calculateTotal()} USD</h3>
        <button> Order </button>
      </div>
    )

  }
}
