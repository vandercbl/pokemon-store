import React from 'react'

import { HeaderBar } from './styles'

function Header() {
	return (
		<HeaderBar>
			<div className="container">
				<div className="type-store">
					<i className="icon">
						<span></span>
					</i>
					<h1>Poke Store</h1>
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
								<a href="/">
									<i className="icon icon-water">
										<span>Água</span>
									</i>
								</a>
								<a href="/">
									<i className="icon icon-fire">
										<span>Fogo</span>
									</i>
								</a>
							</div>
						</span>
					</div>
				</div>
			</div>
		</HeaderBar>
	)
}

export default Header
