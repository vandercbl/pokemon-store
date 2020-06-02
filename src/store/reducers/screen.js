import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = {
	cartShow: false,
	catalogShow: true,
	detailShow: true,
	messageAddCart: false,
	ourStores: false,
}

export const activeCart = createAction('ACTIVE_CART')
export const activeCatalog = createAction('ACTIVE_CATALOG')
export const activeDetail = createAction('ACTIVE_DETAIL')
export const messageAddCartTrue = createAction('MESSAGE_ADD_CART_TRUE')
export const messageAddCartFalse = createAction('MESSAGE_ADD_CART_FALSE')
export const ourStoresTrue = createAction('OUR_STORES_TRUE')
export const ourStoresFalse = createAction('OUR_STORES_FALSE')

export default createReducer(INITIAL_STATE, {
	[activeCart]: (state) => {
		state.cartShow = true
		state.catalogShow = false
		state.detailShow = false
	},
	[activeCatalog]: (state) => {
		state.cartShow = false
		state.catalogShow = true
	},
	[activeDetail]: (state) => {
		state.cartShow = false
		state.catalogShow = false
		state.detailShow = true
	},
	[messageAddCartTrue]: (state) => {
		state.messageAddCart = true
	},
	[messageAddCartFalse]: (state) => {
		state.messageAddCart = false
	},
	[ourStoresTrue]: (state) => {
		state.ourStores = true
	},
	[ourStoresFalse]: (state) => {
		state.ourStores = false
	},
})
