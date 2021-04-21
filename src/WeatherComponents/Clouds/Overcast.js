import React from 'react'
import './Overcast.css'
import CloudsCloudy from './CloudsCloudy'
export default function Overcast(props) {
  return(
    <div className="cloudsContainerOvercast">
      <div className={props.isDay == 0 ? "cloudOvercast cloud cloudNight" : "cloudOvercast cloud"}></div>
      <div className={props.isDay == 0 ? "cloudOvercast cloud cloudNight" : "cloudOvercast cloud"}></div>
      <div className={props.isDay == 0 ? "cloudOvercast cloud cloudNight" : "cloudOvercast cloud"}></div>
      <div className={props.isDay == 0 ? "cloudOvercast cloud cloudNight" : "cloudOvercast cloud"}></div>
      <div className={props.isDay == 0 ? "cloudOvercast cloud cloudNight" : "cloudOvercast cloud"}></div>
      <div className={props.isDay == 0 ? "cloudOvercast cloud cloudNight" : "cloudOvercast cloud"}></div>
      <div className={props.isDay == 0 ? "cloudOvercast cloud cloudNight" : "cloudOvercast cloud"}></div>
      <div className={props.isDay == 0 ? "cloudOvercast cloud cloudNight" : "cloudOvercast cloud"}></div>
      <div className={props.isDay == 0 ? "cloudOvercast cloud cloudNight" : "cloudOvercast cloud"}></div>
      <div className={props.isDay == 0 ? "cloudOvercast cloud cloudNight" : "cloudOvercast cloud"}></div>
      </div>
  )
}
