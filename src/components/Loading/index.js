import React from 'react'

import { Container } from './styles'

import imgLoading from '../../assets/loading.gif'

function Loading() {
	return (
		<Container>
			<img src={imgLoading} alt="Carregando..." />
			<p>Carregando...</p>
		</Container>
	)
}

export default Loading
