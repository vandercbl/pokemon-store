import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItemCart } from '../../store/reducers/cart'
import {
	messageAddCartTrue,
	messageAddCartFalse,
} from '../../store/reducers/screen'

import Message from '../../components/Message'
import { formatValue } from '../../utils/formatValue'

import { Content } from './styles'

function Catalog() {
	const pokemon = useSelector((state) => state.pokemon.list)
	const filterPokemon = useSelector((state) => state.pokemon.filter)
	const catalogShow = useSelector((state) => state.screen.catalogShow)
	const messageAddCart = useSelector((state) => state.screen.messageAddCart)

	const dispatch = useDispatch()

	const handleAddCart = useCallback(
		({ name, urlImage, price, type }) => {
			const quantity = 1
			const item = { name, urlImage, price, quantity, type }
			dispatch(addItemCart(item))
			dispatch(messageAddCartTrue())
			setTimeout(() => {
				dispatch(messageAddCartFalse())
			}, 1000)
		},
		[dispatch],
	)

	return (
		<Content show={catalogShow}>
			<Message show={messageAddCart}>Adicionado ao carrinho</Message>
			<ul>
				{pokemon
					.filter((p) => p.pokemon.name.toLowerCase().includes(filterPokemon))
					.map((p) => (
						<li key={p.pokemon.url} className="item-pokemon">
							<img src={p.pokemon.urlImage} alt={p.pokemon.name} />
							<p className="name">{p.pokemon.name}</p>
							<p className="price">{formatValue(Number(p.pokemon.price))}</p>
							<button
								className="add-cart"
								onClick={() => handleAddCart(p.pokemon)}
							>
								Comprar
							</button>
						</li>
					))}
			</ul>
		</Content>
	)
}

export default Catalog
