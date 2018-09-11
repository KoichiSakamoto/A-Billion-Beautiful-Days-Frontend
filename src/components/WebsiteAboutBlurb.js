import React from 'react';
import { Link } from 'react-router-dom'


const WebsiteAboutBlurb = (props) =>
  <div className="about-website center-text">
    <h3> Welcome To A Billion Beautiful Days! </h3>
    <Link to="/all-products"> <h4> Enter Site </h4></Link>
  </div>;



export default WebsiteAboutBlurb;
