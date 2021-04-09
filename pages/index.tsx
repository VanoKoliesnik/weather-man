import React, { useEffect } from "react";
import { connect } from "react-redux";

import Head from "next/head";
import { fetchWeatherByCity } from "../actions/weather-actions";

const Index = ({ dispatch }) => {
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
