import styled from 'styled-components'

import iconsTypes from '../../assets/icons-poke-types.png'

export const HeaderBar = styled.header`
	background: #f8fafb;
	box-shadow: 0px 0px 5px 1px #ccc;

	> .container {
		justify-content: space-between;
		align-items: center;
	}

	.type-store {
		display: flex;
		align-items: center;

		.icon {
			width: 46px;
			height: 46px;
			background: url(${iconsTypes}) no-repeat;
			background-position: ${(props) => props.theme.iconsPosition.bigger};
			margin-right: 8px;
		}
	}

	.nav-mobile {
		display: block;
	}
	@media (min-width: 768px) {
		.nav-mobile {
			display: none;
		}
	}

	.our-stores {
		span {
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
			right: 10px;
			margin-top: 5px;
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
