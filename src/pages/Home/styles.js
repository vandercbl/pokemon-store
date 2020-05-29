import styled, { keyframes } from 'styled-components'

import typesStores from '../../assets/home-types-store.jpg'

const appeatFromBottom = keyframes`
	from{
		opacity: 0;
		transform: translateY(50px);
	}to {
		opacity: 1;
		transform: translateY(0);
	}
`

export const ContainerHome = styled.div`
	background-image: radial-gradient(circle, #fff, #fff, #ddd);
	height: 100vh;
	display: flex;
	align-items: center;
	text-align: center;

	@media (min-width: 768px) {
	}

	.container {
		flex-direction: column;
		z-index: 1;
	}

	h1 {
		color: #333;
		margin-bottom: 16px;
	}

	p {
		margin-top: 8px;
	}

	.links-stores {
		margin-top: 32px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(110px, 110px));
		grid-gap: 24px;
		justify-content: center;
		animation: ${appeatFromBottom} 1s;

		a {
			overflow: hidden;
			width: 110px;
			height: 160px;
			border-radius: 8px;
			box-shadow: 0px 0px 4px 0px #aaa;
			transition: all 0.4s;

			.bg-store {
				background: url(${typesStores}) 0 center no-repeat;
				width: 100%;
				height: 100%;
				display: block;
				transition: all 0.6s;
			}

			&:hover {
				.bg-store {
					transform: scale(1.3);
				}
			}

			&.fire {
				&:hover {
					box-shadow: 0px 0px 16px 1px #ffa321;
				}
				.bg-store {
					background-position-x: -668px;
				}
			}

			&.water {
				&:hover {
					box-shadow: 0px 0px 16px 1px #61bee1;
				}
				.bg-store {
					background-position-x: -446px;
				}
			}
		}
	}
`
