import React from 'react'
import { Link } from 'react-router-dom'

import { ContainerHome } from './styles'

function Home() {
	return (
		<>
			<ContainerHome>
				<div className="container">
					<h1>Grupo Pokémon Stores</h1>
					<p>
						Utilize nosso Marketplace que é especializado e categorizado por
						tipos diferentes de Pokémon.
					</p>
					<p>Acesse nossas lojas abaixo e veja todas suas possibilidades</p>
					<div className="links-stores">
						<Link to="/store/fire" className="fire" title="Fire">
							<i className="bg-store"></i>
						</Link>
						<Link to="/store/water" className="water" title="Water">
							<i className="bg-store"></i>
						</Link>
					</div>
				</div>
			</ContainerHome>
		</>
	)
}

export default Home
