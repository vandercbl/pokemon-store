import { configureStore } from '@reduxjs/toolkit'

import themeReducer from './reducers/theme'
import pokemonReducer from './reducers/pokemon'
import loadingReducer from './reducers/loading'
import modalReducer from './reducers/modal'
import screenReducer from './reducers/screen'
import cartReducer from './reducers/cart'

export default configureStore({
	reducer: {
		theme: themeReducer,
		pokemon: pokemonReducer,
		loading: loadingReducer,
		modal: modalReducer,
		screen: screenReducer,
		cart: cartReducer,
	},
})
