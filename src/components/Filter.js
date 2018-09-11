import React from 'react';


const Filter = (props) =>
  <div className="filter" >
    <div>Filter by product: </div>
    {props.displayCategories()}
  </div>



export default Filter;
