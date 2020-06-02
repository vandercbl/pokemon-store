import api from '../../services/api'
import { listPokemon, newInfoDetails } from '../reducers/pokemon'
import { startLoad, endLoad } from '../reducers/loading'

export const getDetailsPokemonFetch = (name) => async (dispatch) => {
	dispatch(startLoad())
	// recebend o nome verificar se esse nome está dentro do jsno que tem os tipos baseados nos temas
	await api
		.get(`pokemon/${name}`)
		.then((response) => {
			const res = response.data

			const moves = res.moves.map((item) => {
				item = {
					move: {
						name: item.move.name,
					},
				}
				return item
			})
			const types = res.types.map((item) => {
				item = {
					type: {
						name: item.type.name,
					},
				}
				return item
			})
			const abilities = res.abilities.map((item) => {
				item = {
					ability: {
						name: item.ability.name,
					},
				}
				return item
			})
			const stats = res.stats.map((item) => {
				item = {
					stat: {
						name: item.stat.name,
					},
					base_stat: item.base_stat,
				}
				return item
			})

			const newObject = {
				height: res.height,
				weight: res.weight,
				sprites: {
					front_default: res.sprites.front_default,
				},
				name: res.name,
				moves: moves,
				types: types,
				abilities: abilities,
				stats: stats,
			}

			dispatch(newInfoDetails(newObject))
		})
		.catch((err) => {
			// mensagem de não encontrado
			console.log(err)
		})
	dispatch(endLoad())
}

export const getAllPokemonFetch = (type) => async (dispatch) => {
	dispatch(startLoad())

	const objectPoke = await api
		.get(`/type/${type}`)
		.then((response) => {
			const res = response.data.pokemon

			// add nova URL com info de imagem do pokemon, pois o json cerca de 250kb mais leve na nova URL para cada pokemon
			const pokeList = res.map((p) => {
				const newUrl = p.pokemon.url.replace('pokemon', 'pokemon-form')
				p = {
					pokemon: {
						name: p.pokemon.name,
						price: p.pokemon.name.length * 3,
						url: p.pokemon.url,
						newUrl: newUrl,
						type: type,
					},
				}
				return p
			})
			return pokeList
		})
		.catch((err) => {
			console.log(err)
		})

	const newObjectPoke = objectPoke.map(async (p, index) => {
		const urlImage = await api.get(p.pokemon.newUrl).then((response) => {
			return response.data.sprites.front_default
		})
		p = {
			pokemon: {
				name: p.pokemon.name,
				price: p.pokemon.price,
				url: p.pokemon.url,
				newUrl: p.pokemon.newUrl,
				urlImage: urlImage,
				type: type,
			},
		}
		return p
	})

	await Promise.all(newObjectPoke).then((values) => {
		dispatch(listPokemon(values))
	})

	dispatch(endLoad())
}
