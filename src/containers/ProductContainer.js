import React, { Component } from 'react';
import ProductThumbnail from '../components/ProductThumbnail';

export default class ProductContainer extends Component {

  generateProductThumbnails = () => {
    console.log(this.props.products);
    let returnArray = this.props.products.map((product) =>
       <ProductThumbnail key={"prod-" + product.id} product={product} />
    )
    return returnArray
  }

  render() {
    return (
      <div>
        {this.generateProductThumbnails()}
      </div>
    )
  }
}
