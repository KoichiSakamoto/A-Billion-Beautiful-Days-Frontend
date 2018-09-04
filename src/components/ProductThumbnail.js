import React from 'react';


const ProductThumbnail = (props) =>
  <div className="prod-thumbnail">
    <p> {props.product.name} </p>
    <p> Price: {props.product.price} $ </p>
  </div>;



export default ProductThumbnail;
