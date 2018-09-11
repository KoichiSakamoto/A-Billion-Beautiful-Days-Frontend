import React, { Component } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions/products'

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
      return <div> <h1> {this.props.product[0].name} </h1>
      <h2> {this.props.product[0].price} USD </h2>
      <h3> {this.props.product[0].about} </h3>
      <img src={this.props.product[0].thumbnail_url} alt="main img" /> </div>
    } else {
      return null
    }
  }

  handleClick = () => {
    console.log(this.props.product[0].id)
    fetch('http://localhost:4000/api/v1/cart_products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({product_id: this.props.product[0].id, cart_id: 1})
    })
    .then(res => res.json())
    .then(json => console.log(json))
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderProductThumbnail()}
        {this.renderProductImages()}
        <button onClick={this.handleClick}> Add to Cart </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {product: state.products, productImages: state.product_images}
}

export default connect(mapStateToProps, { fetchProduct })(ProductShowPage)
