import { AnyAction } from "redux";

import { IWeatherData, Loading } from "../../types";
import {
	FETCH_WEATHER_BY_CITY_REQUEST,
	FETCH_WEATHER_BY_CITY_SUCCESS,
	FETCH_WEATHER_BY_CITY_FAILURE,
} from "../../utilities/action-types";

interface IWeatherState {
	data: IWeatherData[];
	loading: Loading;
	errors: Error[];
}

const initialState: IWeatherState = {
	data: [],
	loading: 0,
	errors: [],
};

export default function reducer(state: IWeatherState = initialState, action: AnyAction) {
	switch (action.type) {
		case FETCH_WEATHER_BY_CITY_REQUEST:
			return {
				...state,
				loading: state.loading + 1,
			};

		case FETCH_WEATHER_BY_CITY_SUCCESS:
			return {
				...state,
				data: [...state.data, action.payload],
				loading: state.loading - 1,
			};

		case FETCH_WEATHER_BY_CITY_FAILURE:
			return {
				...state,
				data: initialState.data,
				loading: state.loading - 1,
				errors: [...state.errors, action.payload],
			};

		default:
			return state;
	}
}
