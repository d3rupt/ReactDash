import React from 'react'
import './CloudsCloudy.css'
export default class CloudsCloudy extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
  return(
    <div className="cloudsContainerCloudy">
        <div className={this.props.isDay == 0 ? "cloudCloudy cloud cloudNight" : "cloudCloudy cloud"}></div>
        <div className={this.props.isDay == 0 ? "cloudCloudy cloud cloudNight" : "cloudCloudy cloud"}></div>
        <div className={this.props.isDay == 0 ? "cloudCloudy cloud cloudNight" : "cloudCloudy cloud"}></div>
        <div className={this.props.isDay == 0 ? "cloudCloudy cloud cloudNight" : "cloudCloudy cloud"}></div>
        <div className={this.props.isDay == 0 ? "cloudCloudy cloud cloudNight" : "cloudCloudy cloud"}></div>
        <div className={this.props.isDay == 0 ? "cloudCloudy cloud cloudNight" : "cloudCloudy cloud"}></div>
        <div className={this.props.isDay == 0 ? "cloudCloudy cloud cloudNight" : "cloudCloudy cloud"}></div>
        <div className={this.props.isDay == 0 ? "cloudCloudy cloud cloudNight" : "cloudCloudy cloud"}></div>
        <div className={this.props.isDay == 0 ? "cloudCloudy cloud cloudNight" : "cloudCloudy cloud"}></div>
        <div className={this.props.isDay == 0 ? "cloudCloudy cloud cloudNight" : "cloudCloudy cloud"}></div>
    </div>
  )
}
}
/*  <div className="animationCloudyBehind">
    <div className="cloudCloudy cloud"></div>
    <div className="cloudCloudy cloud"></div>
    <div className="cloudCloudy cloud"></div>
    <div className="cloudCloudy cloud"></div>
    <div className="cloudCloudy cloud"></div>
    <div className="cloudCloudy cloud"></div>
    <div className="cloudCloudy cloud"></div>
    <div className="cloudCloudy cloud"></div>
    <div className="cloudCloudy cloud"></div>
    <div className="cloudCloudy cloud"></div>
    <div className="cloudCloudy cloud"></div>
    <div className="cloudCloudy cloud"></div>
    <div className="cloudCloudy cloud"></div>
    <div className="cloudCloudy cloud"></div>
    <div className="cloudCloudy cloud"></div>
    <div className="cloudCloudy cloud"></div>
    <div className="cloudCloudy cloud"></div>
    <div className="cloudCloudy cloud"></div>
    <div className="cloudCloudy cloud"></div>
    <div className="cloudCloudy cloud"></div>
  </div>*/
