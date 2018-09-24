import React, { Component } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/products';
import { addToCart } from '../actions/carts';
import { Link } from 'react-router-dom';

class ProductShowPage extends Component {

  state = {
    currentProduct: {}
  }

  componentDidMount() {
    let findId = window.location.href.split('/').slice(-1)
    this.props.fetchProducts()
  }


  renderProductThumbnail = (index) => {
    if (typeof this.props.product[index] !== 'undefined') {
      return <div className="center-text"> <h1> {this.props.product[index].name} </h1>
      <h2> {this.props.product[index].price} USD </h2>
      <h3> {this.props.product[index].about} </h3>
      <img src={this.props.product[index].thumbnail_url} alt="main img" /> </div>
    } else {
      return null
    }
  }

  handleClick = (index) => {
    this.props.addToCart(this.props.product[index].id, 1)
  }

  findProduct = () => {
    console.log("props", this.props.product)
    if (typeof this.props.product !== "undefined") {
      let findId = window.location.href.split('/').slice(-1)
      let showProductArray = this.props.product.filter((product) => product.id == findId)
      console.log(showProductArray)
      let showProduct = showProductArray[0]
      return this.props.product.indexOf(showProduct)
    } else {
      return null
    }
  }

  render() {
    let indexOfProduct = this.findProduct()
    console.log(indexOfProduct)
    return (
      <div>
        <Header />
        {this.renderProductThumbnail(indexOfProduct)}
        <Link to="/all-products"><button className="add-to-cart-button" onClick={() => this.handleClick(indexOfProduct)}> Add to Cart </button> </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {product: state.products, productImages: state.product_images}
}

export default connect(mapStateToProps, { fetchProducts, addToCart })(ProductShowPage)
