import React from 'react';
import { Link } from 'react-router-dom';

const CartProductThumbnail = (props) =>
  <div className="cart-prod" data-price={props.product.price}>
    <Link to={"/product/" + props.product.id}>
      <img src={props.product.thumbnail_url} alt="thumby" height="75" width="75" />
      <span> {props.product.name}, </span>
    </Link>
    <span> {props.product.price} USD, {props.cartProduct.size} </span> <br />
    <button onClick={(e) => props.handleClick(e, props.cartProduct)}> Remove Item From Cart </button>
    <hr />
  </div>

export default CartProductThumbnail;
