import axios from 'axios';

const API_KEY = '6fb8da3cb8ae0c2ffd7caea52ed4c75a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  // This returns a promise.
  const request = axios.get(url);

  //console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
