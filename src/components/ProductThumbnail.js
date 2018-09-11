import React from 'react';
import { Link } from 'react-router-dom';


const ProductThumbnail = (props) =>
  <div className="prod-thumbnail">
    <p> {props.product.name} </p>
    <p> Price: {props.product.price} $ </p>

    <Link to={"/product/" + props.product.id} >
      <img src={props.product.thumbnail_url} alt="thumbnail" height="500" width="500" />
    </Link>
    <hr />
  </div>;



export default ProductThumbnail;
