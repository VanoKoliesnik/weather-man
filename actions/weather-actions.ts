import axios from "axios";
import { Dispatch } from "redux";

import { API_URL, FETCH_WEATHER_BY_CITY_REQUEST } from "../utilities/constants";

export const fetchWeatherByCity = (cityName: string) => (dispatch: Dispatch) => {
	axios
		.get(`${API_URL}&q=${cityName}`)
		.then((response) => {
			dispatch({ type: FETCH_WEATHER_BY_CITY_REQUEST, payload: response.data });
		})
		.catch((error) => console.error(error));
};
