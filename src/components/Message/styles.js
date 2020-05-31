import styled, { css } from 'styled-components'

export const Container = styled.div`
	position: fixed;
	z-index: 99;
	width: 1270px;
	max-width: 92%;
	bottom: 90px;
	padding: 16px;
	border-radius: 8px;
	background: #30313c;
	color: #fff;
	font-weight: 500;
	text-align: center;
	opacity: 0;
	visibility: hidden;

	@media (min-width: 768px) {
		bottom: auto;
		max-width: 97%;
	}

	${(props) =>
		props.show &&
		css`
			opacity: 1;
			visibility: visible;
		`}
`
