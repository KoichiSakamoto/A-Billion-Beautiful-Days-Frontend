import React from 'react';
import { Link } from 'react-router-dom';


const MiscInfo = (props) =>
  <ul className="misc-info">
    <li> <Link to="/sizing"> Sizing Information </Link> </li>
    <li> <a href="http://chrisfiore.com/fioreblog/" > Blog </a> </li>
  </ul>



export default MiscInfo;
