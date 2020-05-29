/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import Header from '../../components/Header'
import Catalog from '../../components/Catalog'
import Cart from '../../components/Cart'

// redux
import { identifyTheme } from '../../store/reducers/theme'
import { getAllPokemonFetch } from '../../store/fetchActions/pokemon'

// styles
import { ContainerStore } from './styles'

function Store(props) {
	const theme = props.match.params.type
	const loading = useSelector((state) => state.loading.show)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(identifyTheme(theme))
		dispatch(getAllPokemonFetch(theme))
	}, [dispatch, theme])

	return (
		<>
			<Header />
			<ContainerStore className="container">
				{!loading && (
					<>
						<Catalog />
						<Cart />
					</>
				)}
			</ContainerStore>
		</>
	)
}

export default Store
