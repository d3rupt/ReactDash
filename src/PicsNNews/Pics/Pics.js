import React from 'react'
import picOne from './1.jpg'
import picTwo from './2.jpg'
import picThree from './3.jpg'
import picFour from './4.jpg'
import picFive from './5.jpg'
import picSix from './6.jpg'
import picSeven from './7.jpg'
import picEight from './8.jpg'
import picNine from './9.jpg'
import picTen from './10.jpg'
import picEleven from './11.jpg'
import picTwelve from './12.jpg'
import picThirteen from './13.jpg'
import picFourteen from './14.jpg'
import picFifteen from './15.jpg'
import picSixteen from './16.jpg'
import picSeventeen from './17.jpg'
import picEighteen from './18.jpg'
import picNineteen from './19.jpg'
import picTwenty from './20.jpg'
import picTwentyone from './21.jpg'
import picTwentytwo from './22.jpg'
import picTwentythree from './23.jpg'
import picTwentyfour from './24.jpg'
import picTwentyfive from './25.jpg'
import picTwentysix from './26.jpg'
import picTwentyseven from './27.jpg'
import picTwentyeight from './28.jpg'



import ('./Pics.css')

export default class Pics extends React.Component {
  constructor(props) {
    super(props)
    //this.PicChooser = this.PicChooser.bind(this)
    this.state = {
      pics: null,
      picNumber: 4,
      hasPics: false
    }
  }

  componentDidUpdate() {
    setTimeout(this.PicChooser, 60000 * 5)
}

  componentDidMount() {
    if (this.state.hasPics) {
      this.PicChooser()
    } else {
      return
    }
  }

  /*PicChooser() {
    let picNodes = document.querySelectorAll('.picContainer')
      picNodes.forEach(pic => {
        pic.classList.add('opacity0')
      })
    picNodes[this.state.picNumber].classList.remove('opacity0')
    if (this.state.picNumber < picNodes.length - 1) {
      this.setState({
        picNumber: this.state.picNumber + 1
      })
    } else {
      this.setState({
        picNumber: 0
      })
    }
}*/

  render() {
    return(
        <div className="Pics" >
        {this.state.hasPics ?
<>
          <div className="picContainer" style={{backgroundImage: `url('${picOne}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picTwo}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picThree}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picFour}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picFive}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picSix}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picSeven}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picEight}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picNine}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picTen}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picEleven}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picTwelve}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picThirteen}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picFourteen}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picFifteen}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picSixteen}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picSeventeen}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picEighteen}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picNineteen}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picTwenty}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picTwentyone}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picTwentytwo}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picTwentythree}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picTwentyfour}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picTwentyfive}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picTwentysix}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picTwentyseven}')`}}></div>
          <div className="picContainer" style={{backgroundImage: `url('${picTwentyeight}')`}}></div>
</>
        :
          <p> Add pics to the Pics folder & follow the naming conventions to import your own images</p>
          }
</div>

    )
  }
}
