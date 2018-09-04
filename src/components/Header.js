import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) =>
  <div className="header-boi">
    <Link to=""> Welcome Page </Link>
    <Link to="/all-products"> All Products </Link>
    <Link to="/product"> One Product </Link>
    <Link to="/my-cart"> Shopping Cart </Link>
  </div>;



export default Header;
