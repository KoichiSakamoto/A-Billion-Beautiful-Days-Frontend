import React, { Component } from 'react';
import WebsiteAboutBlurb from '../components/WebsiteAboutBlurb';


export default class WelcomePage extends Component {

  render() {
    return (<div>
              <h1 className="center-text"> A Billion Beautiful Days </h1>
              <img src="SplashImage.jpg" alt="placeholder" className="splash-image"/>
              <WebsiteAboutBlurb />
            </div>
          )}
}
