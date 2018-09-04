import React, { Component } from 'react';
import Header from '../components/Header';


export default class WelcomePage extends Component {

  render() {
    return (<div>
              <Header />
              <h1> Welcome Page </h1>
              <img src="placeholder_img.jpg" alt="placeholder" height="500"/>
              <h3>Welcome to A Billion Beautiful Days! </h3>
            </div>
          )}
}
