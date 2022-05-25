import React from 'react'
import "./portfolioList.scss"

function PortfolioList(props) {
    const title=props.title;
    const active = props.active;
    const setSelected = props.setSelected;
    const id = props.id;

  return (
    <li 
    className={active ? "portfolioList active" : "portfolioList"} 
    onClick={()=>setSelected(id)}>
        {title}
    </li>
  )
}

export default PortfolioList