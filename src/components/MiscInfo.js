import React from 'react';
import { Link } from 'react-router-dom';

//Functional component that is displayed under the filter component.
//has an href to the sizing info, and to Chris Fiore's blog.

const MiscInfo = (props) =>
  <ul className="misc-info">
    <li> <Link to="/sizing"> Sizing Information </Link> </li>
    <li> <a href="http://chrisfiore.com/fioreblog/" > Blog </a> </li>
  </ul>



export default MiscInfo;
