import React from 'react'
import WeatherTile from './WeatherTile'
import DayNightCycle from './DayNightCycle'
//Cloud modes
import CloudsCloudy from './WeatherComponents/Clouds/CloudsCloudy'
import PartlyCloudy from './WeatherComponents/Clouds/PartlyCloudy'
import Overcast from './WeatherComponents/Clouds/Overcast'
import WindyClouds from './WeatherComponents/Clouds/WindyClouds'
//Snow modes
import LightSnow from './WeatherComponents/Snow/LightSnow'
import MedSnow from './WeatherComponents/Snow/MedSnow'
import HeavySnow from './WeatherComponents/Snow/HeavySnow'
import Blizzard from './WeatherComponents/Snow/Blizzard'
import BlowingSnow from './WeatherComponents/Snow/BlowingSnow'
import BlowingSnowIdle from './WeatherComponents/MiscItems/BlowingSnowIdle'


//Rain modes
import LightRain from './WeatherComponents/Rain/LightRain'
import MedRain from './WeatherComponents/Rain/MedRain'
import HeavyRain from './WeatherComponents/Rain/HeavyRain'
import TorrRain from './WeatherComponents/Rain/TorrRain'

//Storm modes
import Lightning from './WeatherComponents/Thunderstorm/Lightning'

import Fog from './WeatherComponents/Mist&Fog/Fog'
import Mist from './WeatherComponents/Mist&Fog/Mist'

import Leaves from './WeatherComponents/MiscItems/Leaves'

import './WeatherSection.css'
import moment from 'moment'
import Clock from './Clock/Clock';

export default class WeatherSection extends React.Component {
  constructor(props) {
    super(props)
    this.RequestWeather = this.RequestWeather.bind(this)
    this.SetWeather = this.SetWeather.bind(this)
    this.getLocation = this.getLocation.bind(this)
    //this.theShow = this.theShow.bind(this)


    this.state = {
      isLoading: false,
      weatherData: null,
      location: null,
      code: null,
      isDay: this.props.isDay,
      moon: null,
      season: null,
      coords: null
    }
  }

