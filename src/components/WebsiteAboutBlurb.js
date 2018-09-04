import React from 'react';
import { Link } from 'react-router-dom'


const WebsiteAboutBlurb = (props) =>
  <div className="about-website">
    <h3> Welcome To A Billion Beautiful Days! </h3>
    <Link to="/all-products"> <button> Enter Site </button></Link>
  </div>;



export default WebsiteAboutBlurb;
