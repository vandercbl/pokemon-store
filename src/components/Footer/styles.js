import styled from 'styled-components'

import iconsTypes from '../../assets/icons-poke-types.png'

export const Container = styled.footer`
	background: ${(props) => props.theme.colors.primary};
	color: #fff;
	position: fixed;
	bottom: 0;
	width: 100%;
	box-shadow: 0px -4px 6px -3px #666;

	@media (min-width: 768px) {
		position: static;
	}
`

export const Content = styled.div`
	.nav-mobile {
		display: flex;
	}
	@media (min-width: 768px) {
		.nav-mobile {
			display: none;
		}
	}

	.nav-tools {
		display: flex;
		justify-content: space-between;
		width: 100%;

		.btn-icon {
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin: 0 6px;
			cursor: pointer;

			svg {
				font-size: 34px;
				margin: 0 auto;
			}
			span {
				font-size: 12px;
			}
		}
	}

	.our-stores {
		.action {
			display: inline-block;
			cursor: pointer;

			&:hover {
				.stores {
					opacity: 1;
					visibility: visible;
				}
			}
		}
		.stores {
			cursor: default;
			padding: 16px;
			background: #fff;
			box-shadow: 0px 0px 10px -1px #ccc;
			border-radius: 6px;
			position: absolute;
			bottom: 70px;
			z-index: 1;
			opacity: 0;
			visibility: hidden;
			transition: all 0.4s;

			a {
				display: inline-block;
				margin: 0 8px;
				padding-bottom: 16px;
				position: relative;
				text-align: center;
			}

			.icon {
				display: inline-block;
				width: 32px;
				height: 32px;
				background: url(${iconsTypes}) no-repeat;
				background-size: 200px;

				&.icon-fire {
					background-position: -33px -2px;
				}
				&.icon-water {
					background-position: 0px -2px;
				}

				span {
					font-size: 0.7rem;
					position: absolute;
					bottom: 0;
					left: 0;
					text-align: center;
					width: 100%;
				}
			}
		}
	}
`
