/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Catalog from '../../components/Catalog'
import Cart from '../../components/Cart'

// redux
import { identifyTheme } from '../../store/reducers/theme'
import { getLocalStorage } from '../../store/reducers/cart'
import { getAllPokemonFetch } from '../../store/fetchActions/pokemon'

// styles
import { ContainerStore } from './styles'

function Store(props) {
	const theme = props.match.params.type
	const loading = useSelector((state) => state.loading.show)
	const cart = useSelector((state) => state.cart.typeStore[theme])

	const dispatch = useDispatch()

	useEffect(() => {
		const cartStorage = localStorage.getItem(`@LojaPokemon:${theme}`)
		if (cartStorage) {
			dispatch(getLocalStorage(JSON.parse(cartStorage).concat()))
		}
	}, [dispatch, theme])

	useEffect(() => {
		localStorage.setItem(`@LojaPokemon:${theme}`, JSON.stringify(cart))
	}, [cart, theme])

	useEffect(() => {
		dispatch(identifyTheme(theme))
		dispatch(getAllPokemonFetch(theme))
	}, [dispatch, theme])

	return (
		<>
			<Header />
			<ContainerStore className="container store">
				{!loading && (
					<>
						<Catalog />
						<Cart />
					</>
				)}
			</ContainerStore>
			<Footer />
		</>
	)
}

export default Store
