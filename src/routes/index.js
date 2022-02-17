/* eslint-disable react/prop-types */
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Store from '../pages/Store'
import PokemonDetails from '../pages/PokemonDetails'
import IframeExterno from '../pages/IframeExterno'

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/store/:type" component={Store}></Route>
				<Route path="/store/:type/:pokemon" component={PokemonDetails}></Route>

				{/* iframe projeto trabalho */}
				<Route path="/iframe-externo" component={IframeExterno}></Route>
			</Switch>
		</BrowserRouter>
	)
}
