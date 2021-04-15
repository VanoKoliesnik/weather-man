import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

import { API_URL } from "../../utilities/constants";

import { WeatherInfo } from "../../types";

export default function (req: NextApiRequest, res: NextApiResponse) {
	const cityName = req.query.city;
	return new Promise((resolve) =>
		axios
			.get(`${API_URL}&q=${cityName}`)
			.then((response) => {
				const data = {
					...response.data,
					weather: response.data.weather.map(
						(weatherItem: WeatherInfo): WeatherInfo => ({
							...weatherItem,
							description:
								weatherItem.description[0].toUpperCase() +
								weatherItem.description.slice(1),
						}),
					),
					main: {
						...response.data.main,
						temp: Math.round(response.data.main.temp),
						feels_like: Math.round(response.data.main.feels_like),
					},
				};

				res.status(200).json(data);
				return resolve(data);
			})
			.catch((error) => {
				res.status(500).json(error);
				return resolve(error.data);
			}),
	);
}
