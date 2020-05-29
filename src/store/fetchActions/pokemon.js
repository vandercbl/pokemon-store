import api from '../../services/api'
import { listPokemon } from '../reducers/pokemon'
import { startLoad, endLoad } from '../reducers/loading'

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
						url: p.pokemon.url,
						newUrl: newUrl,
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
				url: p.pokemon.url,
				newUrl: p.pokemon.newUrl,
				urlImage: urlImage,
			},
		}
		return p
	})

	await Promise.all(newObjectPoke).then((values) => {
		dispatch(listPokemon(values))
	})

	dispatch(endLoad())
}
