import styled from 'styled-components'

import iconsTypes from '../../assets/icons-poke-types.png'

export const HeaderBar = styled.header`
	background: #f8fafb;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 5;
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
`
