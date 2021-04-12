import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import Head from "next/head";

import { fetchWeatherByCity } from "../actions/api/weather-actions";
import { IWeather, IWeatherData } from "../types";
import getEmojiFromCode from "../utilities/get-emoji-from-code";

import Header from "../components/header";
import MainInfo from "../components/main-info";

type WeatherIcon = string;

interface ITitleInfo {
	icon: WeatherIcon;
	temperature: number;
}

interface IProps {
	dispatch: Dispatch<any>;
	weatherData: IWeather;
}

const Index = ({ dispatch, weatherData }: IProps) => {
	const [weather, setWeather] = useState<IWeatherData>();
	const [titleInfo, setTitleInfo] = useState<ITitleInfo>();
	const [weatherIcon, setWeatherIcon] = useState<WeatherIcon>();

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
			const weatherIcon = getEmojiFromCode(iconCode);

			setTitleInfo({
				icon: weatherIcon,
				temperature,
			});
			setWeatherIcon(weatherIcon);
		}
	}, [weather]);

	return (
		<>
			<Head>
				<title>
					WeatherMan{" "}
					{titleInfo
						? `| ${titleInfo.icon} ${titleInfo.temperature} ℃`
						: null}
				</title>
			</Head>

			<main>
				{weather ? (
					<>
						<Header cityName={weather.name} />
						<MainInfo
							icon={weatherIcon}
							description={weather.weather[0].description}
							temp={weather.main.temp}
							feelsLike={weather.main.feels_like}
							humidity={weather.main.humidity}
							pressure={weather.main.pressure}
							windSpeed={weather.wind.speed}
							visibility={weather.visibility}
							date={weather.dt}
						/>
					</>
				) : null}
			</main>
		</>
	);
};

export default connect((state) => state)(Index);
