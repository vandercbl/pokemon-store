/* eslint-disable react/prop-types */
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Store from '../pages/Store'

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route path="/store/:type" component={Store}></Route>
			</Switch>
		</BrowserRouter>
	)
}
