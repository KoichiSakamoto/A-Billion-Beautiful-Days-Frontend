import React, { Component } from 'react';
import WebsiteAboutBlurb from '../components/WebsiteAboutBlurb';

let imageArray = ["SplashImage1.jpg", "SplashImage2.jpg", "SplashImage3.jpg", "SplashImage4.jpg", "SplashImage5.jpg"]

export default class WelcomePage extends Component {

  state = {
    currentImage: imageArray[0]
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.nextImage(), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  nextImage = () => {
    if (this.state.currentImage === imageArray[4]) {
      this.setState({
        currentImage: imageArray[0]
      })} else {
        let index = imageArray.indexOf(this.state.currentImage)
        this.setState({
          currentImage: imageArray[index + 1]
        })
      }
    }
  

  render() {
    return (<div>
              <h1 className="center-text"> A Billion Beautiful Days </h1>
              <img src={this.state.currentImage} alt="placeholder" className="splash-image"/>
              <WebsiteAboutBlurb />
            </div>
          )}
}
