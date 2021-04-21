import React from 'react'
import './WeatherTile.css';

export default class WeatherTile extends React.Component {
  constructor(props) {
    super(props)
    this.tileBackground = this.tileBackground.bind(this)
    this.state = {
      isLoading: false,
      isDay: this.props.isDay
    }
  }

  tileBackground() {
    const rainCodes = [1063,1072,1153,1180,1183,1186,1189,1192,1195,1198,1201,1204,1207,1240,1243,1246,1273,1276];
    const snowCodes = [1066,1069,1114,1117,1168,1171,1210,1213,1216,1219,1222,1225,1237];
    if (rainCodes.includes(this.props.code)) {
      return <div className="tileBackground tileRain" />
    } else if (snowCodes.includes(this.props.code) || Math.sign(parseInt('10')) === -1) {
    //} else if (snowCodes.includes(this.props.code) || Math.sign(parseInt(this.props.today)) === -1) {
      return <div className="tileBackground tileSnow" />
    } else {
      return <div className="tileBackground" />
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.code !== this.props.code) {

    }
  }
  componentDidMount(props) {
    //this.NightTileChecker()
  }
  render(props) {
    //tile background weather

    let weather;
    this.props.today ? weather = <p className="tempNow">{this.props.today}</p> : weather = <p className="tempFC">{this.props.high} / {this.props.low}</p>

    return(
      <div className={this.props.isDay === 0 ? 'tile tileNight' : 'tile'}>
          {this.tileBackground()}
          <p className="tileDate">{this.props.date}</p>
          {weather}
          <p id="tileCondition">{this.props.condition}</p>
          {this.props.icicles? <div className='icicles'></div> : null}
      </div>
    )
  }
}
//        <img src={this.props.icon} alt='blak'/>
