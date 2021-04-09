export interface IWeatherData {
	coord: {
		lon: number;
		lat: number;
	};
	weather: [
		{
			id: number;
			main: string;
			description: string;
			icon: string;
		},
	];
	base: string;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
	};
	visibility: number;
	wind: {
		speed: number;
		deg: number;
	};
	clouds: {
		all: number;
	};
	dt: Date;
	sys: {
		type: number;
		id: number;
		country: string;
		sunrise: Date;
		sunset: Date;
	};
	timezone: Date;
	id: number;
	name: string;
	cod: number;
}

export type Loading = number;
export interface IState {
	weatherData: { data: IWeatherData; loading: Loading; error: Error };
}
