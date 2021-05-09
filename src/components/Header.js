import { useState } from "react";
import "./Header.css";


import logo from '../assets/logo.png'
import search from '../assets/search-icon.png'

function Header() {

  const[temp,setTemp] = useState('°C');
  const tempClick = () => {
    if (temp === "°C") setTemp('°F');
    else  setTemp('°C');
    //show temperatures in the correct value
  }

  return (
    <div className="header">
      <div className="nav-bar">
        <div className="logo-and-temp">
          <div className="weather-logo">
            <img
              className="temperature"
              src={logo}
              alt="logo"
            ></img>
          </div>
          <input
            onClick={tempClick}
            type="button"
            value={temp}
            id="temperature"
          ></input>
        </div>
        <div className="search-bar">
          <div className="search-content">
          <form>
            <label><img src={search} alt="search"></img></label>
            <input placeholder="Search Place" type="text" required></input>
          </form>
          </div>
        </div>
      </div>
      <div className="favourites">
    
      </div>
      <div className="broadcast-bar">
        <ul className="broadcast-tabs">
          <li>היום</li>
          <li>שעתי</li>
          <li>ימים 10</li>
          <li>סופ"ש</li>
          <li>חודשי</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
