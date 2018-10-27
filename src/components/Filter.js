import React from 'react';

//Simple functional component, contains all the product categories.
//When a category is pressed, the displayed products change to that
//of the clicked category.
const Filter = (props) =>
  <ul className="filter" >
    {props.displayCategories()}
  </ul>



export default Filter;
