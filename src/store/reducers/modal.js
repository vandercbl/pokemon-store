import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = { show: false }

export const startModal = createAction('START_MODAL')
export const endModal = createAction('END_MODAL')

export default createReducer(INITIAL_STATE, {
	[startModal]: (state) => {
		state.show = true
	},
	[endModal]: (state) => {
		state.show = false
	},
})
