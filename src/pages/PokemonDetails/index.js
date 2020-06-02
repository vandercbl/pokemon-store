/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Cart from '../../components/Cart'
import Details from '../../components/Details'

// redux
import { identifyTheme } from '../../store/reducers/theme'
import { getLocalStorage } from '../../store/reducers/cart'
import { activeDetail } from '../../store/reducers/screen'
import { clearPokemonFilter } from '../../store/reducers/pokemon'
import { getDetailsPokemonFetch } from '../../store/fetchActions/pokemon'

// styles
import { Container } from './styles'

function PokemonDetails(props) {
	const theme = props.match.params.type
	const namePokemon = props.match.params.pokemon
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
		dispatch(clearPokemonFilter())
		dispatch(activeDetail())
		dispatch(getDetailsPokemonFetch(namePokemon))
	}, [dispatch, namePokemon, theme])

	return (
		<>
			<Header />
			<Container className="container details">
				{!loading && (
					<>
						<Details type={theme}></Details>
						<Cart />
					</>
				)}
			</Container>
			<Footer />
		</>
	)
}

export default PokemonDetails
