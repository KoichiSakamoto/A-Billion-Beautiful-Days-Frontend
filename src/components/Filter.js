import React from 'react';


const Filter = (props) =>
  <div className="filter" >
    <div className="filter-row filter-top-row">Filter by product: </div> <br />
    {props.displayCategories()}
  </div>



export default Filter;
