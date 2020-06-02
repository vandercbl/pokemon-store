import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addItemCart } from '../../store/reducers/cart'
import {
	messageAddCartTrue,
	messageAddCartFalse,
} from '../../store/reducers/screen'

import Message from '../../components/Message'
import { formatValue } from '../../utils/formatValue'

import { Content, BoxInfo } from './styles'

function Details(props) {
	const type = props.type
	const pokemon = useSelector((state) => state.pokemon.infoDetails)
	const messageAddCart = useSelector((state) => state.screen.messageAddCart)

	const dispatch = useDispatch()
	const history = useHistory()

	const handleBack = useCallback(() => {
		history.go(-1)
	}, [history])

	const handleAddCart = useCallback(
		(name, urlImage, price) => {
			const quantity = 1
			const item = { name, urlImage, price, quantity, type }
			dispatch(addItemCart(item))
			dispatch(messageAddCartTrue())
			setTimeout(() => {
				dispatch(messageAddCartFalse())
			}, 1000)
		},
		[dispatch, type],
	)

	return (
		<Content>
			<Message show={messageAddCart}>Adicionado ao carrinho</Message>
			<BoxInfo>
				{pokemon && (
					<>
						<div className="main-profile">
							<div className="profile">
								<button onClick={handleBack} className="btn-back">
									Voltar
								</button>
								<p className="height">
									{pokemon.height / 10}
									<span>m</span>
								</p>
								<p className="weight">
									{pokemon.weight / 10}
									<span>kg</span>
								</p>
								<img src={pokemon.sprites.front_default} alt={pokemon.name} />
								<h1 className="name">{pokemon.name}</h1>
								<p className="types">
									{pokemon.types.map((item) => (
										<span key={item.type.name}>{item.type.name}</span>
									))}
								</p>
								<p className="abilities">
									Habilidade(s):
									{pokemon.abilities.map((item) => (
										<span key={item.ability.name}>{item.ability.name}</span>
									))}
								</p>
								<p className="price">
									{formatValue(Number(pokemon.name.length * 3))}
								</p>
								<button
									className="add-cart"
									onClick={() =>
										handleAddCart(
											pokemon.name,
											pokemon.sprites.front_default,
											pokemon.name.length * 3,
										)
									}
								>
									Comprar
								</button>
							</div>
							<div className="features">
								<ul>
									{pokemon.stats.map((item) => (
										<li key={item.stat.name}>
											<div className="name">{item.stat.name}</div>
											<div className="value">{item.base_stat}</div>
											<div className="graph-bar">
												<div
													className="indicator"
													style={{ width: `${(item.base_stat / 200) * 100}%` }}
												></div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="profile-moves">
							<p>Mooves:</p>
							{pokemon.moves.map((item) => (
								<span key={item.move.name}>{item.move.name}</span>
							))}
						</div>
					</>
				)}
			</BoxInfo>
		</Content>
	)
}

export default Details
