import axios from "axios";
import { Dispatch } from "redux";

import {
	FETCH_WEATHER_BY_CITY_REQUEST,
	FETCH_WEATHER_BY_CITY_SUCCESS,
	FETCH_WEATHER_BY_CITY_FAILURE,
} from "../../utilities/action-types";

export const fetchWeatherByCity = (cityName: string) => (dispatch: Dispatch) => {
	dispatch({ type: FETCH_WEATHER_BY_CITY_REQUEST });
	axios
		.get(`/api/weather?city=${cityName}`)
		.then((response) => {
			dispatch({ type: FETCH_WEATHER_BY_CITY_SUCCESS, payload: response.data });
		})
		.catch((error) => {
			dispatch({ type: FETCH_WEATHER_BY_CITY_FAILURE, payload: error });
		});
};
