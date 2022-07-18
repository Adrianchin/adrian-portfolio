import React, {useState} from 'react'
import "./works.scss"

function Works() {
  const [currentSlider, setCurrentSlider] = useState(0)
  const data=[
    {
      id: "1",
      title: "Login - Username: Guest - Password: Guest",
      desc:
        `Full Stack AI and ML Application: Optical Character Recognition (OCR) Machine Translation (MTL) and Natural Language Processing (NLP) for Japanese.`,
      img:
        "./assets/projects/image-to-text.png",
      link:
        `http://35.233.167.60:3000/`,
    },
    {
      id: "2",
      title: "A Full Stack Al and ML E-commerce Smart Glasses Application.",
      desc:
        `Uses Convolutional Neural Networks to Predict Glasses for Customers. Calculations and Algorithms are Tested with High Coverage`,
      img:
        "./assets/projects/facemesh.png",
      link:
        `https://smart-glasses-client.herokuapp.com/`,
    },
    {
      id: "3",
      title: "My Github",
      desc:
        "Roll over to my Github and see what I'm currently working on!",
      img:
        "./assets/me_ride.jpg",
      link:
      `https://github.com/Adrianchin`,
    },
  ]

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const handleClick = (event)=>{
    event === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider-1 : 1) : setCurrentSlider(currentSlider < data.length-1 ?currentSlider+1 : 0)
  }//If click left and current slider is less than 0, then move to #2. Else, minus 1. Else (right click) if current slider is less than data.length, +1. Else, = 0 (max, go back to 0)

  return (
    <div className="works" id="works">
        <div className="slider" style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
          {data.map((data)=> (
          <div className='container' key={data.id}>
            <div className="item" onClick={() => openInNewTab(data.link)}>
              <div className="top">
                <img
                src={data.img}
                alt=""
                key={data.id}
                />
              </div>
              <div className="bottom">
                <div className="bottomContainer">
                <span>Projects</span>
                <h2>{data.title}</h2>
                <p>{data.desc}</p>
                </div>
              </div>
            </div>
          </div>))}
        </div>
        <img src="assets/arrow.png" className="arrow left" alt=""  onClick={()=>handleClick("left")}/>
        <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
    </div>
  )
}

export default Works