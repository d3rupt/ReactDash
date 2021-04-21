import React from 'react'
import suncalc from 'suncalc'
import Moment from 'moment'
import { extendMoment } from 'moment-range';

import './App.css';
import WeatherSection from './WeatherSection'
import Calendar from './CalendarComponents/Calendar';
import PicsNNews from './PicsNNews/PicsNNews'

const moment = extendMoment(Moment);

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      weatherData: null,
      location: null,
      calendarInput: null,
      calendarSrc: null,
      gotCalInput: false
      //isDay: 1
    }
    this.isDay = this.isDay.bind(this)
  }

  getLocation = (weather) => {
    console.log('APPLEVEL: ' + weather)
    this.setState({location: weather}, this.RequestWeather)
  }

  isDay() {
    /*this.setState({
      isDay: 0
    })*/
    let skyDay = ['sunrise', 'between4', 'sunriseEnd', 'between5', 'goldenHourEnd', 'between6', 'solarNoon', 'between7', 'goldenHour', 'between8', 'sunsetStart', 'between9']
    // const sunTimes = suncalc.getTimes(new Date(), 49.895077, -97.138451);
    if (document.getElementById('sky').classList.length != 0) {
      if (skyDay.includes(document.getElementById('sky').classList[0])) {
      //console.log('IS WITHIN RANGE')
      if (this.state.isDay != 1) {
        this.setState({
          isDay: 1
        })
      }
    } else {
      //console.log('IS NOT WITHIN RANGE')
      if (this.state.isDay != 0) {
        this.setState({
          isDay: 0
        })
      }
    }
  }
}

  componentDidMount() {
    /*this.setState({
      isDay: 1
    })*/
    this.isDay()
    let isDayInterval = setInterval(this.isDay, 10000)
  }

  render() {
    return (
      <div className={this.state.isDay == 0 ? 'App opacity4' : 'App'}>
      <div id="backgrounds">
        <div className="background sunsetBackground" />
        <div className="background duskBackground" />
        <div className="background nightBackground" />
        <div className="background dawnBackground" />
        <div className="background sunriseBackground" />
        <div className="background dayBackground" />

      </div>

        {this.state.gotCalInput ?
            <Calendar
                isDay={this.state.isDay}
                gotLink={this.state.gotCalInput}
                calendarSrc={this.state.calendarSrc}
            />
            : null
        }
        <WeatherSection
            isDay={this.state.isDay}
        />
        <PicsNNews
            isDay={this.state.isDay}
        />
        {this.state.gotCalInput ?
          null :
            <div
                id="calendarModal"
            >
              <p>Please enter your Google email to sync calendar.</p>
              <p>If you don't enter one, only holidays will be displayed.</p>
              <input
                  type='text'
                  placeholder='Calendar link here'
                  onChange={(event) => {
                    this.setState({
                      calendarInput: event.target.value
                    })
                  }}
              />
              <div id="calendarModalAnswers">
                <div
                    onClick={() => {
                      this.setState({
                        calendarSrc: this.state.calendarInput,
                        gotCalInput: true
                      })
                    }}
                >
                  <p>OK</p>
                </div>
                <div
                    onClick={() => {
                      this.setState({
                        gotCalInput: true
                      })
                    }}
                >
                  <p>Cancel</p>
                </div>
              </div>
            </div>
        }
      </div>
    );
  }
}

export default App;
/*
*/
