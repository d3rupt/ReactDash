import React from 'react'
import './BlowingSnowIdle.css'

export default class BlowingSnowIdle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        isLoading: true
      })
    }, 30000)
  }

  componentDidMount() {
    /*function getRandom(min, max) {
      return Math.random() * (max - min + 1) ;
    }
    const snowCanvas = document.getElementById('snowflakesLight');
    const ctx = snowCanvas.getContext('2d');
    const snowflakes = 50;
    const snowArray = [];
    let w, h;
    w = snowCanvas.width = window.innerWidth;
    h = snowCanvas.height = window.innerHeight;

    function createSnowflakes() {
      for(let i = 1; i < snowflakes; i++) {
        snowArray.push({
          /*x: (Math.random() * w) * 2,
          y: (Math.random() * h) * 2,
          x: Math.random() * w,
          y: Math.random() * h,
          opacity: Math.random(),
          speedX: getRandom(0, 2.5),
          speedY: getRandom(20, 25),
          radius: getRandom(10, 15)
        })
      }
    }

    function drawSnowflakes() {
      for(let i = 0; i < snowArray.length; i++) {
        const gradient = ctx.createRadialGradient(
          snowArray[i].x,
          snowArray[i].y,
          0,
          snowArray[i].x,
          snowArray[i].y,
          snowArray[i].radius
        );
        gradient.addColorStop(0, `rgba(255,255,255,${snowArray[i].opacity})`);
        gradient.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.beginPath();
        ctx.arc(
          snowArray[i].x,
          snowArray[i].y,
          snowArray[i].radius,
          0,
          Math.PI*2,
          false
        );
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    function moveSnowflakes() {
      for (let i = 0; i < snowArray.length; i++) {
        snowArray[i].x += snowArray[i].speedX;
        snowArray[i].y += snowArray[i].speedY

        if (snowArray[i].y > h) {
          snowArray[i].x = Math.random() * w * 1.5;
          snowArray[i].y = -50;
        }
      }
    }

    function updateSnowfall() {
      ctx.clearRect(0 ,0, w, h);
      drawSnowflakes();
      moveSnowflakes();
    }

    setInterval(updateSnowfall, 50);
    createSnowflakes();*/
  }
  render() {
    return(
    <div className="blowingSnowContainerIdle">
    {this.state.isLoading ?
      <><div className="bigSnowIdle"></div>
      <div className="blowingSnowBackgroundIdle">
        <div className="blowingSnowflakeBIdle"></div>
        <div className="blowingSnowflakeBIdle"></div>
        <div className="blowingSnowflakeBIdle"></div>
        <div className="blowingSnowflakeBIdle"></div>
        <div className="blowingSnowflakeBIdle"></div>
        <div className="blowingSnowflakeBIdle"></div>
        <div className="blowingSnowflakeBIdle"></div>
        <div className="blowingSnowflakeBIdle"></div>
        <div className="blowingSnowflakeBIdle"></div>
        <div className="blowingSnowflakeBIdle"></div>
      </div>
      <div className="blowingSnowMiddleIdle">
        <div className="blowingSnowflakeMIdle"></div>
        <div className="blowingSnowflakeMIdle"></div>
        <div className="blowingSnowflakeMIdle"></div>
        <div className="blowingSnowflakeMIdle"></div>
        <div className="blowingSnowflakeMIdle"></div>
        <div className="blowingSnowflakeMIdle"></div>
        <div className="blowingSnowflakeMIdle"></div>
        <div className="blowingSnowflakeMIdle"></div>
        <div className="blowingSnowflakeMIdle"></div>
        <div className="blowingSnowflakeMIdle"></div>
      </div>
      <div className="blowingSnowForegroundIdle">
        <div className="blowingSnowflakeFIdle"></div>
        <div className="blowingSnowflakeFIdle"></div>
        <div className="blowingSnowflakeFIdle"></div>
        <div className="blowingSnowflakeFIdle"></div>
        <div className="blowingSnowflakeFIdle"></div>
        <div className="blowingSnowflakeFIdle"></div>
        <div className="blowingSnowflakeFIdle"></div>
        <div className="blowingSnowflakeFIdle"></div>
        <div className="blowingSnowflakeFIdle"></div>
      </div></> : null}
  </div>
  )
  }

}
