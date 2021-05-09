import "./WeatherItem.css";

function WeatherItem({forecast}) {

    return (
        <div className="weather-item">
            {/* {JSON.stringify(forecast)} */}
            <div className="time">{forecast.time}</div>
            <div className="max-temp">{forecast.maxTemp}</div>
            <div className="min-temp">{forecast.minTemp}</div>
            <div className="temp-image">{forecast.tempImage}</div>
            <div className="precipitation">{forecast.precipitation}</div>
        </div>
    );
}

export default WeatherItem;