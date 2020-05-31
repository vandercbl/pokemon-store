import React, { useCallback, useMemo } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

import { useSelector, useDispatch } from 'react-redux'
import {
	addQuantity,
	removeQuantity,
	finishBuy,
} from '../../store/reducers/cart'
import { startModal, endModal } from '../../store/reducers/modal'

import Modal from '../../components/Modal'

import { formatValueNotCurrency, formatValue } from '../../utils/formatValue'
import { CartSummary, CartTitle, CartDetails, CartConclude } from './styles'

function Cart() {
	const type = useSelector((state) => state.theme.themeObject.title)
	const cartShow = useSelector((state) => state.screen.cartShow)
	const cart = useSelector((state) => state.cart.typeStore[type])

	const dispatch = useDispatch()

	const totalCart = useMemo(() => {
		const totalArray = cart.map((item) => item.price * item.quantity)
		let sum = 0
		if (totalArray.length > 0) {
			sum = totalArray.reduce((amount, value) => amount + value)
		}
		return sum
	}, [cart])

	const handleAddUnit = useCallback(
		(item) => {
			dispatch(addQuantity(item))
		},
		[dispatch],
	)

	const handleRemoveUnit = useCallback(
		(item) => {
			dispatch(removeQuantity(item))
		},
		[dispatch],
	)

	const handleFinish = useCallback(() => {
		dispatch(startModal())
		setTimeout(() => {
			dispatch(finishBuy(type))
			dispatch(endModal())
		}, 3000)
	}, [dispatch, type])

	return (
		<>
			<CartSummary show={cartShow}>
				<CartTitle>
					<h2>Carrinho</h2>
				</CartTitle>
				<CartDetails>
					<ul>
						{cart.map((item, index) => (
							<li key={index}>
								<div className="name-item">
									<img src={item.urlImage} alt={item.name} />
									<span>{item.name}</span>
								</div>
								<div className="quantity">
									<button onClick={() => handleRemoveUnit(item)}>-</button>
									<span>{item.quantity}</span>
									<button onClick={() => handleAddUnit(item)}>+</button>
								</div>
								<div className="price">
									<span className="currency">R$</span>
									<span className="cost">
										{formatValueNotCurrency(item.price * item.quantity)}
									</span>
								</div>
							</li>
						))}
					</ul>
				</CartDetails>
				<CartConclude>
					<div className="total">
						<span>Total</span>
						<div className="price">
							<span className="currency">R$</span>
							<span className="cost">{formatValueNotCurrency(totalCart)}</span>
						</div>
					</div>
					<button className="buy" onClick={handleFinish}>
						Finalizar
					</button>
				</CartConclude>
			</CartSummary>
			<Modal>
				<AiOutlineCheckCircle />
				<h1>Obrigado!!!</h1>
				<p>Você ganhou de volta</p>
				<p>
					<strong>{formatValue(0.1 * totalCart)}</strong>
				</p>
				<span>Você será redirecionado em 3 segundos...</span>
			</Modal>
		</>
	)
}

export default Cart
