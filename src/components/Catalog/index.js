import React from 'react'

import testePokemon from '../../assets/teste-pokemon.png'

import { Content } from './styles'

function Catalog() {
	return (
		<Content>
			<ul>
				<li>
					<img src={testePokemon} alt="Nome do Pokemon" />
					<p className="name">Nome do Pokemon</p>
					<p className="price">R$ 45,60</p>
					<button>Comprar</button>
				</li>
				<li>
					<img src={testePokemon} alt="Nome do Pokemon" />
					<p className="name">Nome do Pokemon</p>
					<p className="price">R$ 45,60</p>
					<button>Comprar</button>
				</li>
				<li>
					<img src={testePokemon} alt="Nome do Pokemon" />
					<p className="name">Nome do Pokemon</p>
					<p className="price">R$ 45,60</p>
					<button>Comprar</button>
				</li>
				<li>
					<img src={testePokemon} alt="Nome do Pokemon" />
					<p className="name">Nome do Pokemon</p>
					<p className="price">R$ 45,60</p>
					<button>Comprar</button>
				</li>
				<li>
					<img src={testePokemon} alt="Nome do Pokemon" />
					<p className="name">Nome do Pokemon</p>
					<p className="price">R$ 45,60</p>
					<button>Comprar</button>
				</li>
				<li>
					<img src={testePokemon} alt="Nome do Pokemon" />
					<p className="name">Nome do Pokemon</p>
					<p className="price">R$ 45,60</p>
					<button>Comprar</button>
				</li>
				<li>
					<img src={testePokemon} alt="Nome do Pokemon" />
					<p className="name">Nome do Pokemon</p>
					<p className="price">R$ 45,60</p>
					<button>Comprar</button>
				</li>
				<li>
					<img src={testePokemon} alt="Nome do Pokemon" />
					<p className="name">Nome do Pokemon</p>
					<p className="price">R$ 45,60</p>
					<button>Comprar</button>
				</li>
			</ul>
		</Content>
	)
}

export default Catalog
