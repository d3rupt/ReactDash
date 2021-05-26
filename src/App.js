import React, {useState, useEffect} from 'react'
import suncalc from 'suncalc'
import Moment from 'moment'
import { extendMoment } from 'moment-range';

import './App.css';
import WeatherSection from './WeatherSection'
import Calendar from './CalendarComponents/Calendar';
import PicsNNews from './PicsNNews/PicsNNews'
import {useDataLayerValue} from "./DataLayer";

const moment = extendMoment(Moment);

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [dayWallpaper, setWallpaper] = useState('');
  const [{isDayGlobal, wallpaper}, dispatch] = useDataLayerValue();
  const [isDay, setIsDay] = useState(null)
  const [calendarSrc, setCalSrc] = useState(null);
  const [calendarInput, getCalendarInput] = useState(false);

  useEffect(() => {
    setIsDay(isDayGlobal);
  }, [isDayGlobal])

  useEffect(() => {
    setWallpaper(wallpaper)
  }, [wallpaper])

  const wallpaperChooser = () => {
    switch(dayWallpaper) {
      case 'sunset':
        return(<div className="background sunsetBackground" />);
      case 'dusk':
        return(<div className="background duskBackground" />);
      case 'night':
        return (<div className="background nightBackground" />);
      case 'dawn':
        return(<div className="background dawnBackground" />);
      case 'sunrise':
        return(<div className="background sunriseBackground" />);
      case 'day':
        return(<div className="background dayBackground" />);
    }
  }
    return (
      <div className={isDay == 0 ? 'App opacity4' : 'App'}>
      <div id="backgrounds">
        {wallpaperChooser()}
      </div>
        {calendarInput ?
            <Calendar
                isDay={isDay}
                gotLink={calendarInput}
                calendarSrc={calendarSrc}
            />
            : null
        }
        <WeatherSection
            isDay={isDay}
        />
        <PicsNNews
            isDay={isDay}
        />
        {calendarInput ?
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
                      getCalendarInput(true)
                      setCalSrc(calendarInput)
                    }}
                >
                  <p>OK</p>
                </div>
                <div
                    onClick={() => {
                        getCalendarInput(true)
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

export default App;

