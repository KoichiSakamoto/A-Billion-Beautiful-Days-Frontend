import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';


const WebsiteAboutBlurb = (props) =>
  <div className="about-website center-text">
    <h3> Welcome To A Billion Beautiful Days! </h3>
    <Link to="/all-products"> <Button bsSize="small"> <div> Enter </div> </Button> </Link>
  </div>;



export default WebsiteAboutBlurb;
