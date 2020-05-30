import React, { useCallback, useMemo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addQuantity, removeQuantity } from '../../store/reducers/cart'

import { formatValueNotCurrency } from '../../utils/formatValue'

import { CartSummary, CartDetails, CartConclude } from './styles'

function TotalCart({ cart }) {
	const totalArray = cart.map((item) => item.price * item.quantity)
	let sum = 0
	if (totalArray.length > 0) {
		sum = totalArray.reduce((amount, value) => amount + value)
	}
	return sum
}

function Cart() {
	const cartShow = useSelector((state) => state.screen.cartShow)
	const cart = useSelector((state) => state.cart.cartItems)
	const dispatch = useDispatch()

	// const totalCart = useMemo(() => {
	// 	console.log(1)
	// 	const totalArray = cart.map((item) => item.price * item.quantity)

	// 	let sum = 0
	// 	if (totalArray.length > 0) {
	// 		sum = totalArray.reduce((amount, value) => amount + value)
	// 	}
	// 	return sum
	// }, [cart])

	// useEffect(() => {
	// 	totalCart()
	// }, [totalCart])

	const handleAddUnit = useCallback(
		(name) => {
			dispatch(addQuantity(name))
		},
		[dispatch],
	)

	const handleRemoveUnit = useCallback(
		(name) => {
			dispatch(removeQuantity(name))
		},
		[dispatch],
	)

	return (
		<CartSummary show={cartShow}>
			<h2>Carrinho</h2>
			<CartDetails>
				<ul>
					{cart.map((item, index) => (
						<li key={index}>
							<div className="name-item">
								<img src={item.urlImage} alt={item.name} />
								<span>{item.name}</span>
							</div>
							<div className="quantity">
								<button onClick={() => handleRemoveUnit(item.name)}>-</button>
								<span>{item.quantity}</span>
								<button onClick={() => handleAddUnit(item.name)}>+</button>
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
						<span className="cost">
							<TotalCart cart={cart} />
						</span>
					</div>
				</div>
				<button className="buy">Finalizar</button>
			</CartConclude>
		</CartSummary>
	)
}

export default Cart
