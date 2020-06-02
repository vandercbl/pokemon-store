import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = {
	list: [],
	filter: '',
	infoDetails: '',
}

export const listPokemon = createAction('LIST_POKEMON')
export const filterPokemon = createAction('FILTER_LIST_POKEMON')
export const clearPokemonFilter = createAction('CLEAR_POKEMON_FILTER')
export const newInfoDetails = createAction('NEW_INFO_DETAILS')

export default createReducer(INITIAL_STATE, {
	[listPokemon]: (state, action) => {
		state.list = action.payload
	},
	[filterPokemon]: (state, action) => {
		state.filter = action.payload
	},
	[clearPokemonFilter]: (state, action) => {
		state.filter = ''
	},
	[newInfoDetails]: (state, action) => {
		state.infoDetails = action.payload
	},
})
