import React from "react";
import styled from "styled-components";

import { MAIN_COLOR, BORDER_RADIUS, INNER_SHADOW, OUTER_SHADOW } from "../utilities/constants";

const MainInfoContainer = styled.div`
	background-color: ${MAIN_COLOR};
	border-radius: ${BORDER_RADIUS};
	box-shadow: ${INNER_SHADOW}, ${OUTER_SHADOW};
	padding: 50px 100px;
	margin: 5%;
`;

const H1 = styled.h1`
	font-size: 1.5rem;
	font-weight: 600;
`;

const H2 = styled.h2`
	font-size: 1.2rem;
	font-weight: 600;
`;

const Description = styled.div`
	font-weight: 400;
`;

interface IProps {
	icon: string;
	description: string;
	temp: number;
	feelsLike: number;
	windSpeed: number;
	visibility: number;
	humidity: number;
	pressure: number;
	date: Date;
}

export default function MainInfo(props: IProps) {
	return (
		<MainInfoContainer>
			<div className="grid grid-rows-2 gap-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<div className="grid grid-rows-2 text-center">
						<H1>
							{props.icon} {props.description}
						</H1>
						<Description>{props.date}</Description>
					</div>

					<div className="grid grid-rows-2 text-center">
						<H1>🌡{props.temp} &deg;C</H1>
						{props.temp === props.feelsLike ? null : (
							<Description>feels like {props.feelsLike} &deg;C</Description>
						)}
					</div>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4">
					<div className="grid grid-rows-2 text-center">
						<H2>💨 {props.windSpeed} m/sec</H2>
						<div>wind</div>
					</div>

					<div className="grid grid-rows-2 text-center">
						<H2>👀 {props.visibility / 1000} km</H2>
						<div>visibility</div>
					</div>

					<div className="grid grid-rows-2 text-center">
						<H2>💧 {props.humidity} %</H2>
						<div>humidity</div>
					</div>

					<div className="grid grid-rows-2 text-center">
						<H2>🗿 {props.pressure} hPa</H2>
						<div>pressure</div>
					</div>
				</div>
			</div>
		</MainInfoContainer>
	);
}
