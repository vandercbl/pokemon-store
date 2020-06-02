import styled from 'styled-components'

export const ContainerStore = styled.div`
	&.store {
		padding-top: 120px;
		padding-bottom: 100px;
		display: block;

		@media (min-width: 768px) {
			padding-top: 90px;
			display: flex;
		}
	}
`
