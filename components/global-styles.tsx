import "normalize.css";
import "tailwindcss/tailwind.css";

import { createGlobalStyle } from "styled-components";

import { MAIN_COLOR, MAIN_TEXT_COLOR, MAIN_FONT_FAMILY } from "../utilities/constants";

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${MAIN_COLOR};
		color: ${MAIN_TEXT_COLOR};
		font-family: ${MAIN_FONT_FAMILY};
	}
`;

export default GlobalStyle;
