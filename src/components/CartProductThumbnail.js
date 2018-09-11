import React from 'react';

const CartProductThumbnail = (props) =>
  <div className="cart-prod">
    <img src={props.product.thumbnail_url} alt="yup" height="75" width="75" />
    <p> {props.product.name} </p>
    <p> {props.product.price} </p>
    <button onClick={(e) => props.handleClick(e, props.cartProduct)}> Remove Item From Cart </button>
    <hr />
  </div>

export default CartProductThumbnail;
