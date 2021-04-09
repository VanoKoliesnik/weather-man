import { AnyAction } from "redux";

import { IWeatherData } from "../../types";
import { FETCH_WEATHER_BY_CITY_REQUEST } from "../../utilities/constants";

interface IWeatherState {
	data: IWeatherData | null;
}

const initialState = {
	data: null,
};

export default function reducer(state: IWeatherState = initialState, action: AnyAction) {
	switch (action.type) {
		case FETCH_WEATHER_BY_CITY_REQUEST:
			return { ...state, data: action.payload };

		default:
			return state;
	}
}
