import React from 'react'

//Cloud modes
import CloudsCloudy from './Clouds/CloudsCloudy'
import PartlyCloudy from './Clouds/PartlyCloudy'
import Overcast from './Clouds/Overcast'
import WindyClouds from './Clouds/WindyClouds'
//Snow modes
import LightSnow from './Snow/LightSnow'
import MedSnow from './Snow/MedSnow'
import HeavySnow from './Snow/HeavySnow'
import Blizzard from './Snow/Blizzard'

//Rain modes
import LightRain from './Rain/LightRain'
import MedRain from './Rain/MedRain'
import HeavyRain from './Rain/HeavyRain'
import TorrRain from './Rain/TorrRain'

//Storm modes
import Lightning from './Thunderstorm/Lightning'

import Fog from './Mist&Fog/Fog'
import Mist from './Mist&Fog/Mist'

export default class CloudsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isday: this.props.isday,
      code: this.props.code
    }
  }
  render() {
    return(
      {switch (this.state.currentData.condition.code) {
        case 1003:
          return <PartlyCloudy />

        case 1006:
          return <CloudsCloudy />

        case 1009:
          return <Overcast />

        case 1030:
          return <Mist />;
        case 1063:
          return <LightRain />;

        case 1066:
          return <LightSnow />;

        case 1069:
          return(<LightRain /><LightSnow />);

        case 1072:
          return <LightRain />;

        case 1087:
          return <Lightning />;

        case 1114:
          return <MedSnow />;

        case 1117:
          return <Blizzard />;

        case 1135:
          return <Fog />;

        case 1147:
          return <Fog />;

        case 1150:
          return <LightRain />;

        case 1153:
          return <LightRain />

        case 1168:
          return <LightRain />

        case 1171:
          return <HeavyRain />

        case 1180:
        return <LightRain />

        case 1183:
          return <LightRain />

        case 1186:
          return <MedRain />

        case 1189:
          return <MedRain />

        case 1192:
          return <HeavyRain />

        case 1195:
          return <HeavyRain />

        case 1198:
          return <LightRain />

        case 1201:
          return <MedRain />

        case 1204:
          return <LightRain />

        case 1207:
          return <MedRain />

        case 1210:
          return <LightSnow />

        case 1213:
          return <LightSnow />

        case 1216:
          return <MedSnow />

        case 1219:
          return <MedSnow />

        case 1222:
          return <HeavySnow />

        case 1225:
          return <HeavySnow />

        case 1237:
          return <LightSnow />

        case 1240:
          return <LightRain />

        case 1243:
          return <MedRain />

      }}
    )
  }
}
