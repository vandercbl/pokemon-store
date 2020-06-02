import styled, { css } from 'styled-components'

export const Content = styled.div`
	width: 100%;
	display: none;

	${(props) =>
		props.show &&
		css`
			display: block;
		`}

	@media (min-width: 768px) {
		display: block;
	}

	ul {
		/* IE */
		display: block;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
		grid-gap: 16px;

		@media (min-width: 768px) {
			grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		}
	}

	li {
		list-style: none;
		/* IE */
		display: inline-block;
		display: grid;
		box-shadow: 0px 0px 4px 1px #eee;
		grid-template-columns: 1fr;
		justify-content: center;
		align-items: flex-end;
		background: #fff;
		border-radius: 8px;
		transition: all 0.3s;

		&:hover {
			box-shadow: 0px 0px 4px 1px #ccc;

			img {
				transform: scale(1.2);
			}
		}

		.link-details {
			text-align: center;
		}

		img {
			max-width: 100%;
			min-height: 60px;
			margin: 6px auto 0 auto;
			transition: all 0.3s;
		}

		.name {
			font-weight: 500;
			color: #333;
			margin: 0 16px;
			text-transform: capitalize;
		}

		.price {
			margin: 8px 16px;
			font-size: 0.8rem;
			background: #efefef;
			color: #30313c;
			padding: 4px 8px;
			border-radius: 8px;
			width: fit-content;
			font-weight: 500;
		}

		button {
			font-weight: 500;
			background: ${(props) => props.theme.colors.primary};
			border: 0;
			border-radius: 0px 0px 8px 8px;
			padding: 8px 16px;
			color: #fff;
			transition: all 0.3s;

			&:hover {
				background: ${(props) => props.theme.colors.secundary};
			}
		}
	}
`
