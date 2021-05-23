import "./WeatherItem.css";
// import moment from 'moment'
function WeatherItem({forecast}) {
    const date = new Date(forecast.Date);

    return (
        <div className="weather-item">
            {/* {JSON.stringify(forecast)} */}
            <div className="time">{forecast.Date}</div>
            <div className="max-temp">{forecast.Temperature.Maximum.Value}</div>
            <div className="min-temp">{forecast.Temperature.Minimum.Value}</div>
            <div className="temp-image">{forecast.tempImage}</div>
            <div className="precipitation">{forecast.precipitation}</div>
        </div>
    );
}

export default WeatherItem;