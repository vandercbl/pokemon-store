import React from 'react'

import { ContainerHome } from './styles'

function Home() {
	return (
		<>
			<ContainerHome>
				<div className="container">
					<h1>Home</h1>
					<div className="links-stores">
						<a href="/" className="fire" title="Fire">
							<i className="bg-store"></i>
						</a>
						<a href="/" className="water" title="Water">
							<i className="bg-store"></i>
						</a>
					</div>
				</div>
			</ContainerHome>
		</>
	)
}

export default Home
