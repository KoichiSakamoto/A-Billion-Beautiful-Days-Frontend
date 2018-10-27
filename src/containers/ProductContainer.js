import React, { Component } from 'react';
import ProductThumbnail from '../components/ProductThumbnail';

//Complex component that contains product thumbnails. Acquires Products
//from an ancestor, and passes individual product info into the thumbnail itself.
//Resides on the index page.

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
      <div className="product-container">
        {this.generateProductThumbnails()}
      </div>
    )
  }
}
