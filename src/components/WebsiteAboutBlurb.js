import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

// Kind of useless component. Unnecessary, will maybe be removed, but also is innocuous.

const WebsiteAboutBlurb = (props) =>
  <div className="center-text">
    <Link to="/all-products"> <h2 className="about-website"> Enter </h2> </Link>
  </div>;



export default WebsiteAboutBlurb;
