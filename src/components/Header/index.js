import React, { useCallback, useRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import { HeaderBar, Search, Input } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { filterPokemon } from '../../store/reducers/pokemon'

function Header() {
	const searchTerm = useSelector((state) => state.pokemon.filter)
	const searchInput = useRef(null)
	const dispatch = useDispatch()

	const handleSearch = useCallback(
		(e) => {
			dispatch(filterPokemon(e.target.value.toLowerCase()))
		},
		[dispatch],
	)

	function handleIconSearch() {
		searchInput.current.focus()
	}

	return (
		<HeaderBar>
			<div className="container">
				<div className="type-store">
					<i className="icon">
						<span></span>
					</i>
					<h1>PokeStore</h1>
				</div>

				<Search>
					<Input
						type="text"
						name="search"
						value={searchTerm}
						onChange={handleSearch}
						placeholder="busca"
						ref={searchInput}
					/>
					<AiOutlineSearch onClick={handleIconSearch} />
				</Search>
			</div>
		</HeaderBar>
	)
}

export default Header