  getLocation() {
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition ((position) => {
       this.setState({
         coords: position.coords
       }, () => {
         this.RequestWeather()
       })
       })
   } else {
      alert("This browser does nor support geolocation.")
   }
 }

  RequestWeather() {
  //  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=49.895077&lon=-97.138451&exclude=minutely,hourly&appid=fc1e626cf9767a060d5f305178089700&units=metric`)
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=6018bc6ca5bb4a4884c184418202812&q=${this.state.coords.latitude},${this.state.coords.longitude}&days=2`)
    //fetch(`http://api.weatherapi.com/v1/forecast.json?key=6018bc6ca5bb4a4884c184418202812&q=${this.state.location}&days=5`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      /*this.setState({
        isLoading: true,
        currentTemp: json.current.weather[0].temp,
        currentCondition: json.current.weather[0].description,
        forecast: json.daily,
        weatherToday: `${json.daily[0].max} / ${json.daily[0].min}`,
        conditionToday: json.daily[0].weather.description,
        weatherTomorrow: `${json.daily[1].max} / ${json.daily[1].min}`,
        conditionTomorrow: ghgh,
        isNight: (new Date.now() > json.current.sunset),
        //code: json.current.condition.code
        code: json.current.weather[0].id
      }, () => {
        console.log('ISLoadonG? ' + (this.state.isLoading))
      })*/
      this.setState({
        isLoading: true,
        currentData: json.current,
        weatherData: json.forecast.forecastday,
        code: json.current.condition.code,
        moon: json.forecast.forecastday[0].astro.moon_phase.split(' ').join('')
      })
      //Season for idle anims
      if([11,0,2,1].includes(moment().month())) {
        this.setState({
          season: 0
        })
      } else if([2,3,4].includes(moment().month())) {
        this.setState({
          season: 1
        })
      } else if([5,6,7].includes(moment().month())) {
        this.setState({
          season: 2
        })
      } else if([8,9,10].includes(moment().month())) {
        this.setState({
          season: 3
        })
      }

      }
    ).catch((err) => {
      console.log('error')
      console.log(err)
    })
  }

    SetWeather() {
    //P.Cloudy
    if (this.state.code === 1003) {
      return <PartlyCloudy isDay={this.props.isDay} />
      //Cloudy
    } else if (this.state.code === 1006) {
        return <CloudsCloudy isDay={this.props.isDay} />
    }
    //Overcast
    else if (this.state.code === 1009) {
      return <Overcast isDay={this.props.isDay}/>
    }
    else if (this.state.code === 1030) {
      return <Mist />;
    }
    else if (this.state.code === 1063) {
      return <LightRain />;
  }
  else if (this.state.code === 1066) {
      return <LightSnow />;
  }
  else if (this.state.code === 1069) {
      return <><LightSnow icepellets={true} /><LightRain /></>;
  }
  else if (this.state.code === 1072) {
      return <><LightRain /><CloudsCloudy isDay={this.props.isDay}/></>;
  }
  else if (this.state.code === 1087) {
      return <><Overcast isDay={this.props.isDay}/><Lightning /></>;
  }
  else if (this.state.code === 1114) {
      return <BlowingSnow />;
  }
  else if (this.state.code === 1117) {
      return <><HeavySnow /><Overcast isDay={this.props.isDay}/><BlowingSnow /></>
  }
  else if (this.state.code === 1135) {
      return <Fog />;}
  else if (this.state.code === 1147) {
      return <><LightSnow icepellets={true} /><Fog /></>;}
  else if (this.state.code === 1150) {
      return <LightRain />;
  }
  else if (this.state.code === 1153) {
      return <LightRain />
  }
  else if (this.state.code === 1168) {
      return <><LightSnow icepellets={true} /><LightRain /></>
  }
  else if (this.state.code === 1171) {
      return <><LightSnow icepellets={true} /><HeavyRain /></>
  }
  else if (this.state.code === 1180) {
    return <LightRain />
  }
  else if (this.state.code === 1183) {
      return <><LightRain /><PartlyCloudy isDay={this.props.isDay} /></>
  }
  else if (this.state.code === 1186) {
      return <><PartlyCloudy isDay={this.props.isDay} /><MedRain /></>
  }
  else if (this.state.code === 1189) {
      return <><MedRain /><CloudsCloudy isDay={this.props.isDay} /></>
  }
  else if (this.state.code === 1192) {
      return <HeavyRain />
  }
  else if (this.state.code === 1195) {
      return <><Overcast isDay={this.props.isDay}/><HeavyRain /></>
  }
  else if (this.state.code === 1198) {
      return <LightRain />
  }
  else if (this.state.code === 1201) {
      return <MedRain />
  }
  else if (this.state.code === 1204) {
      return <LightRain />
  }
  else if (this.state.code === 1207) {
      return <MedRain />
  }
  else if (this.state.code === 1210) {
      return <LightSnow />
  }
  else if (this.state.code === 1213) {
      return <><LightSnow /><PartlyCloudy isDay={this.props.isDay} /></>
  }
  else if (this.state.code === 1216) {
      return <><CloudsCloudy isDay={this.props.isDay}/><MedSnow /></>
  }
  else if (this.state.code === 1219) {
      return <><MedSnow /><CloudsCloudy isDay={this.props.isDay}/></>
  }
  else if (this.state.code === 1222) {
      return <><Overcast isDay={this.props.isDay}/><HeavySnow /></>
  }
  else if (this.state.code === 1225) {
      return <><Overcast isDay={this.props.isDay}/><HeavySnow /></>
  }
  else if (this.state.code === 1237) {
      return <LightSnow icepellets={true} />
  }
  else if (this.state.code === 1240) {
      return <LightRain />
  }
  else if (this.state.code === 1243) {
      return <><Overcast isDay={this.props.isDay}/><MedRain /></>
  }
  else if (this.state.code === 1246) {
    return <><Overcast isDay={this.props.isDay}/><HeavyRain /></>
  }
  else if (this.state.code === 1273) {
    return <><Overcast isDay={this.props.isDay}/><LightRain /><Lightning /></>
  }
  else if (this.state.code === 1276) {
    return <><Overcast isDay={this.props.isDay}/><HeavyRain /><Lightning /></>
  }
  else {
  return <Leaves />
  }
}

  componentDidUpdate(prevProps) {
    if (prevProps.isDay !== this.props.isDay) {
      this.setState({
        isDay: this.props.isDay
      })
    }
  }
  componentDidMount() {
    this.getLocation()
    setInterval(this.RequestWeather, (60000 * 5))
  }

  render() {
    return (
    <div className="weatherBackground">
      <div className="Tiles">
        {this.state.isLoading ?
          <DayNightCycle
            moon={this.state.moon}
            longitude={this.state.coords.longitude}
            latitude={this.state.coords.latitude}
            season={this.state.season}
            isDay={this.props.isDay}
            />
          : /*<DayNightCycle
            longitude=''
            latitude=''
            season={this.state.season}
            />*/
            null
          }
        {this.SetWeather()}
        <Clock
          hour={this.state.hour}
          />
        <div className="nowWeather">
        {this.state.isLoading ?
        <WeatherTile
          code={this.state.code}
          icicles={false}
          condition={this.state.currentData.condition.text}
          icon={this.state.currentData.condition.icon}
          date="Now"
          today={Math.round(this.state.currentData.temp_c) + '\xB0'}
          isDay={this.state.isDay}/> : null}
        </div>
          <div className="forecast">
          {this.state.isLoading ?
                this.state.weatherData.map(data => (
                  <WeatherTile
                    className={this.state.isDay == 0 ? 'tile tileNight' : 'tile'}
                    code={data.day.condition.code}
                    condition={data.day.condition.text}
                    icon={data.day.condition.icon}
                    date={moment(data.date, 'YYYY-MM-DD').calendar(null, {
                     lastDay : '[Yesterday]',
                     sameDay : '[Today]',
                     nextDay : '[Tomorrow]'
                   })}
                   high={Math.round(data.day.maxtemp_c) + '\xB0'}
                   low={Math.round(data.day.mintemp_c) + '\xB0'}
                   isDay={this.props.isDay}/>))
                  : null
                 }
        </div>
      </div>
    </div>
    )
  }
}


