import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = {
	cartShow: false,
	catalogShow: true,
}

export const activeCart = createAction('ACTIVE_CART')
export const activeCatalog = createAction('ACTIVE_CATALOG')

export default createReducer(INITIAL_STATE, {
	[activeCart]: (state) => {
		state.cartShow = true
		state.catalogShow = false
	},
	[activeCatalog]: (state) => {
		state.cartShow = false
		state.catalogShow = true
	},
})
