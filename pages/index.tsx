import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import Head from "next/head";
import { fetchWeatherByCity } from "../actions/api/weather-actions";
import { IWeather } from "../types";

interface IProps {
	dispatch: Dispatch<any>;
	weatherData: IWeather;
}

const Index = ({ dispatch, weatherData }: IProps) => {
	useEffect(() => {
		dispatch(fetchWeatherByCity("Nova Kakhovka"));
	}, []);

	return (
		<>
			<Head>
				<title>WeatherMen | ☀</title>
			</Head>

			<div>
				{weatherData.data.map((weather) => `${weather.name} - ${weather.main.temp} ℃`)}
			</div>
		</>
	);
};

export default connect((state) => state)(Index);
