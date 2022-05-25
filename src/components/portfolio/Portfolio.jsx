import React, {useState, useEffect} from 'react'
import "./portfolio.scss"
import PortfolioList from './portfolioList/PortfolioList'
import {
  myStack,
  myPlatforms,
  aiandml,
  me,
} from "../../data.js"


function Portfolio() {
  const [selected, setSelected] = useState("myStack");
  const [data, setData] = useState([])
  const list = [
    {
      id:"myStack",
      title:"Web App Stack",
    },
    {
      id:"myPlatforms",
      title:"ML & AI Tools",
    },
    {
      id:"aiandml",
      title:"Ai & ML Projects",
    },
    /*{
      id:"me",
      title:"Me",
    },*/
  ]
  
useEffect(()=>{
  switch(selected){
    case "myStack":
      setData(myStack);
      break;
    case "myPlatforms":
      setData(myPlatforms);
      break;
    case "aiandml":
      setData(aiandml);
      break;
    /*case "me":
      setData(me);
      break;*/
    default:
      setData(myStack)
  }
},[selected])

  return (
    <div className="portfolio" id="portfolio">
        <h1>About Me</h1>
        <ul>
          {list.map((item)=>(
            <PortfolioList 
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            key={item.id}
            />
          ))}
        </ul>
        <div className="container">
          {data.map((data)=> (
          <div className="item" key={data.id}>
            <img 
            src={data.img} 
            alt=""/>
            <h3>{data.title}</h3>
          </div>
          ))}
        </div>
    </div>
  )
}

export default Portfolio