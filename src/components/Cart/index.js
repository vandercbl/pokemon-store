import React from 'react'

import { CartSummary, CartDetails, CartConclude } from './styles'

import testePokemon from '../../assets/teste-pokemon.png'

function Cart() {
	return (
		<CartSummary>
			<h2>Carrinho</h2>
			<CartDetails>
				<ul>
					<li>
						<div className="name-item">
							<img src={testePokemon} alt="Imagem do Pokemon" />
							<span>Nome do Pokemon</span>
						</div>
						<div className="quantity">
							<button>-</button>
							<span>1</span>
							<button>+</button>
						</div>
						<div className="price">
							<span className="currency">R$</span>
							<span className="cost">45,60</span>
						</div>
					</li>
					<li>
						<div className="name-item">
							<img src={testePokemon} alt="Imagem do Pokemon" />
							<span>Nome do Pokemon</span>
						</div>
						<div className="quantity">
							<button>-</button>
							<span>1</span>
							<button>+</button>
						</div>
						<div className="price">
							<span className="currency">R$</span>
							<span className="cost">45,60</span>
						</div>
					</li>
					<li>
						<div className="name-item">
							<img src={testePokemon} alt="Imagem do Pokemon" />
							<span>Nome do Pokemon</span>
						</div>
						<div className="quantity">
							<button>-</button>
							<span>1</span>
							<button>+</button>
						</div>
						<div className="price">
							<span className="currency">R$</span>
							<span className="cost">45,60</span>
						</div>
					</li>
				</ul>
			</CartDetails>
			<CartConclude>
				<div className="total">
					<span>Total</span>
					<div className="price">
						<span className="currency">R$</span>
						<span className="cost">45,60</span>
					</div>
				</div>
				<button className="buy">Finalizar</button>
			</CartConclude>
		</CartSummary>
	)
}

export default Cart
