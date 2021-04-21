import React from 'react'
import './Blizzard.css'
export default class Blizzard extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    function getRandom(min, max) {
      return Math.random() * (max - min + 1) ;
    }
    const snowCanvas = document.getElementById('snowflakesBlizzard');
    const ctx = snowCanvas.getContext('2d');
    const snowflakes = 400;
    const snowArray = [];
    let w, h;
    w = snowCanvas.width = window.innerWidth;
    h = snowCanvas.height = window.innerHeight;

    function createSnowflakes() {
      for(let i = 1; i < snowflakes; i++) {
        snowArray.push({
          /*x: (Math.random() * w) * 2,
          y: (Math.random() * h) * 2,*/
          x: Math.random() * w,
          y: Math.random() * h,
          opacity: Math.random(),
          speedX: getRandom(6, 15),
          speedY: getRandom(20, 50),
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
        gradient.addColorStop(1, `rgba(255,255,255,${snowArray[i].opacity})`);
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
    //window.requestAnimationFrame(updateSnowfall);
    createSnowflakes();
  }
  render() {
    return(
      <div className="BlizzardContainer">
        <canvas id="snowflakesBlizzard"></canvas>
        <div className="BlurBlizzard"></div>
      </div>
    )
  }
}
