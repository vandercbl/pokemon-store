import React from 'react'

import { ContainerHome } from './styles'

function IframeExterno() {
	const handleClickProdutos = () => {
		window.top.postMessage({ id: 1, page: 'produtos' })
	}
	const handleClickContas = () => {
		window.top.postMessage({ id: 2, page: 'contas' })
	}
	return (
		<ContainerHome>
			<div className="container">
				<h1>Iframe Externo</h1>
				<a href="#" onClick={handleClickProdutos}>
					Json Produtos
				</a>
				<a href="#" onClick={handleClickContas}>
					Json Contas
				</a>
			</div>
		</ContainerHome>
	)
}

export default IframeExterno
