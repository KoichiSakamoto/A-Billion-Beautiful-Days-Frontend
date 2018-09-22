import React from 'react';


const Filter = (props) =>
  <ul className="filter" >
    {props.displayCategories()}
  </ul>



export default Filter;
