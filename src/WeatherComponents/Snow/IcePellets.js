import React from 'react'
import './LightRain.css'

export default class LightRain extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="rainLight">
        <div className="rainDropsLight">
          <div className="dropLight"></div>
          <div className="dropLight"></div>
          <div className="dropLight"></div>
          <div className="dropLight"></div>
          <div className="dropLight"></div>
          <div className="dropLight"></div>
          <div className="dropLight"></div>
          <div className="dropLight"></div>
          <div className="dropLight"></div>
          <div className="dropLight"></div>
        </div>
        <div className="rainDrops2Light">
          <div className="dropLight"></div>
          <div className="dropLight"></div>
          <div className="dropLight"></div>
          <div className="dropLight"></div>
          <div className="dropLight"></div>
          <div className="dropLight"></div>
          <div className="dropLight"></div>
          <div className="dropLight"></div>
          <div className="dropLight"></div>
          <div className="dropLight"></div>
          <div className="dropLight"></div>
        </div>
      </div>
    )
  }
}
