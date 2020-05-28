import styled from 'styled-components'

import typesStores from '../../assets/home-types-store.jpg'

export const ContainerHome = styled.div`
	background-image: radial-gradient(circle, #fff, #f4f4f4);
	height: 100vh;
	display: flex;
	align-items: center;

	@media (min-width: 768px) {
	}

	.links-stores {
		a {
			overflow: hidden;
			width: 180px;
			height: 250px;
			display: inline-block;

			.bg-store {
				background: url(${typesStores}) 0 center no-repeat;
				width: 100%;
				height: 100%;
				display: block;
				border: 1px solid red;
				transition: all 0.3s;
			}

			&:hover {
				.bg-store {
					transform: scale(1.2);
				}
			}
		}
	}
`
