import React from "react";

import { wrapper } from "../store";

import GlobalStyle from "../components/global-styles";

const WrappedApp = ({ Component, pageProps }) => {
	return (
		<>
			<Component {...pageProps} />
			<GlobalStyle />
		</>
	);
};

export default wrapper.withRedux(WrappedApp);
