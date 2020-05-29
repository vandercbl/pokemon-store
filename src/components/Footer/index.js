import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { activeCart, activeCatalog } from '../../store/reducers/screen'

import {
	AiOutlineAppstore,
	AiOutlineShoppingCart,
	AiOutlineShop,
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
						<div className="btn-icon" onClick={handleCatalog}>
							<AiOutlineShop />
							<span>Catálogo</span>
						</div>
						<div className="btn-icon" onClick={handleCart}>
							<AiOutlineShoppingCart />
							<span>Carrinho</span>
						</div>
					</div>

					<div className="our-stores">
						<span className="action">
							<div className="btn-icon">
								<AiOutlineAppstore />
								<span>Parceiros</span>
							</div>

							<div className="stores">
								<Link to="/store/water">
									<i className="icon icon-water">
										<span>Water</span>
									</i>
								</Link>
								<Link to="/store/fire">
									<i className="icon icon-fire">
										<span>Fire</span>
									</i>
								</Link>
							</div>
						</span>
					</div>
				</div>
			</Content>
		</Container>
	)
}

export default Footer
