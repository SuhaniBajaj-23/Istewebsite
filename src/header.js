import React from 'react';
import './header.css';
import start from './start.png'


function Header() {
    return (
        <div className= "Head">
            <div className="lcon">
         <div className="headtxt">Play With Fun Of <br /> Coding</div>
         <div className="headcon">We are team of motivated students pludged to promote
technology growth across the world</div>
         <button className="headbtn"><span> Know More  </span></button>
        </div>
        <div className="start">
          <img src={start} alt="" srcset="" className="headimg"/>
          <button className="headbtn bt"><span> GET STARTED  </span></button>
        </div>
        </div>
    )
}

export default Header
