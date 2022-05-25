import React, {useEffect, useRef} from 'react'
import "./intro.scss"
import {init} from "ityped"

function Intro() {

  const textRef = useRef(); //used to select span

  useEffect(()=>{
    init(textRef.current, {
      showCursor:true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Engineer", "Triathlete"],
    });
  },[]);

  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imageContainer">
            <img src="assets/me_sexy-black.jpg" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi there, I'm</h2>
            <h1>Adrian Chin</h1>
            <h3>
              I am a <span ref={textRef}></span>
            </h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
    </div>
  )
}

export default Intro