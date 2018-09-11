import React from 'react';
import { Link } from 'react-router-dom';


const ProductThumbnail = (props) =>
  <div className="prod-thumbnail">

    <Link to={"/product/" + props.product.id} >
      <img src={props.product.thumbnail_url} alt="thumbnail" height="500" width="100%"/>
      <div className="center-text"> {props.product.name} </div>
      <div className="center-text"> Price: {props.product.price} $ </div>
    </Link>

  </div>;



export default ProductThumbnail;
