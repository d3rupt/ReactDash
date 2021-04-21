import React from 'react'
import './WindyClouds.css'
export default class CloudsCloudy extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
  return(
    <div className="cloudsContainerWindy">
    <div className="animationCloudsWindyFront">
      <div className="animationWindy1">
        <div className="cloudWindy cloud"></div>
        <div className="cloudWindy cloud"></div>
        <div className="cloudWindy cloud"></div>
        <div className="cloudWindy cloud"></div>
        <div className="cloudWindy cloud"></div>
        <div className="cloudWindy cloud"></div>
        <div className="cloudWindy cloud"></div>
        <div className="cloudWindy cloud"></div>
        <div className="cloudWindy cloud"></div>
        <div className="cloudWindy cloud"></div>
      </div>
      </div>
      <div className="animationCloudsWindyMid">
        <div className="animationWindy2">
          <div className="cloudWindy cloud"></div>
          <div className="cloudWindy cloud"></div>
          <div className="cloudWindy cloud"></div>
          <div className="cloudWindy cloud"></div>
          <div className="cloudWindy cloud"></div>
          <div className="cloudWindy cloud"></div>
          <div className="cloudWindy cloud"></div>
          <div className="cloudWindy cloud"></div>
          <div className="cloudWindy cloud"></div>
          <div className="cloudWindy cloud"></div>
        </div>
        </div>
        <div className="animationCloudsWindyBack">
          <div className="animationWindy3">
            <div className="cloudWindy cloud"></div>
            <div className="cloudWindy cloud"></div>
            <div className="cloudWindy cloud"></div>
            <div className="cloudWindy cloud"></div>
            <div className="cloudWindy cloud"></div>
            <div className="cloudWindy cloud"></div>
            <div className="cloudWindy cloud"></div>
            <div className="cloudWindy cloud"></div>
            <div className="cloudWindy cloud"></div>
            <div className="cloudWindy cloud"></div>
          </div>
          </div>
    </div>
  )
}
}
