import React from 'react'
import './DayNightCycle.css'
import suncalc from 'suncalc'
import Moment from 'moment'
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);



export default class DayNightCycle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sunPosition: null,
      sunTimes: null,
      isDay: props.isDay,
      init: false
    }
    this.SunPos = this.SunPos.bind(this)
    this.setSunAnims = this.setSunAnims.bind(this)
    this.InitSun = this.InitSun.bind(this)
    this.CheckSeason = this.CheckSeason.bind(this)
    //this.CheckIsDay = this.CheckIsDay.bind(this)
  }

  SunPos() {
    this.setState({
      sunPosition: this.props.sun
    })
    const now = new Date()

    this.setState({
      sunTimes: suncalc.getTimes(now, this.props.latitude, this.props.longitude)
    })

    const sunPos = suncalc.getTimes(now, 49.895077, -97.138451)
    const sunTimes = Object.values(sunPos)

    //MIGHT BE A DUPLICATE FUNCTION
    this.InitSun()
    /*for (let i = 0; i < sunTimes.length; i++) {
      if (now.getHours() === sunTimes[i].getHours()) {
        if (now.getMinutes() === sunTimes[i].getMinutes()) {
          for (var ii in sunPos) {
            if (sunPos.hasOwnProperty(ii)) {
              if (sunPos[ii] === sunTimes[i])  {
                this.setState({
                  sunPosition: ii
                })
                console.log('TIME: ' + this.state.sunPosition)
              }
            }
          }
        }
      }
    }*/
  }

  setSunAnims() {
    const sun = document.querySelector('.Sun')
    const moon = document.querySelector('.Moon')
    const sky = document.getElementById('sky')
    const skyColor = document.querySelector('.sky')
    //sky colors
    const dusk = document.getElementById('dusk')
    const night = document.getElementById('night')
    const nadir = document.getElementById('nadir')
    const nightEnd = document.getElementById('nightEnd')
    const dawn = document.getElementById('dawn')
    const sunrise = document.getElementById('sunrise')
    const sunriseEnd = document.getElementById('sunriseEnd')
    const goldenHourEnd = document.getElementById('goldenHourEnd')
    const noon = document.getElementById('noon')
    //sun sunColors es
    const sunDuskDawn = document.getElementById('sunColorDuskDawn')
    const sunSunriseEnd = document.getElementById('sunColorSunriseEndSunriseStart')
    const sunSunset = document.getElementById('sunColorSunriseSunset')
    const sunGoldens = document.getElementById('sunColorGoldens')
    const sunNoon = document.getElementById('sunNoon')

    function changeSky(pos) {
      sky.classList.add(pos)
      if (sky.classList[0] !== pos) {
        sky.classList.remove(sky.classList[0])
      }
    }
    if (this.state.sunPosition !== null) {
      console.log(this.state.sunPosition)
      if ( this.state.sunPosition === 'sunrise') {
        if (this.state.animPos != 0) {
          setTimeout(() => {
            document.querySelector('.dawnBackground').classList.remove('opacity4')
            document.querySelector('.sunriseBackground').classList.add('opacity4')
          }, 3010)

          //sun rotation
          sky.classList.remove('between3')
          sky.classList.add('sunrise')
          //sun colors
          sunDuskDawn.classList.remove('opacity2')
          sunSunset.classList.add('opacity4')
          sunSunset.classList.remove('opacity2')
          //sky colors
          sunrise.classList.add('opacity4')
          sunrise.classList.remove('opacity3')
          dawn.classList.remove('opacity2')

          moon.classList.remove('opacity2')
          moon.classList.add('opacity1')
          this.setState({
            animPos: 0
          })
        }
      } else if (this.state.sunPosition === 'between4') {
        if (this.state.animPos != 15) {
          setTimeout(() => {
            document.querySelector('.sunriseBackground').classList.add('opacity4')
          }, 3010)

          //sun rotation
          sky.classList.add('between4')
          sky.classList.remove('sunrise')
          //sun colors
          sunSunriseEnd.classList.add('opacity2')
          sunSunset.classList.remove('opacity4')
          sunSunset.classList.add('opacity2')
          //sky colors
          sunriseEnd.classList.add('opacity2')
          sunrise.classList.add('opacity2')
          sunrise.classList.remove('opacity4')

          moon.classList.add('opacity0')
          this.setState({
            animPos: 15
          })
        }
      } else if (this.state.sunPosition === 'sunriseEnd') {
          if (this.state.animPos != 1) {
            setTimeout(() => {
              document.querySelector('.sunriseBackground').classList.add('opacity4')
            }, 3010)
                        //sun rotation
            sky.classList.remove('between4')
            sky.classList.add('sunriseEnd')
            //sun colors
            sunSunset.classList.remove('opacity2')
            sunSunriseEnd.classList.add('opacity4')
            sunSunriseEnd.classList.remove('opacity2')
            //sky colors
            sunrise.classList.remove('opacity2')
            sunriseEnd.classList.remove('opacity3')
            sunriseEnd.classList.add('opacity4')

            moon.classList.remove('opacity1')
            moon.classList.add('opacity0')
            this.setState({
              animPos: 1
            })
          }
      } else if (this.state.sunPosition === 'between5') {
        if (this.state.animPos != 16) {
          setTimeout(() => {
            document.querySelector('.sunriseBackground').classList.remove('opacity4')
            document.querySelector('.dayBackground').classList.add('opacity4')
          }, 3010)

                    //sun rotation
          sky.classList.add('between5')
          sky.classList.remove('sunriseEnd')
          //sun colors
          sunSunriseEnd.classList.add('opacity2')
          sunSunriseEnd.classList.remove('opacity4')
          sunGoldens.classList.add('opacity2')
          //sky colors
          sunriseEnd.classList.add('opacity2')
          sunriseEnd.classList.remove('opacity4')
          goldenHourEnd.classList.add('opacity3')

          moon.classList.add('opacity0')
          this.setState({
            animPos: 16
          })
        }
      } else if (this.state.sunPosition === 'goldenHourEnd') {
        if (this.state.animPos != 2) {
          setTimeout(() => {
            document.querySelector('.dayBackground').classList.add('opacity4')
          }, 3010)
                    //sun rotation
          sky.classList.remove('between5')
          sky.classList.add('goldenHourEnd')
          //sun colors
          sunSunriseEnd.classList.remove('opacity2')
          sunGoldens.classList.add('opacity4')
          sunGoldens.classList.remove('opacity2')
          //sky colors
          sunriseEnd.classList.remove('opacity2')
          goldenHourEnd.classList.remove('opacity3')
          goldenHourEnd.classList.add('opacity4')

          moon.classList.add('opacity0')
          this.setState({
            animPos: 2
          })
        }

      } else if (this.state.sunPosition === 'between6') {
        if (this.state.animPos != 17) {
          setTimeout(() => {
            document.querySelector('.dayBackground').classList.add('opacity4')
          }, 3010)
          sky.classList.add('between6')
          sky.classList.remove('goldenHourEnd')
          //sun colors
          sunGoldens.classList.add('opacity2')
          sunGoldens.classList.remove('opacity4')
          sunNoon.classList.add('opacity2')
          //sky colors
          goldenHourEnd.classList.add('opacity2')
          goldenHourEnd.classList.remove('opacity4')
          noon.classList.add('opacity3')

          moon.classList.add('opacity0')
          this.setState({
            animPos: 17
          })
        }
      } else if (this.state.sunPosition === 'solarNoon') {
        if (this.state.animPos != 3) {
          setTimeout(() => {
            document.querySelector('.dayBackground').classList.add('opacity4')
          }, 3010)
          sky.classList.remove('between6')
          sky.classList.add('solarNoon')
          //sun colors
          sunGoldens.classList.remove('opacity2')
          sunNoon.classList.add('opacity4')
          sunNoon.classList.remove('opacity2')
          //sky colors
          goldenHourEnd.classList.remove('opacity2')
          noon.classList.remove('opacity2')
          noon.classList.add('opacity4')

          moon.classList.add('opacity0')
          this.setState({
            animPos: 3
          })
        }
      } else if (this.state.sunPosition === 'between7') {
        if (this.state.animPos != 18) {
          setTimeout(() => {
            document.querySelector('.dayBackground').classList.add('opacity4')
          }, 3010)
          sky.classList.add('between7')
          sky.classList.remove('solarNoon')
          //sun colors
          sunGoldens.classList.add('opacity2')
          sunNoon.classList.add('opacity2')
          //sky colors
          noon.classList.add('opacity2')
          noon.classList.remove('opacity4')
          goldenHourEnd.classList.add('opacity3')

          moon.classList.add('opacity0')
          this.setState({
            animPos: 18
          })
        }
      } else if (this.state.sunPosition === 'goldenHour') {
        if (this.state.animPos != 4) {
          setTimeout(() => {
            document.querySelector('.dayBackground').classList.add('opacity4')
          }, 3010)
          sky.classList.remove('between7')
          sky.classList.add('goldenHour')
          //sun colors
          sunNoon.classList.remove('opacity2')
          sunGoldens.classList.add('opacity4')
          sunGoldens.classList.remove('opacity2')
          //sky colors
          noon.classList.remove('opacity2')
          goldenHourEnd.classList.remove('opacity3')
          goldenHourEnd.classList.add('opacity4')

          moon.classList.add('opacity0')
          this.setState({
            animPos: 4
          })
        }
      } else if (this.state.sunPosition === 'between8') {
        if (this.state.animPos != 19) {
          setTimeout(() => {
            document.querySelector('.dayBackground').classList.add('opacity4')
          }, 3010)
          /*sky.classList.add('between8')
          sky.classList.remove('goldenHour')*/
          changeSky('between8')
          //sun colors
          sunGoldens.classList.add('opacity2')
          sunGoldens.classList.remove('opacity4')
          sunSunriseEnd.classList.add('opacity2')

          //sky colors
          goldenHourEnd.classList.add('opacity2')
          goldenHourEnd.classList.remove('opacity4')
          sunriseEnd.classList.add('opacity3')

          moon.classList.add('opacity0')
          this.setState({
            animPos: 19
          })
        }
      } else if (this.state.sunPosition === 'sunsetStart') {
        if (this.state.animPos != 5) {
          setTimeout(() => {
            document.querySelector('.sunsetBackground').classList.add('opacity4')          //sun rotation
            document.querySelector('.dayBackground').classList.remove('opacity4')
          }, 3010)

          changeSky('sunsetStart')

          //sun colors
          sunGoldens.classList.remove('opacity2')
          sunSunriseEnd.classList.add('opacity4')
          sunSunriseEnd.classList.remove('opacity2')
          //sky colors
          goldenHourEnd.classList.remove('opacity2')
          sunriseEnd.classList.remove('opacity3')
          sunriseEnd.classList.add('opacity4')

          moon.classList.add('opacity0')
          this.setState({
            animPos: 5
          })
        }
       }  else if (this.state.sunPosition === 'between9') {
         if (this.state.animPos != 20) {
           setTimeout(() => {
             document.querySelector('.sunsetBackground').classList.add('opacity4')          //sun rotation
           }, 3010)
           sky.classList.add('between9')
           sky.classList.remove('sunsetStart')
           //sun colors
           sunSunriseEnd.classList.add('opacity2')
           sunSunriseEnd.classList.remove('opacity4')
           sunSunset.classList.add('opacity2')

           //sky colors
           sunriseEnd.classList.add('opacity2')
           sunriseEnd.classList.remove('opacity4')
           sunrise.classList.add('opacity3')

           moon.classList.add('opacity0')
           this.setState({
             animPos: 20
           })
         }
       } else if (this.state.sunPosition === 'sunset') {
         if (this.state.animPos != 6) {
           setTimeout(() => {
             document.querySelector('.sunsetBackground').classList.add('opacity4')          //sun rotation
           }, 3010)
           sky.classList.remove('between9')
           sky.classList.add('sunset')
           //sun colors
           sunSunriseEnd.classList.remove('opacity2')
           sunSunset.classList.add('opacity4')
           sunSunset.classList.remove('opacity2')
           //sky colors
           sunriseEnd.classList.remove('opacity2')
           sunrise.classList.remove('opacity3')
           sunrise.classList.add('opacity4')

           moon.classList.add('opacity0')
           this.setState({
             animPos: 6
           })
         }
      }  else if (this.state.sunPosition === 'between10') {
        if (this.state.animPos != 21) {
          setTimeout(() => {
            document.querySelector('.sunsetBackground').classList.add('opacity4')          //sun rotation
          }, 3010)
          sky.classList.add('between10')
          sky.classList.remove('sunset')
          //sun colors
          sunSunset.classList.add('opacity2')
          sunSunset.classList.remove('opacity4')
          sunDuskDawn.classList.add('opacity2')

          //sky colors
          sunrise.classList.add('opacity2')
          sunrise.classList.remove('opacity4')
          dawn.classList.add('opacity3')

          moon.classList.remove('opacity0')
          moon.classList.add('opacity2')
          this.setState({
            animPos: 21
          })
        }
      } else if (this.state.sunPosition === 'dusk' || this.state.sunPosition === 'nauticalDusk') {
        if (this.state.animPos != 7) {
          setTimeout(() => {
            document.querySelector('.sunsetBackground').classList.remove('opacity4')          //sun rotation
            document.querySelector('.duskBackground').classList.add('opacity4')
          }, 3010)

          sky.classList.remove('between10')
          sky.classList.add('dusk')
          //sun colors
          sunSunset.classList.remove('opacity2')
          sunDuskDawn.classList.add('opacity4')
          sunDuskDawn.classList.remove('opacity2')
          //sky colors
          sunrise.classList.remove('opacity2')
          dawn.classList.remove('opacity3')
          dawn.classList.add('opacity4')

          moon.classList.remove('opacity0')
          moon.classList.add('opacity2')
          this.setState({
            animPos: 7
          })
        }
      } else if (this.state.sunPosition === 'night') {
        if (this.state.animPos != 8) {
          setTimeout(() => {
            document.querySelector('.duskBackground').classList.remove('opacity4')
            document.querySelector('.nightBackground').classList.add('opacity4')          }, 3010)

          sky.classList.remove('dusk')
          sky.classList.add('night')
          //sun colors
          sunDuskDawn.classList.remove('opacity2')
          sun.classList.add('opacity0')
          //sky colors
          dawn.classList.remove('opacity4')
          night.classList.remove('opacity3')
          night.classList.add('opacity4')

          moon.classList.remove('opacity2')
          moon.classList.add('opacity4')
          this.setState({
            animPos: 8
          })
        }
      }  else if (this.state.sunPosition === 'between11') {
        if (this.state.animPos != 22) {
          setTimeout(() => {
            document.querySelector('.nightBackground').classList.add('opacity4')
          }, 3010)
          sky.classList.add('between11')
          sky.classList.remove('night')
          //sun colors
          sunDuskDawn.classList.remove('opacity2')
          sun.classList.add('opacity0')
          //sky colors
          night.classList.remove('opacity4')
          night.classList.add('opacity2')
          nadir.classList.add('opacity3')

          moon.classList.remove('opacity2')
          moon.classList.add('opacity4')
          this.setState({
            animPos: 22
          })
        }
      } else if (this.state.sunPosition === 'nadir') {
        if (this.state.animPos != 9) {
          setTimeout(() => {
            document.querySelector('.nightBackground').classList.add('opacity4')
          }, 3010)
          sky.classList.remove('between11')
          sky.classList.add('nadir')
          //sun colors
          sun.classList.add('opacity0')
          //sky colors
          nadir.classList.remove('opacity3')
          nadir.classList.add('opacity4')
          night.classList.remove('opacity2')

          moon.classList.add('opacity4')
          this.setState({
            animPos: 9
          })
        }
      } else if (this.state.sunPosition === 'between1') {
        if (this.state.animPos != 13) {
          setTimeout(() => {
            document.querySelector('.nightBackground').classList.add('opacity4')
          }, 3010)
          sky.classList.remove('nadir')
          sky.classList.add('between1')
          //sun colors
          sun.classList.add('opacity0')
          //sky colors
          nadir.classList.remove('opacity4')
          nadir.classList.add('opacity2')
          night.classList.add('opacity3')

          moon.classList.add('opacity4')
          this.setState({
            animPos: 13
          })
        }
        //betweenNightEnd&Dawn
      } else if (this.state.sunPosition === 'nightEnd') {
        if (this.state.animPos != 10) {
          setTimeout(() => {
            document.querySelector('.nightBackground').classList.add('opacity4')
          }, 3010)
          sky.classList.remove('between1')
          sky.classList.add('nightEnd')
          //sun colors
          sun.classList.add('opacity0')
          //sky colors
          nadir.classList.remove('opacity2')
          night.classList.add('opacity4')
          night.classList.remove('opacity3')

          moon.classList.add('opacity4')
          this.setState({
            animPos: 10
          })
        }
      } else if (this.state.sunPosition === 'between2') {
        if (this.state.animPos != 14) {
          setTimeout(() => {
            document.querySelector('.nightBackground').classList.add('opacity4')
          }, 3010)
          sky.classList.remove('nightEnd')
          sky.classList.add('between2')
          //sun colors
          sunDuskDawn.classList.add('opacity2')
          sun.classList.remove('opacity0')
          //sky colors
          night.classList.remove('opacity4')
          night.classList.add('opacity2')
          dawn.classList.add('opacity3')

          moon.classList.remove('opacity4')
          moon.classList.add('opacity2')
          this.setState({
            animPos: 14
          })
        }
        //betweeenDawn&Sunrise
      } else if (this.state.sunPosition === 'dawn' || this.state.sunPosition === 'nauticalDawn') {
        if (this.state.animPos != 11) {
          setTimeout(() => {
            document.querySelector('.dawnBackground').classList.add('opacity4')
            document.querySelector('.nightBackground').classList.remove('opacity4')
          }, 3010)

          sky.classList.remove('between2')
          sky.classList.add('dawn')
          //sun colors
          sunDuskDawn.classList.remove('opacity2')
          sunDuskDawn.classList.add('opacity4')
          //sky colors
          night.classList.remove('opacity2')
          dawn.classList.remove('opacity3')
          dawn.classList.add('opacity4')

          moon.classList.remove('opacity4')
          moon.classList.add('opacity2')
          this.setState({
            animPos: 11
          })
        }
      } else if (this.state.sunPosition === 'between3') {
        if (this.state.animPos != 15) {
          setTimeout(() => {
            document.querySelector('.dawnBackground').classList.add('opacity4')
          }, 3010)
          sky.classList.remove('dawn')
          sky.classList.add('between3')
          //sun colors
          sunDuskDawn.classList.add('opacity2')
          sunSunriseEnd.classList.add('opacity2')
          //sky colors
          dawn.classList.add('opacity2')
          dawn.classList.remove('opacity4')
          sunrise.classList.add('opacity3')

          moon.classList.remove('opacity2')
          moon.classList.add('opacity0')
          this.setState({
            animPos: 15
          })
        }
      }
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.sunPosition !== this.state.sunPosition) {
    this.setSunAnims()
    }
  }
  componentDidMount() {
    this.InitSun()
    this.SunPos()
    const sunPosTimer = setInterval(this.InitSun, 5000)

  }

  InitSun() {
    const now = moment(new Date(), 'ddd MMM DD YYYY HH:mm')
    const sunTimes = suncalc.getTimes(now, this.props.latitude, this.props.longitude)
    //const sunTimes = suncalc.getTimes(now, 49.895077, -97.138451)
    const times = [
      moment(sunTimes.nadir, 'ddd MMM DD YYYY HH:mm'),
      moment(sunTimes.nightEnd, 'ddd MMM DD YYYY HH:mm'),
      moment(sunTimes.nauticalDawn, 'ddd MMM DD YYYY HH:mm'),
      moment(sunTimes.dawn, 'ddd MMM DD YYYY HH:mm'),
      moment(sunTimes.sunrise, 'ddd MMM DD YYYY HH:mm'),
      moment(sunTimes.sunriseEnd, 'ddd MMM DD YYYY HH:mm'),
      moment(sunTimes.goldenHourEnd, 'ddd MMM DD YYYY HH:mm'),
      moment(sunTimes.solarNoon, 'ddd MMM DD YYYY HH:mm'),
      moment(sunTimes.goldenHour, 'ddd MMM DD YYYY HH:mm'),
      moment(sunTimes.sunsetStart, 'ddd MMM DD YYYY HH:mm'),
      moment(sunTimes.sunset, 'ddd MMM DD YYYY HH:mm'),
      moment(sunTimes.dusk, 'ddd MMM DD YYYY HH:mm'),
      moment(sunTimes.nauticalDusk, 'ddd MMM DD YYYY HH:mm'),
      moment(sunTimes.night, 'ddd MMM DD YYYY HH:mm')
    ]
    let tomorrow = new Date()
    tomorrow = tomorrow.setDate(tomorrow.getDate()+1)

    const ranges = [
      moment.range(times[0], moment.range(times[0], times[1]).center()), //nadir
      moment.range(times[1], moment.range(times[1], times[2]).center()), //nightEnd
      moment.range(times[2], moment.range(times[2], times[3]).center()), //nauticalDawn
      moment.range(times[3], moment.range(times[3], times[4]).center()), //dawn
      moment.range(times[4], moment.range(times[4], times[5]).center()), //sunrise
      moment.range(times[5], moment.range(times[5], times[6]).center()), //sunriseEnd
      moment.range(times[6], moment.range(times[6], times[7]).center()), //goldenHourEnd
      moment.range(times[7], moment.range(times[7], times[8]).center()), //solarNoon
      moment.range(times[8], moment.range(times[8], times[9]).center()), //goldenHour
      moment.range(times[9], moment.range(times[9], times[10]).center()), //sunsetStart
      moment.range(times[10], moment.range(times[10], times[11]).center()), //sunset
      moment.range(times[11], moment.range(times[11], times[12]).center()), //dusk
      moment.range(times[12], moment.range(times[12], times[13]).center()), //nauticalDusk
      moment.range(times[13], moment(suncalc.getTimes(tomorrow, 49.895077, -97.138451)).nadir), //night
      moment.range(moment.range(times[1], times[2]).center(), times[2]), //betweenNadir&NightEnd 1
      moment.range(moment.range(times[2], times[3]).center(), times[3]), //betweenNightEnd&Dawn 2
      moment.range(moment.range(times[3], times[4]).center(), times[4]), //betweenDawn&Sunrise 3
      moment.range(moment.range(times[4], times[5]).center(), times[5]), //betweenSunrise&SunriseEnd 4
      moment.range(moment.range(times[5], times[6]).center(), times[6]), //betweensunriseEnd&GodlenEnd 5
      moment.range(moment.range(times[6], times[7]).center(), times[7]), //betweengoldenEnd&Noon 6
      moment.range(moment.range(times[7], times[8]).center(), times[8]), //betweenNoon&Golden 7
      moment.range(moment.range(times[8], times[9]).center(), times[9]), //betweenGolden&SunsetStart 8
      moment.range(moment.range(times[9], times[10]).center(), times[10]), //betweenSunsetStart&Sunset 9
      moment.range(moment.range(times[10], times[11]).center(), times[11]), //betweenSunset&Dusk 10
      moment.range(moment.range(times[13], suncalc.getTimes(tomorrow, 49.895077, -97.138451).nadir).center(), suncalc.getTimes(tomorrow, 49.895077, -97.138451).nadir) //betweenNight&Nadir 11
    ];

    for (let i = 0; i < ranges.length; i++) {
      //CHANGE TO SWITCH CASE
      if (now.within(ranges[i])) {
        if (i == 0) {
          console.log('NIGJHT')
          console.log(ranges[i])
          this.setState({
            sunPosition: 'nadir'
          })
        }
          else if (i == 1) {
            this.setState({
              sunPosition: 'nightEnd'
            })
          }
        else if (i == 2) {
          this.setState({
            sunPosition: 'nauticalDawn'
          })
        }
      else if (i == 3) {
        this.setState({
          sunPosition: 'dawn'
        })
      }
        else if (i == 4) {
          this.setState({
            sunPosition: 'sunrise'
          })
        }
        else if (i == 5) {
          this.setState({
            sunPosition: 'sunriseEnd'
          })
        }
        else if (i == 6) {
          this.setState({
            sunPosition: 'goldenHourEnd'
          })
        }
          else if (i == 7) {
            this.setState({
              sunPosition: 'solarNoon'
            })
          }
        else if (i == 8) {
          this.setState({
            sunPosition: 'goldenHour'
          })
        }
      else if (i == 9) {
        this.setState({
          sunPosition: 'sunsetStart'
        })
      }
        else if (i == 10) {
          this.setState({
            sunPosition: 'sunset'
          })
        }
        else if (i == 11) {
          this.setState({
            sunPosition: 'nauticalDusk'
          })
        }
        else if (i == 12) {
          this.setState({
            sunPosition: 'dusk'
          })
        }
        else if (i == 13) {
          this.setState({
            sunPosition: 'night'
          })
        }
        else if (i == 14) {
          this.setState({
            sunPosition: 'between1'
          })
        }
        else if (i == 15) {
          this.setState({
            sunPosition: 'between2'
          })
        }
        else if (i == 16) {
          this.setState({
            sunPosition: 'between3'
          })
        }
        else if (i == 17) {
          this.setState({
            sunPosition: 'between4'
          })
        }
        else if (i == 18) {
          this.setState({
            sunPosition: 'between5'
          })
        }
        else if (i == 19) {
          this.setState({
            sunPosition: 'between6'
          })
        }
        else if (i == 20) {
          this.setState({
            sunPosition: 'between7'
          })
        }
        else if (i == 21) {
          this.setState({
            sunPosition: 'between8'
          })
        }
        else if (i == 22) {
          this.setState({
            sunPosition: 'between9'
          })
        }
        else if (i == 23) {
          this.setState({
            sunPosition: 'between10'
          })
        }
        else if (i == 24) {
          this.setState({
            sunPosition: 'between11'
          })
        }
      }
    }
  }

  CheckSeason() {
    if (this.props.season == 0) {
      return <div className="houseGround" id="winter"><div className="snowman" /></div>
    } else if (this.props.season == 1) {
    return <div className="houseGround" id="spring"><div className="shortGrass"><div className="flowers" /></div></div>
    } else if (this.props.season == 2) {
      return <div className="houseGround" id="summer"><div className="tallGrass"><div className="garden" /></div></div>
    } else if (this.props.season == 3) {
    return <div className="houseGround" id="fall"><div className="leaves" /></div>
    } else {
      return <div classame="houseGround" />
    }
  }

  render() {
    let skyDay = ['sunrise', 'between4', 'sunriseEnd', 'between5', 'goldenHourEnd', 'between6', 'solarNoon', 'between7', 'goldenHour', 'between8', 'sunsetStart', 'between9']
    return(
      <div className={this.props.isDay == 1 ? "sky skyDay" : "sky skyNight"}>
        <div id="dusk" className="skyComponent"><div className="stars" /></div>
        <div id="night" className="skyComponent"><div className="stars" /></div>
        <div id="nadir" className="skyComponentNadir"><div className="stars" /></div>
        <div id="nightEnd" className="skyComponent"><div className="stars" /></div>
        <div id="dawn" className="skyComponent"><div className="stars" /></div>
        <div id="sunrise" className="skyComponent" />
        <div id="sunriseEnd" className="skyComponent" />
        <div id="goldenHourEnd" className="skyComponent" />
        <div id="noon" className="skyComponent" />


        <div id="sky">
          <div className="day"></div>
          <div className="Sun">
            <div className="sunColor" id="sunColorDuskDawn" />
            <div className="sunColor" id="sunColorSunriseEndSunriseStart" />
            <div className="sunColor" id="sunColorSunriseSunset" />
            <div className="sunColor" id="sunColorGoldens" />
            <div className="sunColor" id="sunNoon" />
          </div>
          <div className="Moon" />
        </div>
        <div className={this.props.isDay == 0 ? "houseContainer houseNight" : "houseContainer"}>
          {this.CheckSeason()}
        <div className="house" />
        </div>
        {this.props.isDay == 0 ? <div className="houseLight">
          <div className="lightYellow hLight" />
          <div className="lightOrange hLight" />
        </div> : null}

      </div>
    )
  }
}
//
/*

*/
