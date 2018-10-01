import React, { Component } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/products';
import { addToCart } from '../actions/carts';
import { Link } from 'react-router-dom';

class ProductShowPage extends Component {

  state = {
    selectedSize: "XS"
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
    this.props.addToCart(this.props.product[index].id, 1, this.state.selectedSize)
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

  changeSize = (e) => {
    this.setState({
      selectedSize: e.target.value
    })
  }

  render() {
    let indexOfProduct = this.findProduct()
    console.log(indexOfProduct)
    return (
      <div className="container">
        <Header />
        {this.renderProductThumbnail(indexOfProduct)}
        <span className="purchase-form">
          <select className="size-select" onChange={(e) => this.changeSize(e)} name="size">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="2XL">2XL</option>
          </select>
          <Link to="/all-products"><button onClick={() => this.handleClick(indexOfProduct)}> Add to Cart </button> </Link>
        </span>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {product: state.products, productImages: state.product_images}
}

export default connect(mapStateToProps, { fetchProducts, addToCart })(ProductShowPage)
