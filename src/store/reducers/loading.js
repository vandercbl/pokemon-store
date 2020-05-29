import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = { show: false }

export const startLoad = createAction('START_LOAD')
export const endLoad = createAction('END_LOAD')

export default createReducer(INITIAL_STATE, {
	[startLoad]: (state) => {
		state.show = true
	},
	[endLoad]: (state) => {
		state.show = false
	},
})
