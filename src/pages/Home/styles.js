import styled, { keyframes } from 'styled-components'

import typesStores from '../../assets/home-types-store.jpg'

const appearFromBottom = keyframes`
	from{
		opacity: 0;
		transform: translateY(50px);
	}to {
		opacity: 1;
		transform: translateY(0);
	}
`

export const ContainerHome = styled.div`
	height: 100vh;
	display: flex;
	text-align: center;
	padding-top: 8vh;

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
		/* display: grid;
		grid-template-columns: repeat(auto-fit, minmax(110px, 110px));
		grid-gap: 24px;
		justify-content: center;*/
		animation: ${appearFromBottom} 2s;
		margin-bottom: 16px;

		a {
			overflow: hidden;
			width: 110px;
			height: 160px;
			border-radius: 8px;
			box-shadow: 0px 0px 4px 0px #aaa;
			transition: all 0.4s;

			display: inline-block;
			margin: 0 8px 8px 16px;

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

			&.dragon {
				&:hover {
					box-shadow: 0px 0px 16px 1px #1a76b9;
				}
				.bg-store {
					background-position-x: -892px;
				}
			}

			&.electric {
				&:hover {
					box-shadow: 0px 0px 16px 1px #ffd95a;
				}
				.bg-store {
					background-position-x: 0;
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

			&.flying {
				&:hover {
					box-shadow: 0px 0px 16px 1px #7b99df;
				}
				.bg-store {
					background-position-x: -222px;
				}
			}

			&.grass {
				&:hover {
					box-shadow: 0px 0px 16px 1px #42bb5c;
				}
				.bg-store {
					background-position-x: -557px;
				}
			}

			&.ground {
				&:hover {
					box-shadow: 0px 0px 16px 1px #ce8246;
				}
				.bg-store {
					background-position-x: -335px;
				}
			}

			&.ice {
				&:hover {
					box-shadow: 0px 0px 16px 1px #7ddfde;
				}
				.bg-store {
					background-position-x: -112px;
				}
			}

			&.steel {
				&:hover {
					box-shadow: 0px 0px 16px 1px #2d949d;
				}
				.bg-store {
					background-position-x: -1002px;
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
