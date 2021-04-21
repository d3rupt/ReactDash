import React from 'react'
import './PartlyCloudy.css'
export default class PartlyCloudy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
  }

  render() {

   return(
     <div id="clouds">
    <div className="cloudsContainerPartly">
      <div className={this.props.isDay === 0 ? "cloudPartly cloud cloudNight" : "cloudPartly cloud"}></div>
      <div className={this.props.isDay === 0 ? "cloudPartly cloud cloudNight" : "cloudPartly cloud"}></div>
      <div className={this.props.isDay === 0 ? "cloudPartly cloud cloudNight" : "cloudPartly cloud"}></div>
      <div className={this.props.isDay === 0 ? "cloudPartly cloud cloudNight" : "cloudPartly cloud"}></div>
      <div className={this.props.isDay === 0 ? "cloudPartly cloud cloudNight" : "cloudPartly cloud"}></div>
      <div className={this.props.isDay === 0 ? "cloudPartly cloud cloudNight" : "cloudPartly cloud"}></div>
      <div className={this.props.isDay === 0 ? "cloudPartly cloud cloudNight" : "cloudPartly cloud"}></div>
      <div className={this.props.isDay === 0 ? "cloudPartly cloud cloudNight" : "cloudPartly cloud"}></div>
      <div className={this.props.isDay === 0 ? "cloudPartly cloud cloudNight" : "cloudPartly cloud"}></div>
      <div className={this.props.isDay === 0 ? "cloudPartly cloud cloudNight" : "cloudPartly cloud"}></div>
    </div>
    </div>
  )
}
}
