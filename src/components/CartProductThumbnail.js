import React from 'react';

const CartProductThumbnail = (props) =>
  <div className="cart-prod" data-price={props.product.price}>
    <img src={props.product.thumbnail_url} alt="thumby" height="75" width="75" />
    <span> {props.product.name}, </span>
    <span> {props.product.price} USD </span> <br />
    <button onClick={(e) => props.handleClick(e, props.cartProduct)}> Remove Item From Cart </button>
    <hr />
  </div>

export default CartProductThumbnail;
