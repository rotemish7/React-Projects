import { useEffect, useState } from 'react';
import './Home.css'
import WeatherCast from './WeatherCast.js'
//import WeatherItem from './WeatherItem'


function Home() {

    const initialState = [
        {id: 1, title:'התחזית של היום ',type:'daily'},
        {id: 2, title:'תחזית שעתית', type: 'hourly'},
        {id: 3, title:'תחזית יומית', type: 'weekly'}
    ]

    useEffect(() => {
        //api request to fetch the data
        ///change the theme based on the first call
    },[])
    const [options,setOptions] = useState(initialState)

    return (
        <div className="home-page">
            <div className="weather">
                {options && options.map(option => <WeatherCast key={option.id} option={option} />)}
            </div>
        </div>
    );
}

export default Home;


// async function getWeatherDetails() {
//     const res = await Promise.all([dispatch(getLoc),dispatch(getForecast)])
//     return {
//         locData: res[0],
//         forecastDat: res[1]
//     }
// }