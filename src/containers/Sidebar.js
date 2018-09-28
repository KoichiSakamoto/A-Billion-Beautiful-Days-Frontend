import React, { Component } from 'react';
import Filter from '../components/Filter';
import MiscInfo from '../components/MiscInfo';


export default class Sidebar extends Component {


  render() {
    return (
      <div className="side-bar">
        <Filter displayCategories={this.props.displayCategories} />
        <MiscInfo />
      </div>
    )
  }
}
