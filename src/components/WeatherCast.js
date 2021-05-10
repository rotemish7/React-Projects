import './WeatherCast.css'
import WeatherItem from './WeatheItem'
import { useState } from 'react';

function WeatherCast({option}) {

  const forecasts = [
        {id: 1, time:'בוקר', minTemp:'20', maxTemp:'30', tempImage:'icon', precipitation:'0%' },
        {id: 2, time:'11:00', minTemp:'21', maxTemp:'29', tempImage:'icon', precipitation:'0%' },
        {id: 3, time:'היום', minTemp:'20', maxTemp:'30', tempImage:'icon', precipitation:'0%' },
        {id: 4, time:'היום', minTemp:'20', maxTemp:'30', tempImage:'icon', precipitation:'0%' },
        {id: 5, time:'היום', minTemp:'20', maxTemp:'30', tempImage:'icon', precipitation:'0%' }
  ]

    return (
        <div className="weather-component">
            <div className="title">
                <h1>{option.title}</h1>
            </div>
            <div className="content">
                {forecasts.map(forecast => <WeatherItem key={forecast.id} forecast={forecast} />)}
                {/* {(() => {
                    if(option.type === 'daily') return <p>smile</p>
                    if(option.type === 'hourly') return <p>sad</p>
                    return <p>weekly face</p>

                })()} */}
            </div>
        </div>
    )
};


export default WeatherCast;