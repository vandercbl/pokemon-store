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
	typeStore: {
		water: [],
		fire: [],
	},
}

export const getLocalStorage = createAction('GET_LOCAL_STORAGE')
export const addItemCart = createAction('ADD_ITEM_CART')
export const addQuantity = createAction('ADD_QUANTITY')
export const removeQuantity = createAction('REMOVE_QUANTITY')
export const finishBuy = createAction('FINISH_BUY')

export default createReducer(INITIAL_STATE, {
	[addItemCart]: (state, action) => {
		const type = action.payload.type

		const exists = state.typeStore[type].findIndex(
			(item) => item.name === action.payload.name,
		)

		if (exists === -1) {
			state.typeStore[type] = [...state.typeStore[type], action.payload]
		} else {
			state.typeStore[type][exists].quantity =
				state.typeStore[type][exists].quantity + 1
		}

		// state.typeStore = [{ [type]: { itemCart: action.payload } }]
	},
	[addQuantity]: (state, action) => {
		const type = action.payload.type
		const indexPokemon = state.typeStore[type].findIndex(
			(item) => item.name === action.payload.name,
		)
		state.typeStore[type][indexPokemon].quantity =
			state.typeStore[type][indexPokemon].quantity + 1
	},
	[removeQuantity]: (state, action) => {
		const type = action.payload.type

		const indexPokemon = state.typeStore[type].findIndex(
			(item) => item.name === action.payload.name,
		)

		state.typeStore[type][indexPokemon].quantity =
			state.typeStore[type][indexPokemon].quantity - 1

		if (state.typeStore[type][indexPokemon].quantity < 1) {
			state.typeStore[type] = state.typeStore[type].filter(
				(item, index) => index !== indexPokemon,
			)
		}
	},
	[finishBuy]: (state, action) => {
		const type = action.payload
		state.typeStore[type] = []
		localStorage.removeItem(`@LojaPokemon:${type}`)
	},
	[getLocalStorage]: (state, action) => {
		if (typeof action.payload[0] !== 'undefined') {
			const type = action.payload[0].type

			if (type) {
				state.typeStore[type] = action.payload
			}
		}
	},
})
