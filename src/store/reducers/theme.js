import { createAction, createReducer } from '@reduxjs/toolkit'

// Themes
import water from '../../styles/themes/water'
import fire from '../../styles/themes/fire'

const INITIAL_STATE = {
	name: '',
	themeObject: water,
}

export const identifyTheme = createAction('IDENTIFY_THEME')

export default createReducer(INITIAL_STATE, {
	[identifyTheme]: (state, action) => {
		state.name = action.payload

		switch (state.name) {
			case 'fire':
				state.themeObject = fire
				break
			case 'water':
				state.themeObject = water
				break
			default:
		}
	},
})
