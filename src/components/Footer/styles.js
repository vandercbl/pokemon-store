import styled, { css } from 'styled-components'

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
		width: 100%;
		justify-content: space-between;

		@media (min-width: 768px) {
			justify-content: flex-end;
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
			color: #fff;
			text-decoration: none;
			position: relative;

			svg {
				font-size: 34px;
				margin: 0 auto;
			}
			span {
				font-size: 12px;
			}

			.total-cart {
				position: absolute;
				top: 0px;
				right: -10px;
				background: rgba(51, 51, 51, 0.5);
				padding: 2px 6px;
				border-radius: 100%;
			}

			&.xs-only {
				@media (min-width: 768px) {
					display: none;
				}
			}
		}
	}
`

export const OurStores = styled.div`
	.action {
		display: inline-block;
		cursor: pointer;

		/* &:hover {
			.stores {
				opacity: 1;
				visibility: visible;
			}
		} */
	}
	.stores {
		cursor: default;
		padding: 16px;
		background: #fff;
		box-shadow: 0px 0px 10px -1px #ccc;
		border-radius: 6px;
		position: absolute;
		bottom: 70px;
		right: 10px;
		margin-left: 10px;
		z-index: 1;
		opacity: 0;
		visibility: hidden;
		transition: all 0.4s;

		${(props) =>
			props.show &&
			css`
				opacity: 1;
				visibility: visible;
			`}

		@media (min-width: 768px) {
			margin-left: auto;
		}

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

			&.icon-dragon {
				background-position: -66px -48px;
			}
			&.icon-electric {
				background-position: -33px -48px;
			}
			&.icon-fire {
				background-position: -33px -2px;
			}
			&.icon-flying {
				background-position: -66px -48px;
			}
			&.icon-grass {
				background-position: -66px -2px;
			}
			&.icon-ground {
				background-position: -99px -2px;
			}
			&.icon-ice {
				background-position: 0px -48px;
			}
			&.icon-steel {
				background-position: -170px -2px;
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
				font-weight: 500;
				color: #333;
			}
		}
	}
`
