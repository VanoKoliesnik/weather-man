const API_VERSION = "2.5";
const API_UNITS = "metric";
const API_LANG = "en";

export const API_URL = `http://api.openweathermap.org/data/${API_VERSION}/weather/?appid=${process.env.API_KEY}&units=${API_UNITS}&lang=${API_LANG}`;

export const MAIN_COLOR = "#EEE";
export const MAIN_TEXT_COLOR = "#8C8C8C";
export const MAIN_FONT_FAMILY = "'Montserrat', 'Arial', 'sans-serif'";
export const BORDER_RADIUS = "80px";
export const INNER_SHADOW = "3px 3px 10px 0px inset";
export const OUTER_SHADOW = "0px 0px 20px 1px #FFF";
