import React, { Component } from 'react';
import Header from '../components/Header';
import ProductContainer from './ProductContainer'

export default class ProductIndexPage extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/v1/products')
    .then(res => res.json())
    .then(json => this.setState({
      products: json.products
    }))
  }


  render() {
    return (
      <div>
        <Header />
        <h1> Index Page </h1>
        <ProductContainer products={this.state.products}/>
      </div>
    )
  }
}
