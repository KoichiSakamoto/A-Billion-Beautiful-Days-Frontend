import React from 'react';
import { Link } from 'react-router-dom';


const ProductThumbnail = (props) =>
  <div className="prod-thumbnail">

    <Link to={"/product/" + props.product.id} >
      <img src={props.product.thumbnail_url} alt="thumbnail" height="300" width="100%"/>
      <div className="center-text prod-name"> {props.product.name} </div>
      <div className="center-text"> {props.product.price} $ </div>
    </Link>

  </div>;



export default ProductThumbnail;
