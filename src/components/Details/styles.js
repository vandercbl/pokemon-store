import styled, { keyframes } from 'styled-components'

const animeIndicator = keyframes`
	from{
		transform: translate(-100%)
	}to{
		transform: translate(0%)
	}
`

export const Content = styled.div`
	width: 100%;
`

export const BoxInfo = styled.div`
	display: block;

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, auto));
	}

	.main-profile {
		.profile {
			background: #fff;
			padding: 24px;
			border-radius: 8px;
			position: relative;
			box-shadow: 0px 0px 4px 1px #eee;

			.btn-back {
				background: #30313c;
				color: #fff;
				border: 0;
				padding: 3px 8px;
				font-size: 0.9rem;
				border-radius: 8px;
			}

			.height,
			.weight {
				background: ${(props) => props.theme.colors.secundary};
				opacity: 0.6;
				color: #fff;
				display: flex;
				flex-wrap: wrap;
				width: 50px;
				height: 50px;
				font-size: 0.8rem;
				align-items: center;
				justify-content: center;
				font-weight: 500;
				border-radius: 100%;
				position: absolute;
				top: 8px;
				z-index: 1;

				span {
					font-size: 0.7rem;
					display: inline-block;
					margin-left: 2px;
					font-weight: 400;
				}
			}

			.height {
				right: 60px;
				background: ${(props) => props.theme.colors.primary};
			}
			.weight {
				right: 8px;
			}

			img {
				width: 150px;
				display: block;
				margin: 0 auto;
			}

			.name {
				text-transform: capitalize;
			}

			.price {
				margin: 16px 0;
				background: #efefef;
				color: #30313c;
				padding: 4px 8px;
				border-radius: 8px;
				width: fit-content;
				font-weight: 500;
			}

			.types,
			.abilities {
				margin-top: 8px;
				font-size: 0.9rem;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
			}

			.types {
				span {
					border: 1px solid #ccc;
					padding: 2px 6px 3px 6px;
					border-radius: 8px;
					margin-right: 8px;
				}
			}

			.abilities {
				span {
					margin-left: 8px;
					text-transform: capitalize;
				}
			}
		}

		.features {
			padding: 16px 0px;

			li {
				display: grid;
				grid-gap: 8px;
				grid-template-columns: minmax(120px, auto) 40px 1fr;
				align-items: center;
				margin-top: 8px;

				.name {
					text-transform: capitalize;
					text-align: right;
					font-weight: 300;
				}

				.value {
					text-align: center;
					font-weight: 500;
				}

				.graph-bar {
					background: #ccc;
					height: 8px;
					border-radius: 6px;
					overflow: hidden;

					.indicator {
						background: ${(props) => props.theme.colors.secundary};
						height: 100%;
						animation: ${animeIndicator} 2s;
					}
				}
			}
		}
	}

	.profile-moves {
		padding: 8px 16px 16px 16px;

		p {
			font-weight: 500;
			font-size: 0.9rem;
			margin: 0px 3px 4px 3px;
		}

		span {
			box-shadow: inset 0 0 0 1px #d4d3d3;
			display: inline-block;
			margin: 4px 3px;
			padding: 2px 6px 3px 6px;
			font-size: 0.8rem;
			border-radius: 8px;
		}
	}

	button.add-cart {
		font-weight: 500;
		background: ${(props) => props.theme.colors.primary};
		width: 100%;
		border: 0;
		border-radius: 8px;
		padding: 8px 16px;
		color: #fff;
		transition: all 0.3s;

		&:hover {
			background: ${(props) => props.theme.colors.secundary};
		}
	}
`
