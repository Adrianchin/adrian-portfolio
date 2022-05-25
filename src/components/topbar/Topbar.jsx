import React from 'react';
import "./topbar.scss";

function Topbar(props) {
    const menuOpen = props.menuOpen;
    const setMenuOpen = props.setMenuOpen;
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Adrian</a>
                <div className="itemContainer">
                    <div className="icon"/>
                    <span>
                        mr.adrian.chin@gmail.com
                    </span>
                </div>
            </div>
            <div className="right">
             <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                 <span className="line1"></span>
                 <span className="line2"></span>
                 <span className="line3"></span>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar