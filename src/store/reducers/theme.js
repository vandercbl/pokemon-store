import { createAction, createReducer } from '@reduxjs/toolkit'

// Themes
import dragon from '../../styles/themes/dragon'
import electric from '../../styles/themes/electric'
import fire from '../../styles/themes/fire'
import flying from '../../styles/themes/flying'
import grass from '../../styles/themes/grass'
import ground from '../../styles/themes/ground'
import ice from '../../styles/themes/ice'
import steel from '../../styles/themes/steel'
import water from '../../styles/themes/water'

const INITIAL_STATE = {
	name: '',
	themeObject: water,
}

export const identifyTheme = createAction('IDENTIFY_THEME')

export default createReducer(INITIAL_STATE, {
	[identifyTheme]: (state, action) => {
		state.name = action.payload

		switch (state.name) {
			case 'dragon':
				state.themeObject = dragon
				break
			case 'electric':
				state.themeObject = electric
				break
			case 'fire':
				state.themeObject = fire
				break
			case 'flying':
				state.themeObject = flying
				break
			case 'grass':
				state.themeObject = grass
				break
			case 'ground':
				state.themeObject = ground
				break
			case 'ice':
				state.themeObject = ice
				break
			case 'steel':
				state.themeObject = steel
				break
			case 'water':
				state.themeObject = water
				break
			default:
		}
	},
})
