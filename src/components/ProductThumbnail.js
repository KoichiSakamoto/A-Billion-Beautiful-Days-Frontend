import React from 'react';


const ProductThumbnail = (props) =>
  <div className="prod-thumbnail">
    <p> {props.product.name} </p>
    <p> Price: {props.product.price} $ </p>
    <img src={props.product.thumbnail_url} alt="thumbnail" />
    <hr />
  </div>;



export default ProductThumbnail;
