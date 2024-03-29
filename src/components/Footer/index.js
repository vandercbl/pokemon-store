import React, { useCallback, useMemo, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
	activeCart,
	activeCatalog,
	ourStoresTrue,
	ourStoresFalse,
} from '../../store/reducers/screen'

import {
	AiOutlineAppstore,
	AiOutlineShoppingCart,
	AiOutlineShop,
	AiOutlineHome,
} from 'react-icons/ai'

import { Container, Content, OurStores } from './styles'

function Footer() {
	const ourStoresShow = useSelector((state) => state.screen.ourStores)
	const type = useSelector((state) => state.theme.themeObject.title)
	const cart = useSelector((state) => state.cart.typeStore[type])
	const screen = useSelector((state) => state.screen)
	const dispatch = useDispatch()
	const location = useLocation()

	const totalCart = useMemo(() => {
		let sum = 0
		const totalArray = cart.map((item) => item.quantity)
		if (totalArray.length > 0) {
			sum = totalArray.reduce((total, quantity) => total + quantity)
		}
		return sum
	}, [cart])

	useEffect(() => {
		const hash = location.hash
		if (hash === '#cart') {
			dispatch(activeCart())
		} else {
			dispatch(activeCatalog())
		}
	}, [dispatch, location])

	const handleCart = useCallback(() => {
		dispatch(activeCart())
	}, [dispatch])

	const handleCatalog = useCallback(() => {
		dispatch(activeCatalog())
	}, [dispatch])

	const handleOurStores = useCallback(() => {
		if (ourStoresShow) {
			dispatch(ourStoresFalse())
		} else {
			dispatch(ourStoresTrue())
		}
	}, [dispatch, ourStoresShow])

	return (
		<Container>
			<Content className="container">
				<div className="nav-tools">
					<div className="nav-mobile">
						<Link to="/" className="btn-icon" id="btn-home">
							<AiOutlineHome />
							<span>Home</span>
						</Link>
						<Link
							to={{ pathname: `/store/${type}`, hash: '#catalog' }}
							className={`btn-icon xs-only ${screen.catalogShow}`}
							onClick={handleCatalog}
						>
							<AiOutlineShop />
							<span>Catálogo</span>
						</Link>
						<Link
							to={{ pathname: `/store/${type}`, hash: '#cart' }}
							className={`btn-icon xs-only ${screen.cartShow}`}
							onClick={handleCart}
						>
							<AiOutlineShoppingCart />
							<div className="total-cart">{totalCart}</div>
							<span>Carrinho</span>
						</Link>
						<OurStores onClick={handleOurStores} show={ourStoresShow}>
							<span className="action">
								<div className={`btn-icon ${screen.ourStores}`}>
									<AiOutlineAppstore />
									<span>Parceiros</span>
								</div>

								<div className="stores">
									<Link to="/store/dragon">
										<i className="icon icon-dragon">
											<span>Dragon</span>
										</i>
									</Link>
									<Link to="/store/electric">
										<i className="icon icon-electric">
											<span>Electric</span>
										</i>
									</Link>
									<Link to="/store/fire">
										<i className="icon icon-fire">
											<span>Fire</span>
										</i>
									</Link>
									<Link to="/store/flying">
										<i className="icon icon-flying">
											<span>Flying</span>
										</i>
									</Link>
									<Link to="/store/grass">
										<i className="icon icon-grass">
											<span>Grass</span>
										</i>
									</Link>
									<Link to="/store/ground">
										<i className="icon icon-ground">
											<span>Ground</span>
										</i>
									</Link>
									<Link to="/store/ice">
										<i className="icon icon-ice">
											<span>Ice</span>
										</i>
									</Link>
									<Link to="/store/steel">
										<i className="icon icon-steel">
											<span>Steel</span>
										</i>
									</Link>
									<Link to="/store/water">
										<i className="icon icon-water">
											<span>Water</span>
										</i>
									</Link>
								</div>
							</span>
						</OurStores>
					</div>
				</div>
			</Content>
		</Container>
	)
}

export default Footer
