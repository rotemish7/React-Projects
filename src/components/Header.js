import { useState } from "react";
import "./Header.css";


import logo from '../assets/logo.png'
import search from '../assets/search-icon.png'

function Header() {

 //show temperatures in the correct value
  const[temp,setTemp] = useState('°C');
  const tempClick = () => {
    if (temp === "°C") setTemp('°F');
    else  setTemp('°C');
  }

//swaping between english and hebrew
    const[lang,setLang] = useState('IL');
    const langClick = () => {
      if (lang === "IL") setLang('EN');
      else  setLang('IL');

  }

  return (
    <div className="header">
      <div className="nav-bar">
        <div className="nav-bar__icons">
          <div className="weather-logo">
            <img
              src={logo}
              alt="logo"
            ></img>
          </div>
          <input
            onClick={langClick}
            type="button"
            value={lang}
            className="language"
          ></input>
          <input
            onClick={tempClick}
            type="button"
            value={temp}
            className="temperature"
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
