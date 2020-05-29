import React from 'react'
import { useSelector } from 'react-redux'

import formatValue from '../../utils/formatValue'

import { Content } from './styles'

function Catalog() {
	// const pokemon = useSelector((state) => state.pokemon)
	const pokemon = useSelector((state) => state.pokemon.list)
	const filterPokemon = useSelector((state) => state.pokemon.filter)
	const catalogShow = useSelector((state) => state.screen.catalogShow)

	return (
		<Content show={catalogShow}>
			<ul>
				{pokemon
					.filter((p) => p.pokemon.name.toLowerCase().includes(filterPokemon))
					.map((p, index) => (
						<li key={index}>
							<img src={p.pokemon.urlImage} alt={p.pokemon.name} />
							<p className="name">{p.pokemon.name}</p>
							<p className="price">
								{formatValue(Number(p.pokemon.name.length * 3))}
							</p>
							<button>Comprar</button>
						</li>
					))}

				{/* {pokemon.list.map((p, index) => (
					<li key={index}>
						<img src={p.pokemon.urlImage} alt={p.pokemon.name} />
						<p className="name">{p.pokemon.name}</p>
						<p className="price">
							{formatValue(Number(p.pokemon.name.length * 3))}
						</p>
						<button>Comprar</button>
					</li>
				))} */}
			</ul>
		</Content>
	)
}

export default Catalog
