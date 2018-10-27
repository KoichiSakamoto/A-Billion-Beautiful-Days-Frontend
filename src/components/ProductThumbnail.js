import React from 'react';
import { Link } from 'react-router-dom';

//Functional component that displays a single product.
//The main index page contains many of these.

const ProductThumbnail = (props) =>
  <div className="prod-thumbnail">

    <Link to={"/product/" + props.product.id} >
      <img src={props.product.thumbnail_url} alt="thumbnail" height="260" width="100%"/>
      <div className="center-text prod-name"> {props.product.name} </div>
      <div className="center-text"> {props.product.price} $ </div>
    </Link>

  </div>;



export default ProductThumbnail;
