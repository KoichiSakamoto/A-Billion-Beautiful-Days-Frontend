import React, { Component } from 'react';
import Header from '../components/Header';
import CartProductThumbnail from '../components/CartProductThumbnail';
import { connect } from 'react-redux';
import { fetchCart } from '../actions/carts';

class ViewCartPage extends Component {

  // state = {
  //   cartItems: []
  // }

  componentDidMount() {
    this.props.fetchCart(1)
  }

  generateCartProductThumbnails = () => {
    console.log('cartitems props:', this.props.cartItems)
    return this.props.cartItems.map((product) =>
      <CartProductThumbnail product={product} />)
  }

  calculateTotal = () => {
    let runningTotal = 0.0
    for (let item in this.props.cartItems) {
      runningTotal += this.props.cartItems[item].price
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
const mapStateToProps = state => {
  return {cartItems: state.carts}
}

export default connect(mapStateToProps, { fetchCart })(ViewCartPage)
