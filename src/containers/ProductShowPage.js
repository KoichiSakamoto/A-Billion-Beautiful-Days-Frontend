import React, { Component } from 'react';
import Header from '../components/Header';

export default class ProductShowPage extends Component {

  state = {
    currentProduct: {},
    productImages: []
  }

  componentDidMount() {
    let findId = window.location.href.split('/').slice(-1)
    fetch('http://localhost:4000/api/v1/products/' + findId)
    .then(res => res.json())
    .then(json => this.setState({
      currentProduct: json,
      productImages: json.product_images
    }))
  }

  renderProductImages = () => {
    return this.state.productImages.map((img) =>
      <img src={img.storage_url} alt="blah" height="50" width="50" />)
  }

  render() {
    return (
      <div>
        <Header />
        <h1> {this.state.currentProduct.name} </h1>
        <h2> {this.state.currentProduct.price} </h2>
        <h3> {this.state.currentProduct.about} </h3>
        <img src={this.state.currentProduct.thumbnail_url} alt="main img" />
        {this.renderProductImages()}
      </div>
    )
  }
}
