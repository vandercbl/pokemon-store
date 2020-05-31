import React from 'react'
import { Link } from 'react-router-dom'

import { ContainerHome } from './styles'

function Home() {
	return (
		<ContainerHome>
			<div className="container">
				<h1>Grupo Pokémon Stores</h1>
				<p>
					Utilize nosso Marketplace que é especializado e categorizado por tipos
					diferentes de Pokémon.
				</p>
				<p>Acesse nossas lojas abaixo e veja todas suas possibilidades.</p>
				<div className="links-stores">
					<Link to="/store/dragon" className="dragon" title="Dragon">
						<i className="bg-store"></i>
					</Link>
					<Link to="/store/electric" className="electric" title="electric">
						<i className="bg-store"></i>
					</Link>
					<Link to="/store/fire" className="fire" title="Fire">
						<i className="bg-store"></i>
					</Link>
					<Link to="/store/flying" className="flying" title="Flying">
						<i className="bg-store"></i>
					</Link>
					<Link to="/store/grass" className="grass" title="Grass">
						<i className="bg-store"></i>
					</Link>
					<Link to="/store/ground" className="ground" title="Ground">
						<i className="bg-store"></i>
					</Link>
					<Link to="/store/ice" className="ice" title="Ice">
						<i className="bg-store"></i>
					</Link>
					<Link to="/store/steel" className="steel" title="Steel">
						<i className="bg-store"></i>
					</Link>
					<Link to="/store/water" className="water" title="Water">
						<i className="bg-store"></i>
					</Link>
				</div>
			</div>
		</ContainerHome>
	)
}

export default Home
