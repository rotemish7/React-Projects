import { useEffect, useState } from 'react';
import './Home.css'
import WeatherCast from '../WeatherCast/WeatherCast'
import { weatherAPI } from '../WeatherAPI/WeatherAPI';

function Home() {

    const initialState = [
        {id: 1, title:'התחזית של היום ',type:'daily'},
        {id: 2, title:'תחזית שעתית', type: 'hourly'},
        {id: 3, title:'תחזית יומית', type: 'weekly'}
    ]

    const[data,setData] = useState([]);
    const [key, setKey] = useState(null);
    const [lat, setLat] = useState(null);
    const [long,setLong] = useState(null);
    const[loc,setLocation] = useState({lat,long});

    async function getLocation() {
       navigator.geolocation.getCurrentPosition(function (position) {
            console.log('geolocation');
            const lat = position.coords.latitude
            const long = position.coords.longitude
            setLat(lat)
            setLong(long)
            setLocation({lat,long});
        }, function (e) {
            setLat(31.748915199999995)
            setLong(34.701312)
            setLocation(31.748915199999995, 34.701312);
            console.log('Error');
            console.log(e);
        }, {
            enableHighAccuracy: true
        });
    }
    
    useEffect (() => {    
        const fetchData = async() => {
            try {
                getLocation();
            } catch (error){throw error}
        }
        fetchData();
    },[]);

    useEffect (() => {    
        console.log('location',loc)
        const fetchData = async() => {
            if(loc.lat !== null){
                try {
                    console.log("location",loc)     
                    const id = await weatherAPI.getCity(loc);
                    console.log("id",id)
                    setKey(id);
                    console.log("KEY:",key);
                    const forecast = await weatherAPI.get5DayForecast(id);
                    setData(forecast);
                } catch (error){throw error}
            }        
        }
        fetchData();
    },[loc]);

    console.log('data:',data["dailyForecasts"])
    console.log("KEY:",key);

    const [options,setOptions] = useState(initialState)

    return (

        <div className="home-page">
            <div className="weather">
                {data["dailyForecasts"] && options && options.map(option => <WeatherCast key={option.id} option={option} dailyForecasts={data["dailyForecasts"]} />)}
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