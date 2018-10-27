import React from 'react';
import { Link } from 'react-router-dom';

//This component is rendered when viewing your cart.
//Each one represents one product in the cart itself.
//Grabs its props from a fetch request that acquires the cart itself.


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
