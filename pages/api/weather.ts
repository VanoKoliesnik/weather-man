import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

import { API_URL } from "../../utilities/constants";

export default function (req: NextApiRequest, res: NextApiResponse) {
	const cityName = req.query.city;
	return new Promise((resolve) =>
		axios
			.get(`${API_URL}&q=${cityName}`)
			.then((response) => {
				res.status(200).json(response.data);
				return resolve(response.data);
			})
			.catch((error) => {
				res.status(500).json(error);
				return resolve(error.data);
			}),
	);
}
