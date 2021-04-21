import React from 'react'
import './Clock.css'
import moment from 'moment'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: moment().format('LL'),
      time: moment().format('LT'),
      isDay: this.props.isDay
    }
  }
  componentDidUpdate() {
  /*  if (this.state.isDay == 0) {
      document.querySelector('.clock').classList.add('clockNight');
    } else if (this.state.isDay == 1) {
      document.querySelector('.clock').classList.remove('clockNight');
    }*/
  }
  componentDidMount() {
    /*if (this.state.isDay == 0) {
      document.querySelector('.clock').classList.add('clockNight');
    } else if (this.state.isDay == 1) {
      document.querySelector('.clock').classList.remove('clockNight');
    }*/
    setInterval(() => {
      this.setState({
        date: moment().format('LL'),
        time: moment().format('LT')
      })
    }, 30 * 1000)
  }
  render() {
    return(
      <div className="clock">
        <div className="timeDate"><p>{this.state.date}</p></div>
        <div className="timeTime"><p>{this.state.time}</p></div>
      </div>
    )
  }
}
//      <div className={this.state.isDay == 0 ? 'clock clockNight' : 'clock'}>
