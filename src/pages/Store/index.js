/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// components
import Header from '../../components/Header'
import Catalog from '../../components/Catalog'
import Cart from '../../components/Cart'

// redux
import { identifyTheme } from '../../store/reducers/theme'

// styles
import { ContainerStore } from './styles'

function Store(props) {
	const dispatch = useDispatch()

	const theme = props.match.params.type
	dispatch(identifyTheme(theme))

	return (
		<>
			<Header />
			<ContainerStore className="container">
				<Catalog />
				<Cart />
			</ContainerStore>
		</>
	)
}

export default Store
