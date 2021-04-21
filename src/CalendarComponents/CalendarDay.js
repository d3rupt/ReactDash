import React from 'react'
import './Calendar.css'

export default class CalendarDay extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(this.props.holidays)
    document.querySelectorAll('.date')[0].style.background = 'rgba(255,0,0,0.5)';
  }
  render() {
    return(
      <div className="calendar">
        <div className="date">
        <span className="weekDay">{this.props.weekday}</span>
         <span className="dayOfWeek">{this.props.date}</span>
        </div>
        <div className="events">
          <ul className="eventsList">
          {this.props.events ? this.props.events.map(event => <li className="listEvent">{event.summary}</li>) : null}
          {this.props.holidays ? this.props.holidays.slice(0,2).map(holiday => <li className="holidayEvent">{holiday.summary}</li>) : null}
          </ul>
        </div>
      </div>
    )
  }

}
