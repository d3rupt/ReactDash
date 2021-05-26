import React, {useEffect, useState} from 'react'
import './DayNightCycle.css'
import suncalc from 'suncalc'
import {useDataLayerValue} from './DataLayer';
import Moment from 'moment'
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

export default function DayNightCycle({moon, latitude, longitude, season}) {
  const [{isDayGlobal, wallpaper}, dispatch] = useDataLayerValue()
  const [dayWallpaper, setWallpaper] = useState('');
  const [sunPosition, setSunPosition] = useState(null);
  //const [sunTimes, getSunTimes] = useState(null);
  const [isDay, setIsDay] = useState(null);
  //const [init, setInit] = useState(false)
  const [skyWaxing, setWaxing] = useState(null);
  const [skyWaning, setWaning] = useState(null)
    const [moonOpacity, setMoonOpacity] = useState('');
  const [skies, setSkies] = useState(
      {
        'nadir': {
          'prev': 'between11'
        },
        'between1': {
          'prev': 'nadir'
        },
        'nightEnd': {
          'prev': 'between1'
        },
        'between2': {
          'prev': 'nightEnd'
        },
        'nauticalDawn': {
          'prev': 'between2'
        },
        'dawn': {
          'prev': 'nauticalDawn'
        },
        'between3': {
          'prev': 'dawn'
        },
        'sunrise': {
          'prev': 'between3'
        },
        'between4': {
          'prev': 'sunrise'
        },
        'sunriseEnd': {
          'prev': 'between4'
        },
        'between5': {
          'prev': 'sunriseEnd'
        },
        'goldenHourEnd': {
          'prev': 'between5'
        },
        'between6': {
          'prev': 'goldenHourEnd'
        },
        'solarNoon': {
          'prev': 'between6'
        },
        'between7': {
          'prev': 'solarNoon'
        },
        'goldenHour': {
          'prev': 'between7'
        },
        'between8': {
          'prev': 'goldenHour'
        },
        'sunsetStart': {
          'prev': 'between8'
        },
        'between9': {
          'prev': 'sunsetStart'
        },
        'sunset': {
          'prev': 'between9'
        },
        'between10': {
          'prev': 'sunset'
        },
        'dusk': {
          'prev': 'between11'
        },
        'nauticalDusk': {
          'prev': 'dusk'
        },
        'night': {
          'prev': 'nauticalDusk'
        },
        'between11': {
          'prev': 'night'
        }
      }
  )

  useEffect(() => {
      dispatch({
          type: 'SET_WALLPAPER',
          wallpaper: dayWallpaper
      })
  }, [dayWallpaper]);

  useEffect(() => {
    setTimeout(() => {
      InitSun();
      setInterval(InitSun, 20*6000)
    })
  }, [])

    useEffect(() => {
        dispatch({
            type: 'SET_DAYTIME',
            isDayGlobal: isDay
        })
    }, [isDay])

  const InitSun = () => {
      const d = new Date();
      let now = moment().set({
          'year': d.getFullYear(),
          'month': d.getMonth(),
          'date': d.getDate(),
          'hour': d.getHours(),
          'minute': d.getMinutes()
      })
      /*
      let now = moment().set({
        'year': 2021,
        'month': 3,
        'date': 21,
        'hour': 20,
        'minute': 30
    })
       */
    //let now = moment(new Date(), 'ddd MMM DD YYYY HH:mm')

    now = moment(now, 'ddd MMM DD YYYY HH:mm')
    console.log(now)

    const sunTimes = suncalc.getTimes(now, latitude, longitude)
    console.log(sunTimes)
    const times = (pos) => {
        return moment(sunTimes[pos], 'ddd MMM DD YYYY HH:mm')
    }

    const ranges = [
      moment.range(times('nadir'), moment.range(times('nadir'), times('nightEnd')).center()), //nadir
      moment.range(times('nightEnd'), moment.range(times('nightEnd'), times('nauticalDawn')).center()), //nightEnd
      moment.range(times('nauticalDawn'), moment.range(times('nauticalDawn'), times('dawn')).center()), //nauticalDawn
      moment.range(times('dawn'), moment.range(times('dawn'), times('sunrise')).center()), //dawn
      moment.range(times('sunrise'), moment.range(times('sunrise'), times('sunriseEnd')).center()), //sunrise
      moment.range(times('sunriseEnd'), moment.range(times('sunriseEnd'), times('goldenHourEnd')).center()), //sunriseEnd
      moment.range(times('goldenHourEnd'), moment.range(times('goldenHourEnd'), times('solarNoon')).center()), //goldenHourEnd
      moment.range(times('solarNoon'), moment.range(times('solarNoon'), times('goldenHour')).center()), //solarNoon
      moment.range(times('goldenHour'), moment.range(times('goldenHour'), times('sunsetStart')).center()), //goldenHour
      moment.range(times('sunsetStart'), moment.range(times('sunsetStart'), times('sunset')).center()), //sunsetStart
      moment.range(times('sunset'), moment.range(times('sunset'), times('dusk')).center()), //sunset
      moment.range(times('dusk'), moment.range(times('dusk'), times('nauticalDusk')).center()), //dusk
      moment.range(times('nauticalDusk'), moment.range(times('nauticalDusk'), times('night')).center()), //nauticalDusk
      moment.range(times('night'), times('nadir')), //night
      moment.range(moment.range(times('nadir'), times('nightEnd')).center(), times('nightEnd')), //betweenNadir&NightEnd 1
      moment.range(moment.range(times('nightEnd'), times('dawn')).center(), times('dawn')), //betweenNightEnd&Dawn 2
      moment.range(moment.range(times('dawn'), times('sunrise')).center(), times('sunrise')), //betweenDawn&Sunrise 3
      moment.range(moment.range(times('sunrise'), times('sunriseEnd')).center(), times('sunriseEnd')), //betweenSunrise&SunriseEnd 4
      moment.range(moment.range(times('sunriseEnd'), times('goldenHourEnd')).center(), times('goldenHourEnd')), //betweensunriseEnd&GodlenEnd 5
      moment.range(moment.range(times('goldenHourEnd'), times('solarNoon')).center(), times('solarNoon')), //betweengoldenEnd&Noon 6
      moment.range(moment.range(times('solarNoon'), times('goldenHour')).center(), times('goldenHour')), //betweenNoon&Golden 7
      moment.range(moment.range(times('goldenHour'), times('sunsetStart')).center(), times('sunsetStart')), //betweenGolden&SunsetStart 8
      moment.range(moment.range(times('sunsetStart'), times('sunset')).center(), times('sunset')), //betweenSunsetStart&Sunset 9
      moment.range(moment.range(times('sunset'), times('dusk')).center(), times('dusk')), //betweenSunset&Dusk 10
      moment.range(moment.range(times('night'), times('nadir')).center(), times('nadir')), //betweenNight&Nadir 11
    ];
    for (let i = 0; i < ranges.length; i++) {
      //CHANGE TO SWITCH CASE
      if (now.within(ranges[i])) {
          console.log(i)
          if (i == 0) {
          setSunPosition('nadir');
          setIsDay(0);
          setWaxing('opacity4');
          setWaning('opacity0');
          setWallpaper('night')
        }
          else if (i == 1) {
          setSunPosition('nightEnd');
          setIsDay(0);
          setWaxing('opacity4');
          setWaning('opacity0');
            setWallpaper('night');
            setMoonOpacity('opacity4')
          }
        else if (i == 2) {
          setSunPosition('nauticalDawn');
          setIsDay(0);
          setWaxing('opacity4');
          setWaning('opacity0');
          setWallpaper('dawn');
            setMoonOpacity('opacity3')

        }
      else if (i == 3) {
          setSunPosition('dawn');
          setIsDay(0);
          setWaxing('opacity4');
          setWaning('opacity0');
            setWallpaper('dawn')
            setMoonOpacity('opacity3')

        }
        else if (i == 4) {
          setSunPosition('sunrise');
          setIsDay(1);
          setWaxing('opacity4');
          setWaning('opacity0');
            setWallpaper('sunrise')
            setMoonOpacity('opacity2')


        }
        else if (i == 5) {
          setSunPosition('sunriseEnd');
          setIsDay(1);
          setWaxing('opacity4');
          setWaning('opacity0');
            setWallpaper('sunrise')
            setMoonOpacity('opacity1')

        }
        else if (i == 6) {
          setSunPosition('goldenHourEnd');
          setIsDay(1);
          setWaxing('opacity4');
          setWaning('opacity0');
            setWallpaper('day');
            setMoonOpacity('opacity0')

        }
          else if (i == 7) {
          setSunPosition('solarNoon');
          setIsDay(1);
          setWaxing('opacity4');
          setWaning('opacity0');
            setWallpaper('day');
            setMoonOpacity('opacity0');
        }
      else if (i == 8) {
          setSunPosition('goldenHour');
          setIsDay(1);
          setWaxing('opacity4');
          setWaning('opacity0');
            setWallpaper('day');
            setMoonOpacity('opacity0');
        }
      else if (i == 9) {
          setSunPosition('sunsetStart');
          setIsDay(1);
          setWaxing('opacity4');
          setWaning('opacity0');
            setWallpaper('sunset')
            setMoonOpacity('opacity1');
        }
        else if (i == 10) {
          setSunPosition('sunset');
          setIsDay(1);
          setWaxing('opacity4');
          setWaning('opacity0');
            setWallpaper('sunset');
            setMoonOpacity('opacity2');

        }
        else if (i == 11) {
          setSunPosition('nauticalDusk');
          setIsDay(0);
          setWaxing('opacity4');
          setWaning('opacity0');
            setWallpaper('dusk');
            setMoonOpacity('opacity3');

        }
        else if (i == 12) {
          setSunPosition('dusk');
          setIsDay(0);
          setWaxing('opacity4');
          setWaning('opacity0');
            setWallpaper('dusk');
            setMoonOpacity('opacity3');
        }
        else if (i == 13) {
          setSunPosition('night');
          setIsDay(0);
          setWaxing('opacity4');
          setWaning('opacity0');
            setWallpaper('night');
            setMoonOpacity('opacity4');
        }
        else if (i == 14) {
          setSunPosition('between1');
          setIsDay(0);
          setWaxing('opacity3');
          setWaning('opacity1');
            setWallpaper('night')
            setMoonOpacity('opacity4');
        }
        else if (i == 15) {
          setSunPosition('between2');
          setIsDay(0);
          setWaxing('opacity3');
          setWaning('opacity1');
            setWallpaper('night');
            setMoonOpacity('opacity4');
        }
        else if (i == 16) {
          setSunPosition('between3');
          setIsDay(0);
          setWaxing('opacity3');
          setWaning('opacity1');
            setWallpaper('dawn');
            setMoonOpacity('opacity3');
        }
        else if (i == 17) {
          setSunPosition('between4');
          setIsDay(1);
          setWaxing('opacity3');
          setWaning('opacity1');
            setWallpaper('sunrise');
            setMoonOpacity('opacity2');
        }
        else if (i == 18) {
          setSunPosition('between5');
          setIsDay(1);
          setWaxing('opacity3');
          setWaning('opacity1');
            setWallpaper('day');
            setMoonOpacity('opacity1');
        }
        else if (i == 19) {
          setSunPosition('between6');
          setIsDay(1);
          setWaxing('opacity3');
          setWaning('opacity1');
            setWallpaper('day');
            setMoonOpacity('opacity0');
        }
        else if (i == 20) {
          setSunPosition('between7');
          setIsDay(1);
          setWaxing('opacity3');
          setWaning('opacity1');
            setWallpaper('day');
            setMoonOpacity('opacity0');
        }
        else if (i == 21) {
          setSunPosition('between8');
          setIsDay(1);
          setWaxing('opacity3');
          setWaning('opacity1');
            setWallpaper('sunset');
            setMoonOpacity('opacity1');
        }
        else if (i == 22) {
          setSunPosition('between9');
          setIsDay(1);
          setWaxing('opacity3');
          setWaning('opacity1');
            setWallpaper('sunset');
            setMoonOpacity('opacity2');
        }
        else if (i == 23) {
          setSunPosition('between10');
          setIsDay(0);
          setWaxing('opacity3');
          setWaning('opacity1');
            setWallpaper('sunset');
            setMoonOpacity('opacity3');
        }
        else if (i == 24) {
          setSunPosition('between11');
          setIsDay(0);
          setWaxing('opacity3');
          setWaning('opacity1');
            setWallpaper('night');
            setMoonOpacity('opacity4');
        }
      }
    }
  }

  const CheckSeason = () => {
    if (season == 0) {
      return <div className="houseGround" id="winter"><div className="snowman" /></div>
    } else if (season == 1) {
    return <div className="houseGround" id="spring"><div className="shortGrass"><div className="flowers" /></div></div>
    } else if (season == 2) {
      return <div className="houseGround" id="summer"><div className="tallGrass"><div className="garden" /></div></div>
    } else if (season == 3) {
    return <div className="houseGround" id="fall"><div className="leaves" /></div>
    } else {
      return <div classame="houseGround" />
    }
  }

    const waxOrWane = (current) => {
      if (sunPosition === current) {
        return skyWaxing
      } else {
        if (current === skies[sunPosition]?.prev) {
          return skyWaning
        } else {
          return ''
        }
      }
    }

    const sunOpacities = (sun1, sun2, sun3) => {
      if (sun1.includes(sunPosition)) {
        return 'opacity4'
      } else if (sun2.includes(sunPosition)) {
          return 'opacity2'
        } else if (sun3.includes(sunPosition)) {
            return 'opacity3'
      } else {
        return 'opacity0'
      }
    }
    return(
      <div className={isDay == 1 ? "sky skyDay" : "sky skyNight"}>
        <div id="nauticalDusk" className={`skyComponent ${waxOrWane('nauticalDusk')}`}></div>
        <div id="dusk" className={`skyComponent ${waxOrWane('dusk')}`}></div>
        <div id="night" className={`skyComponent ${waxOrWane('night')}`}><div className="stars" /></div>
        <div id="nadir" className={`skyComponentNadir ${waxOrWane('nadir')}`}><div className="stars" /></div>
        <div id="nightEnd" className={`skyComponent ${waxOrWane('nightEnd')}`}><div className="stars" /></div>
        <div id="nauticalDawn" className={`skyComponent ${waxOrWane('nauticalDawn')}`}></div>
        <div id="dawn" className={`skyComponent ${waxOrWane('dawn')}`}></div>
        <div id="sunrise" className={`skyComponent ${waxOrWane('sunrise')}`} />
          <div id="goldenHour" className={`skyComponent ${waxOrWane('goldenHour')}`} />
          <div id="sunriseEnd" className={`skyComponent ${waxOrWane('sunriseEnd')}`} />
        <div id="noon" className={`skyComponent ${waxOrWane('solarNoon')}`} />
        <div id="goldenHourEnd" className={`skyComponent ${waxOrWane('goldenHourEnd')}`} />
        <div id="sunsetStart" className={`skyComponent ${waxOrWane('sunsetStart')}`} />
        <div id="sunset" className={`skyComponent ${waxOrWane('sunset')}`} />
        <div id="between1" className={`skyComponent ${waxOrWane('between1')}`} />
        <div id="between2" className={`skyComponent ${waxOrWane('between2')}`} />
        <div id="between3" className={`skyComponent ${waxOrWane('between3')}`} />
        <div id="between4" className={`skyComponent ${waxOrWane('between4')}`} />
        <div id="between5" className={`skyComponent ${waxOrWane('between5')}`} />
        <div id="between6" className={`skyComponent ${waxOrWane('between6')}`} />
        <div id="between7" className={`skyComponent ${waxOrWane('between7')}`} />
        <div id="between8" className={`skyComponent ${waxOrWane('between8')}`} />
        <div id="between9" className={`skyComponent ${waxOrWane('between9')}`} />
        <div id="between10" className={`skyComponent ${waxOrWane('between10')}`} />
        <div id="between11" className={`skyComponent ${waxOrWane('between11')}`} />

        <div id="sky" className={sunPosition}>
          <div className="day"></div>
          <div className="Sun">
            <div className={`sunColor ${sunOpacities(['dusk', 'nauticalDusk', 'dawn', 'nauticalDawn'], ['sunsetStart', 'sunriseEnd'], ['between2', 'between10'])}`} id="sunColorDuskDawn" />
            <div className={`sunColor ${sunOpacities(['sunsetStart', 'sunriseEnd'], ['sunrise', 'sunset'], ['between3', 'between9'])}`} id="sunColorSunriseEndSunriseStart" />
            <div className={`sunColor ${sunOpacities(['sunrise', 'sunset'], ['sunsetStart', 'sunriseEnd'], ['between4', 'between8'])}`} id="sunColorSunriseSunset" />
            <div className={`sunColor ${sunOpacities(['goldenHour', 'goldenHourEnd'], ['sunsetStart', 'sunriseEnd'], ['between5', 'between7'])}`} id="sunColorGoldens" />
            <div className={`sunColor ${sunOpacities(['solarNoon'], ['goldenHour', 'goldenHourEnd'], ['between5', 'between6', 'between7'])}`} id="sunNoon" />
          </div>
          <div className={`Moon ${moon} ${moonOpacity}`} />
        </div>
        <div className={isDay == 0 ? "houseContainer houseNight" : "houseContainer"}>
          {CheckSeason()}
        <div className="house" />
        </div>
        {isDay == 0 ? <div className="houseLight">
          <div className="lightYellow hLight" />
          <div className="lightOrange hLight" />
        </div> : null}

      </div>
    )
}
//
/*

*/
