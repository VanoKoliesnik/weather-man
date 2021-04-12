import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
	padding: 15px 60px;
`;

interface IProps {
	cityName: string;
}

export default function Header({ cityName }: IProps) {
	return (
		<StyledHeader>
			<span>🌐 {cityName}</span>
		</StyledHeader>
	);
}
