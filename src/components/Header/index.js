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
					<h1>PokeStore</h1>
				</div>
			</div>
		</HeaderBar>
	)
}

export default Header
