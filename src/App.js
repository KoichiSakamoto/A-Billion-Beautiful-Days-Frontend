import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductIndexPage from './containers/ProductIndexPage.js'
import ProductShowPage from './containers/ProductShowPage.js'
import ViewCartPage from './containers/ViewCartPage.js'
import WelcomePage from './containers/WelcomePage.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-boi">
          <Route path="" component={WelcomePage} exact/>
          <Route path="/all-products" component={ProductIndexPage} exact/>
          <Route path="/product" component={ProductShowPage} />
          <Route path="/my-cart" component={ViewCartPage} exact/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
