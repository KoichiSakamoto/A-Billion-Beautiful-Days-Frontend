import React, { Component } from 'react';
import Header from '../components/Header';
import ProductContainer from './ProductContainer';
import Filter from '../components/Filter';
import { fetchProducts } from '../actions/products';
import { fetchCategories } from '../actions/categories';
import { connect } from 'react-redux';

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
        return <div key={category.id} data-id={category.id} onClick={(e) => this.changeCurrentCategory(e)}> ~{category.name}~ </div>
      })
      newArray.push(<div onClick={() => this.setState({currentCategory: 0})}> ~All~ </div>)
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
        <Filter displayCategories={this.displayCategories} />
        <ProductContainer products={this.filterProducts()}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {products: state.products, categories: state.categories}
}

export default connect(mapStateToProps, { fetchProducts, fetchCategories })(ProductIndexPage)
