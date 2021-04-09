import { combineReducers } from "redux";

import { default as weatherReducer } from "./api/weather-reducer";

export const reducer = combineReducers({ weatherData: weatherReducer });
