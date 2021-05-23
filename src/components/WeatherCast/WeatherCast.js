
import './WeatherCast.css'
import WeatherItem from './WeatheItem'
import React from "react";


// const currLocation = navigator.geolocation.getCurrentPosition;


function WeatherCast(props) {

  const forecasts = [
        {id: 0, time:'בוקר', minTemp:'20', maxTemp:'30', tempImage:'icon', precipitation:'0%' },
        {id: 1, time:'11:00', minTemp:'21', maxTemp:'29', tempImage:'icon', precipitation:'0%' },
        {id: 2, time:'היום', minTemp:'20', maxTemp:'30', tempImage:'icon', precipitation:'0%' },
        {id: 3, time:'היום', minTemp:'20', maxTemp:'30', tempImage:'icon', precipitation:'0%' },
        {id: 4, time:'היום', minTemp:'20', maxTemp:'30', tempImage:'icon', precipitation:'0%' }
  ]

    return (
        <div className="weather-component">
            <div className="title">
                <h1>{props.option.title}</h1>
            </div>
            <div className="content">
                {props.dailyForecasts.map((forecast,i) => <WeatherItem key={i} forecast={forecast} />)}
            </div>
        </div>
    )
};


export default WeatherCast;