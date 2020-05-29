import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = {
	list: [],
}

export const listPokemon = createAction('GET_ALL_POKEMON')

export default createReducer(INITIAL_STATE, {
	[listPokemon]: (state, action) => {
		state.list = action.payload
	},
})
