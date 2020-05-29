import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		outline: 0
	}

	body {
		background: #fff;
		color: #66625c;
		-webkit-font-smoothing: antialiased;
	}

	body, input, button {
		font-family: 'Roboto', sans-serif;
		font-size: 16px;
	}

	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 500;
		color: ${(props) => props.theme.colors.primary}
	}

	span {
		font-style: normal;
	}

	button {
		cursor: pointer;
	}

	.container {
		max-width: 1300px;
		padding: 16px;
		margin: 0 auto;
		display: flex;
		width: 100%;
		position: relative;
	}
`