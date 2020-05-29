import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'

import { HeaderBar } from './styles'

function Header() {
	const handleAlterStore = useCallback(() => {
		console.log('Click muda loja')
	}, [])

	return (
		<HeaderBar>
			<div className="container">
				<div className="type-store">
					<i className="icon">
						<span></span>
					</i>
					<h1>PokeStore</h1>
				</div>

				<div className="nav-tools">
					<div className="nav-mobile">
						<a href="/">Catálogo</a>
						<a href="/">Carrinho</a>
					</div>

					<div className="our-stores">
						<span href="#">
							Nossas Lojas
							<div className="stores">
								<Link to="/store/water" onClick={handleAlterStore}>
									<i className="icon icon-water">
										<span>Water</span>
									</i>
								</Link>
								<Link to="/store/fire" onClick={handleAlterStore}>
									<i className="icon icon-fire">
										<span>Fire</span>
									</i>
								</Link>
							</div>
						</span>
					</div>
				</div>
			</div>
		</HeaderBar>
	)
}

export default Header
