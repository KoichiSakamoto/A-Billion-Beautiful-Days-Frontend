import React, { Component } from 'react';
import ProductThumbnail from '../components/ProductThumbnail';

export default class ProductContainer extends Component {

  generateProductThumbnails = () => {
    if (typeof this.props.products !== 'undefined') {
      let returnArray = this.props.products.map((product) =>
         <ProductThumbnail key={"prod-" + product.id} product={product} />
      )
      return returnArray
    } else {
      return null
    }
  }

  render() {
    return (
      <div>
        {this.generateProductThumbnails()}
      </div>
    )
  }
}
