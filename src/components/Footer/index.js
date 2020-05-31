import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { activeCart, activeCatalog } from '../../store/reducers/screen'

import {
	AiOutlineAppstore,
	AiOutlineShoppingCart,
	AiOutlineShop,
	AiOutlineHome,
} from 'react-icons/ai'

import { Container, Content } from './styles'

function Footer() {
	const dispatch = useDispatch()

	const handleCart = useCallback(() => {
		dispatch(activeCart())
	}, [dispatch])

	const handleCatalog = useCallback(() => {
		dispatch(activeCatalog())
	}, [dispatch])

	return (
		<Container>
			<Content className="container">
				<div className="nav-tools">
					<div className="nav-mobile">
						<Link to="/" className="btn-icon">
							<AiOutlineHome />
							<span>Home</span>
						</Link>
						<div className="btn-icon xs-only" onClick={handleCatalog}>
							<AiOutlineShop />
							<span>Catálogo</span>
						</div>
						<div className="btn-icon xs-only" onClick={handleCart}>
							<AiOutlineShoppingCart />
							<span>Carrinho</span>
						</div>
						<div className="our-stores">
							<span className="action">
								<div className="btn-icon">
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
						</div>
					</div>
				</div>
			</Content>
		</Container>
	)
}

export default Footer
