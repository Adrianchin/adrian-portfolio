import React from 'react';
import "./topbar.scss";

function Topbar(props) {
    const menuOpen = props.menuOpen;
    const setMenuOpen = props.setMenuOpen;

    const openInNewTab = (url) => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
      };

  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Adrian</a>
                <div className="itemContainer">
                    <div className="icon"/>
                    <span>
                        <h2 onClick={() => openInNewTab("https://drive.google.com/file/d/1mdTgr2t_wOEFoSrkXML-HPgfPJhJ2ctl/view?usp=sharing")}>My Resume</h2>
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