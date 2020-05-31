import styled, { css, keyframes } from 'styled-components'

const animeIcon = keyframes`
	from{
		opacity: 0;
		font-size: 10px;
		transform: scale(0.1);
	}to {
		opacity: 1;
		font-size: 100px;
		transform: scale(1);
	}
`

export const Container = styled.div`
	background: rgba(0, 0, 0, 0.4);
	display: flex;
	z-index: 9999;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	flex-direction: row;
	justify-content: center;
	overflow: hidden;
	opacity: 0;
	visibility: hidden;
	transition: all 0.3s;

	${(props) =>
		props.show &&
		css`
			opacity: 1;
			visibility: visible;
		`}

	.overlay-close {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 1;
	}
`

export const Content = styled.div`
	background: #fff;
	padding: 32px;
	margin: auto;
	max-width: 90%;
	width: 32em;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	position: relative;
	z-index: 100000;
	font-size: 1.2rem;
	border-radius: 16px;

	h1 {
		color: #30313c;
	}

	p {
		margin: 8px 0;
	}

	svg {
		margin: 0 auto;
		font-size: 80px;
		animation: ${animeIcon} 2s;
		color: #44a963;
	}

	span {
		font-size: 0.8rem;
	}
`
