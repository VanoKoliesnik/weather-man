import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import Head from "next/head";

import { fetchWeatherByCity } from "../actions/api/weather-actions";
import { IWeather, IWeatherData } from "../types";
import getTitleIconFromCode from "../utilities/get-title-icon";

interface ITitleInfo {
	icon: string;
	temperature: number;
}

interface IProps {
	dispatch: Dispatch<any>;
	weatherData: IWeather;
}

const Index = ({ dispatch, weatherData }: IProps) => {
	const [weather, setWeather] = useState<IWeatherData>();
	const [titleInfo, setTitleInfo] = useState<ITitleInfo>();

	useEffect(() => {
		dispatch(fetchWeatherByCity("Nova Kakhovka"));
	}, []);

	useEffect(() => {
		weatherData.data.length === 0 ? null : setWeather(weatherData.data[0]);
	}, [weatherData]);

	useEffect(() => {
		if (weather) {
			const iconCode = weather.weather[0].id;
			const temperature = weather.main.temp;
			setTitleInfo({
				icon: getTitleIconFromCode(iconCode),
				temperature,
			});
		}
	}, [weather]);

	return (
		<>
			<Head>
				<title>
					WeatherMan{" "}
					{titleInfo
						? `| ${titleInfo.icon} ${Math.round(titleInfo.temperature)} ℃`
						: null}
				</title>
			</Head>

			<div>
				{weatherData.data.map((weather) => `${weather.name} - ${weather.main.temp} ℃`)}
			</div>
		</>
	);
};

export default connect((state) => state)(Index);
