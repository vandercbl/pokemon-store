import { configureStore } from '@reduxjs/toolkit'

import themeReducer from './reducers/theme'
import pokemonReducer from './reducers/pokemon'
import loadingReducer from './reducers/loading'
import screenReducer from './reducers/screen'
import cartReducer from './reducers/cart'

export default configureStore({
	reducer: {
		theme: themeReducer,
		pokemon: pokemonReducer,
		loading: loadingReducer,
		screen: screenReducer,
		cart: cartReducer,
	},
})
