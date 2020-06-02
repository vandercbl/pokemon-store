import styled, { css } from 'styled-components'

import iconsTypes from '../../assets/icons-poke-types.png'

export const HeaderBar = styled.header`
	background: #fff;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 5;
	box-shadow: 0px 0px 5px 1px #ccc;

	> .container {
		justify-content: space-between;
		align-items: center;
		display: block;
		padding: 8px;

		@media (min-width: 768px) {
			display: flex;
			padding: 16px;
		}
	}

	.link-home-store {
		text-decoration: none;
	}

	.type-store {
		display: flex;
		align-items: center;

		.icon {
			width: 46px;
			height: 46px;
			background: url(${iconsTypes}) no-repeat;
			background-position: ${(props) => props.theme.iconsPosition.bigger};
			margin-right: 8px;
		}
	}
`
export const Input = styled.input`
	border: 0;
	padding: 8px 16px;
	transition: all 0.3s;
	width: 100%;

	@media (min-width: 768px) {
		width: 250px;
		&:focus {
			width: 350px;
		}
	}

	${(props) =>
		props.value &&
		css`
			width: 350px;
		`}
`

export const Search = styled.div`
	border: 1px solid #ccc;
	background: #fff;
	border-radius: 8px;
	position: relative;
	overflow: hidden;
	margin-top: 8px;

	@media (min-width: 768px) {
		margin-top: 0;
	}

	svg {
		position: absolute;
		top: 0;
		right: 0;
		background: ${(props) => props.theme.colors.primary};
		width: 30px;
		padding: 0 5px;
		height: 100%;
		color: #fff;
		cursor: pointer;
	}
`
