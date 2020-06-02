import React, { useCallback, useRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { HeaderBar, Search, Input } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { filterPokemon } from '../../store/reducers/pokemon'

function Header() {
	const type = useSelector((state) => state.theme.themeObject)
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
				<Link to={`/store/${type.title}`} className="link-home-store">
					<div className="type-store">
						<i className="icon">
							<span></span>
						</i>
						<h1>PokeStore</h1>
					</div>
				</Link>

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
