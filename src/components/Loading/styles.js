import styled, { keyframes } from 'styled-components'

const animeOpacity = keyframes`
	from {
		opacity: 0;
	}to{
		opacity: 1;
	}
`

export const Container = styled.div`
	background: rgba(4, 12, 16, 0.9);
	padding: 32px;
	position: absolute;
	width: 100vw;
	height: 100vh;
	z-index: 99;
	text-align: center;
	animation: ${animeOpacity} 0.5s;

	img {
		margin: 10% auto 10px auto;
		opacity: 0.05;
	}

	p {
		color: #fff;
	}
`
