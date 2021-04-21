import React from 'react'
import moment from 'moment'
import './Calendar.css'
import CalendarDay from './CalendarDay'

export default class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.GetEvents = this.GetEvents.bind(this)
    this.state = {
      events: {},
      holidays: {}
    }
  }


  GetEvents() {
    let today = moment()
  //  let today = moment(`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`, 'YYYY-MM-DD')
    let oneWeek = new Date()
    oneWeek.setDate(oneWeek.getDate() + 6)

    let sortEvents = () => {

      fetch(`https://www.googleapis.com/calendar/v3/calendars/${this.props.calendarSrc}/events?singleEvents=True&orderBy=startTime&timeMin=${today.toISOString()}&timeMax=${oneWeek.toISOString()}&key=${process.env.calendarAPI}`)
        .then(res => res.json())
        .then(events => {

          let thisWeek = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: []
          }

          let eventsList = [...events.items]
          eventsList.forEach(event => {
            let eventTime = moment(event.start.date, 'YYYY-MM-DD').date()
            if ( eventTime === moment().date()) {
              thisWeek[0].push(event);
            } else if (eventTime === moment().add(1, 'days').date()) {
              thisWeek[1].push(event)
            } else if (eventTime === moment().add(2, 'days').date()) {
              thisWeek[2].push(event)
            } else if (eventTime === moment().add(3, 'days').date()) {
              thisWeek[3].push(event)
            } else if (eventTime === moment().add(4, 'days').date()) {
              thisWeek[4].push(event)
            } else if (eventTime === moment().add(5, 'days').date()) {
              thisWeek[5].push(event)
            } else if (eventTime === moment().add(6, 'days').date()) {
              thisWeek[6].push(event)
            }
          })
          this.setState({
            events: thisWeek
          })
        })
    }

    let sortHolidays = () => {
      fetch(`https://www.googleapis.com/calendar/v3/calendars/en.canadian%23holiday%40group.v.calendar.google.com/events?key=${process.env.calendarAPI}`)
        .then(res => res.json())
        .then(holidays => {

          let holidaysWeek = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: []
          }

          let holidaysList = [...holidays.items]
          holidaysList.forEach(holiday => {
            let holidayNow = moment(holiday.start.date, 'YYYY-MM-DD')
            let holidayTime = holidayNow.date()
            if (parseInt(holiday.id.substring(0,4)) === today.year()) {
            if ( holidayTime === moment().date()  && moment().month() === holidayNow.month()) {
              holidaysWeek[0].push(holiday);
            } else if (holidayTime === moment().add(1, 'days').date() && moment().month() === holidayNow.month()) {
              holidaysWeek[1].push(holiday)
            } else if (holidayTime === moment().add(2, 'days').date() && moment().month() === holidayNow.month()) {
              holidaysWeek[2].push(holiday)
            } else if (holidayTime === moment().add(3, 'days').date() && moment().month() === holidayNow.month()) {
              holidaysWeek[3].push(holiday)
            } else if (holidayTime === moment().add(4, 'days').date() && moment().month() === holidayNow.month()) {
              holidaysWeek[4].push(holiday)
            } else if (holidayTime === moment().add(5, 'days').date() && moment().month() === holidayNow.month()) {
              holidaysWeek[5].push(holiday)
            } else if (holidayTime === moment().add(6, 'days').date() && moment().month() === holidayNow.month()) {
              holidaysWeek[6].push(holiday)
            }
          }
          })
          this.setState({
            holidays: holidaysWeek
          })
        })
    }
    function allEvents() {
      sortHolidays()
      sortEvents()
    }
    this.props.gotLink && this.props.calendarSrc !== null ?
        allEvents()
    : sortHolidays()
  }

  componentDidUpdate() {
  }

  componentDidMount() {
    this.GetEvents()
  }

  render() {

    return(
    <div className="calendarDiv">
      <CalendarDay holidays={this.state.holidays[0]} events={this.state.events[0]} weekday={moment().format('ddd')} date={moment().format('MMM D')}/>
      <CalendarDay holidays={this.state.holidays[1]} events={this.state.events[1]} weekday={moment().add(1, 'days').format('ddd')} date={moment().add(1, 'days').format('MMM D')}/>
      <CalendarDay holidays={this.state.holidays[2]} events={this.state.events[2]} weekday={moment().add(2, 'days').format('ddd')} date={moment().add(2, 'days').format('MMM D')}/>
      <CalendarDay holidays={this.state.holidays[3]} events={this.state.events[3]} weekday={moment().add(3, 'days').format('ddd')} date={moment().add(3, 'days').format('MMM D')}/>
      <CalendarDay holidays={this.state.holidays[4]} events={this.state.events[4]} weekday={moment().add(4, 'days').format('ddd')} date={moment().add(4, 'days').format('MMM D')}/>
      <CalendarDay holidays={this.state.holidays[5]} events={this.state.events[5]} weekday={moment().add(5, 'days').format('ddd')} date={moment().add(5, 'days').format('MMM D')}/>
      <CalendarDay holidays={this.state.holidays[6]} events={this.state.events[6]} weekday={moment().add(6, 'days').format('ddd')} date={moment().add(6, 'days').format('MMM D')}/>
    </div>
    )
  }
}
