export default function getEmojiFromCode(code: number) {
	switch (true) {
		// Thunderstorms
		case 200 <= code && code < 300:
			return "⛈";
		// Light Rain
		case 300 <= code && code < 400:
			return "☔";
		// Rain
		case 500 <= code && code < 600:
			return "🌧";
		// Snow
		case 600 <= code && code < 700:
			return "❄";
		// Fog
		case 700 <= code && code < 800:
			return "🌫";
		// Clear
		case code === 800 || (950 <= code && code <= 956):
			return "☀";
		// Some clouds
		case 801 <= code && code <= 803:
			return "⛅";
		// Tornado
		case code === 781:
			return "⚠";
		// Overcast
		case code === 804:
			return "☁";
		// Storm+
		case code >= 900:
			return "⚠";

		default:
			return "🌡";
	}
}
