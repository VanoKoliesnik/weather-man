const API_VERSION = "2.5";
const UNITS = "metric";

export const API_URL = `http://api.openweathermap.org/data/${API_VERSION}/weather/?appid=${process.env.API_KEY}&units=${UNITS}`;

export const FETCH_WEATHER_BY_CITY_REQUEST = "FETCH_WEATHER_BY_CITY_REQUEST";
export const FETCH_WEATHER_BY_CITY_SUCCESS = "FETCH_WEATHER_BY_CITY_SUCCESS";
export const FETCH_WEATHER_BY_CITY_FAILURE = "FETCH_WEATHER_BY_CITY_FAILURE";
