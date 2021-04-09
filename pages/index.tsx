import React, { useEffect } from "react";
import { connect } from "react-redux";

import Head from "next/head";
import { fetchWeatherByCity } from "../actions/api/weather-actions";

const Index = ({ dispatch, weatherData }) => {
	useEffect(() => {
		dispatch(fetchWeatherByCity("Nova Kakhovka"));
	}, []);

	return (
		<>
			<Head>
				<title>WeatherMen | ☀</title>
			</Head>
			<div>Index page</div>
		</>
	);
};

export default connect((state) => state)(Index);
