import React from 'react'
import './LightSnow.css'

export default class LightSnow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.icepellets) {
     document.querySelectorAll('.flakeLight').forEach(flake => {
       flake.classList.add('icePellets');
     })
     document.querySelector('.snowflakesLight').style.animation = 'icePellets infinite linear';
     document.querySelector('.snowflakes2Light').style.animation = 'icePellets infinite linear';
     document.querySelector('.snowflakesLight').style.animationDuration = '2s';
     document.querySelector('.snowflakes2Light').style.animationDuration = '2s';
     document.querySelector('.snowflakes2Light').style.animationDelay = '1s';
  } else {
    document.querySelectorAll('.flakeLight').forEach(flake => {
      flake.classList.remove('icePellets');
      flake.classList.add('lightSnow');

    })
  }
}

  render() {
    return(
      <div className="snowLight">
        <div className="snowflakesLight">
          <div className="flakeLight"></div>
          <div className="flakeLight"></div>
          <div className="flakeLight"></div>
          <div className="flakeLight"></div>
          <div className="flakeLight"></div>
          <div className="flakeLight"></div>
          <div className="flakeLight"></div>
          <div className="flakeLight"></div>
          <div className="flakeLight"></div>
          <div className="flakeLight"></div>
        </div>
        <div className="snowflakes2Light">
          <div className="flakeLight"></div>
          <div className="flakeLight"></div>
          <div className="flakeLight"></div>
          <div className="flakeLight"></div>
          <div className="flakeLight"></div>
          <div className="flakeLight"></div>
          <div className="flakeLight"></div>
          <div className="flakeLight"></div>
          <div className="flakeLight"></div>
          <div className="flakeLight"></div>
          <div className="flakeLight"></div>
        </div>
      </div>
  )
  }

}
/*  <canvas id="snowflakesLight"></canvas>*/
