import React from 'react'
import './Lightning.css'

export default class Lightning extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    function getRandom() {
      return Math.floor(Math.random() * 3) ;
    }
    var rand = Math.round(Math.random() * (30000 - 5000)) + 50; // generate new time (between 3sec and 50"s)
    const lightningAnims = ['lightningStrike1 0.25s', 'lightningStrike2 0.35s', 'lightningStrike3 0.35s']
    const lightningAnim = setInterval(() => {
      console.log('TRIGGERED')
      document.querySelector('.lightning').style.animation = lightningAnims[getRandom(0, 2)];
      console.log(lightningAnims[getRandom()])

    }, rand)
  }
  render() {
    return(
      <div className="lightning" />
    )
  }
}
