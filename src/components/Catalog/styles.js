import styled from 'styled-components'

export const Content = styled.div`
	border: 1px solid green;
	width: 100%;

	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
		grid-gap: 16px;
	}

	li {
		list-style: none;
		border: 1px solid #ccc;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background: #fff;
		border-radius: 8px;

		img {
			width: 90px;
			margin: 16px auto 16px auto;
		}

		.name {
			font-weight: 500;
			color: #333;
			margin: 0 16px;
		}

		.price {
			margin: 8px 16px;
			font-size: 0.8rem;
			background: ${(props) => props.theme.colors.secundary};
			color: #fff;
			padding: 4px 8px;
			border-radius: 8px;
			width: fit-content;
		}

		button {
			font-weight: 500;
			background: #f1f1f5;
			border: 0;
			border-radius: 0px 0px 8px 8px;
			padding: 8px 16px;
			color: #30313c;
			transition: all 0.3s;

			&:hover {
				background: #e1e1e5;
			}
		}
	}
`