/*theShow() {
   let counter = 0;
   let hourCounter = 0;
   let weatherCounter = 0;

   let showTimer = setInterval(() => {
     console.log(counter)
     console.log(hourCounter)
     console.log(weatherCounter)

     const positions = ['night', 'between11', 'nadir', 'between1', 'nightEnd', 'between2', 'nauticalDawn', 'dawn', 'between3', 'sunrise', 'between4', 'sunriseEnd', 'between5', 'goldenHourEnd', 'between6', 'solarNoon' ,'between7', 'goldenHour', 'between8', 'sunsetStart', 'between9', 'sunset', 'between10', 'dusk', 'nauticalDusk']
     const winterCodes = [1066, 1114, 1117, 1147, 1213, 1219, 1225, 1237]
     const summerCodes = [1000, 1030, 1087,1135, 1183, 1189, 1195, 1246, 1276,]
     if (counter == positions.length) {
       counter = 0;
     }

     if (hourCounter == 24) {
       hourCounter = 0;
     }

     if (counter == 0) {
     if (weatherCounter <= winterCodes.length - 1) {
       this.setState({
         code: winterCodes[weatherCounter]
       })
       weatherCounter++
     }
     else {
       weatherCounter = 0;
     }
   }

     this.setState({
       sunPosition: positions[counter],
       hour: hourCounter
     })
     counter++
     hourCounter++
   }, 10000)
 }*/
