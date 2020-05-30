import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItemCart } from '../../store/reducers/cart'

import { formatValue } from '../../utils/formatValue'

import { Content } from './styles'

function Catalog() {
	const pokemon = useSelector((state) => state.pokemon.list)
	const filterPokemon = useSelector((state) => state.pokemon.filter)
	const catalogShow = useSelector((state) => state.screen.catalogShow)

	const dispatch = useDispatch()

	function handleAddCart({ name, urlImage, price }) {
		const quantity = 1
		const item = { name, urlImage, price, quantity }
		dispatch(addItemCart(item))
	}

	return (
		<Content show={catalogShow}>
			<ul>
				{pokemon
					.filter((p) => p.pokemon.name.toLowerCase().includes(filterPokemon))
					.map((p, index) => (
						<li key={index}>
							<img src={p.pokemon.urlImage} alt={p.pokemon.name} />
							<p className="name">{p.pokemon.name}</p>
							<p className="price">{formatValue(Number(p.pokemon.price))}</p>
							<button onClick={() => handleAddCart(p.pokemon)}>Comprar</button>
						</li>
					))}
			</ul>
		</Content>
	)
}

export default Catalog
