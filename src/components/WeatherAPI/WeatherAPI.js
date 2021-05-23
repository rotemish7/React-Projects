import axios from 'axios';
const API_KEY = 'd9q8AMBCJgUllrPFgnykyrNKCdCJ40a4';
// const API_HOST = 'http://dataservice.accuweather.com/';
// const API_VERSION = 'v1';


export async function getLocation() {
  navigator.geolocation.getCurrentPosition(handleSuccess,handleError);
}

const handleSuccess = (position) => {
  const {latitude, longitude} = position.coords;
  // console.log("latitude: ",latitude)
  // console.log("longitude: ",longitude)
  return {
    latitude,
    longitude
  };
};

const handleError = error => {
  const latitude = 31.748915199999995
  const longitude = 34.701312
  console.log(error)
 return {
   latitude,
   longitude
 };
};

export async function getCity(location) {
  const latitude = location.lat
  const longitude = location.long
  // console.log('lat',latitude)
  // console.log('long',longitude)
  try {
      const res = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude},${longitude}`);
      return res.data.Key;
    } catch (error){
      throw error;
  }
}


export async function get5DayForecast(city_id) {

  try {
      const response = await axios.get( `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${city_id}?apikey=${API_KEY}&metric=true`)
      const {Headline,DailyForecasts: dailyForecasts} = response.data;
      const {Text: text,Severity: sevirity,EffectiveDate: effectiveDate} = Headline;
      return {
        text,
        sevirity,
        effectiveDate,
        dailyForecasts
      }     
  } catch (error) {
      throw error;
  }
}

export const weatherAPI = {
  get5DayForecast,
  getCity,
  getLocation
}