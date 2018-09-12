import React, { Component } from 'react';
import Header from '../components/Header';
import CartProductThumbnail from '../components/CartProductThumbnail';
import { connect } from 'react-redux';
import { fetchCart, deleteFromCart } from '../actions/carts';

class ViewCartPage extends Component {

  // state = {
  //   cartTotal: [this.calculateTotal()]
  // }

  componentDidMount() {
    this.props.fetchCart(1)
  }

  generateCartProductThumbnails = () => {
    console.log(this.props.cartItems)
    if (typeof this.props.cartItems !== 'undefined') {
      return this.props.cartItems.map((product) =>
        <CartProductThumbnail product={product} cartProduct={this.props.cartProducts[this.props.cartItems.indexOf(product)]} handleClick={this.removeProductFromCart}/>)
    } else {
      return null
    }
  }

  calculateTotal = () => {
    let runningTotal = 0.0
    for (let item in this.props.cartItems) {
      runningTotal += this.props.cartItems[item].price
    }
    return runningTotal
  }

  removeProductFromCart = (e, cartProd) => {
    let orderTotal = document.getElementsByClassName("order-total")
    orderTotal[0].innerText = parseFloat(orderTotal[0].innerText) - parseFloat(e.target.parentNode.dataset.price)
    e.target.parentNode.parentNode.removeChild(e.target.parentNode)
    this.props.deleteFromCart(cartProd)
  }

  render() {

    return (
      <div>
        <Header />
        <h1> Cart Page </h1>
        {this.generateCartProductThumbnails()}
        <h3> Total: <div className="order-total"> {this.calculateTotal()} </div> USD</h3>
        <button> Order </button>
      </div>
    )

  }
}
const mapStateToProps = state => {
  return {cartItems: state.carts.products, cartProducts: state.carts.cart_products}
}

export default connect(mapStateToProps, { fetchCart, deleteFromCart })(ViewCartPage)
