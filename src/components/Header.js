import React from 'react';
import { Link } from 'react-router-dom';

//Simple component that contains an href to the main page, and the cart page.
//is displayed on every page except the splash screen.

const Header = (props) =>
  <div className="header-boi">
    <Link to="/all-products"> <img src="/icon.jpg" alt="Show All Products" className="header-icon"/> </Link>
    <Link to="/my-cart"> <img src="/shopping-cart.png" alt="View My Cart" className="right shopping-cart"/> </Link>
  </div>;



export default Header;
