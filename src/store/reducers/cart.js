import { createAction, createReducer } from '@reduxjs/toolkit'

// const initialCartItems = {
// 	name: '',
// 	urlImage: '',
// 	quantity: '',
// 	price: '',
// }

const INITIAL_STATE = {
	cartItems: [],
	type: '',
}

export const addItemCart = createAction('ADD_ITEM_CART')
export const removeItemCart = createAction('REMOVE_ITEM_CART')
export const addQuantity = createAction('ADD_QUANTITY')
export const removeQuantity = createAction('REMOVE_QUANTITY')
export const finishBuy = createAction('FINISH_BUY')

export default createReducer(INITIAL_STATE, {
	[addItemCart]: (state, action) => {
		const exists = state.cartItems.findIndex(
			(item) => item.name === action.payload.name,
		)

		// se não existe ainda
		if (exists === -1) {
			state.cartItems = [...state.cartItems, action.payload]
		} else {
			state.cartItems[exists].quantity = state.cartItems[exists].quantity + 1
		}
	},
	[removeItemCart]: (state, action) => {
		console.log(2)
	},
	[addQuantity]: (state, action) => {
		const indexPokemon = state.cartItems.findIndex(
			(item) => item.name === action.payload,
		)
		state.cartItems[indexPokemon].quantity =
			state.cartItems[indexPokemon].quantity + 1
	},
	[removeQuantity]: (state, action) => {
		const indexPokemon = state.cartItems.findIndex(
			(item) => item.name === action.payload,
		)

		state.cartItems[indexPokemon].quantity =
			state.cartItems[indexPokemon].quantity - 1

		if (state.cartItems[indexPokemon].quantity < 1) {
			state.cartItems = state.cartItems.filter(
				(item, index) => index !== indexPokemon,
			)
		}
	},
	[finishBuy]: (state, action) => {
		console.log(5)
	},
})
