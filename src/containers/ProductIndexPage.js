import React, { Component } from 'react';
import Header from '../components/Header';
import ProductContainer from './ProductContainer';
import { fetchProducts } from '../actions/products';
import { connect } from 'react-redux';

class ProductIndexPage extends Component {

  componentDidMount() {
    this.props.fetchProducts()
  }


  render() {
    return (
      <div>
        <Header />
        <h1> Index Page </h1>
        <ProductContainer products={this.props.products}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {products: state.products}
}

export default connect(mapStateToProps, { fetchProducts })(ProductIndexPage)
