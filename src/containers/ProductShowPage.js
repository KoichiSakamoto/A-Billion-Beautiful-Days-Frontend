import React, { Component } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions/products';
import { addToCart } from '../actions/carts';
import { Link } from 'react-router-dom';

class ProductShowPage extends Component {

  // state = {
  //   currentProduct: {},
  //   productImages: []
  // }

  componentDidMount() {
    let findId = window.location.href.split('/').slice(-1)
    this.props.fetchProduct(findId)
  }

  renderProductImages = () => {
    if (typeof this.props.product.product_images !== 'undefined') {
      return this.props.product.product_images.map((img) =>
      <img src={img.storage_url} alt="blah" key={img.id} height="50" width="50" />)
    } else {
      return null
    }
  }

  renderProductThumbnail = () => {
    if (typeof this.props.product[0] !== 'undefined') {
      return <div className="center-text"> <h1> {this.props.product[0].name} </h1>
      <h2> {this.props.product[0].price} USD </h2>
      <h3> {this.props.product[0].about} </h3>
      <img src={this.props.product[0].thumbnail_url} alt="main img" /> </div>
    } else {
      return null
    }
  }

  handleClick = () => {
    this.props.addToCart(this.props.product[0].id, 1)
    window.location.reload()
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderProductThumbnail()}
        {this.renderProductImages()}
        <Link to="/all-products"><button className="add-to-cart-button" onClick={this.handleClick}> Add to Cart </button> </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {product: state.products, productImages: state.product_images}
}

export default connect(mapStateToProps, { fetchProduct, addToCart })(ProductShowPage)
