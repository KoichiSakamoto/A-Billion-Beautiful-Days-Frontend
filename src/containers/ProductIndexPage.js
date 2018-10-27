import React, { Component } from 'react';
import Header from '../components/Header';
import ProductContainer from './ProductContainer';
import Filter from '../components/Filter';
import MiscInfo from '../components/MiscInfo';
import Sidebar from './Sidebar';
import { fetchProducts } from '../actions/products';
import { fetchCategories } from '../actions/categories';
import { connect } from 'react-redux';

//One of the biggest components. Is the main 'meat' of the web app.
//Grabs the products from API, and displays them. Passes them to ProductContainer.
//local state is just which category of products to show.
//has to asynchronous requests, first fetches all the products, then fetches all
//the product categories.

class ProductIndexPage extends Component {

  state = {
    currentCategory: 0
  }

  componentDidMount() {
    this.props.fetchProducts()
    this.props.fetchCategories()
  }

  changeCurrentCategory = (e) => {
    this.setState({
      currentCategory: e.target.dataset.id
    })
  }

  displayCategories = () => {
    if (typeof this.props.categories !== 'undefined') {
      let newArray = this.props.categories.map((category) => {
        return  <li className="filter-row" key={category.id} data-id={category.id} onClick={(e) => this.changeCurrentCategory(e)}> {category.name} </li>
      })
      return newArray
    } else {
      return null
    }
  }

  filterProducts = () => {
    if (this.state.currentCategory === 0) {
      return this.props.products
    } else {
      return this.props.products.filter((product) => product.category_id == this.state.currentCategory)
    }
  }

  render() {
    return (
      <div className="container">
        <Header />
        <h1 className="center-text"> A Billion Beautiful Days </h1>
        <Sidebar displayCategories={this.displayCategories} />
        <ProductContainer products={this.filterProducts()}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {products: state.products, categories: state.categories}
}

export default connect(mapStateToProps, { fetchProducts, fetchCategories })(ProductIndexPage)
