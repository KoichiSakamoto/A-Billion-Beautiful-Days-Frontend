import React, { Component } from 'react';
import WebsiteAboutBlurb from '../components/WebsiteAboutBlurb';


export default class WelcomePage extends Component {

  render() {
    return (<div>
              <h1> Welcome Page </h1>
              <img src="placeholder_img.jpg" alt="placeholder" height="500"/>
              <WebsiteAboutBlurb />
            </div>
          )}
}
