import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'

// Themes
import water from './styles/themes/water'
import fire from './styles/themes/fire'

import GlobalStyle from './styles/global'
import Routes from './routes'

function App() {
	// const [theme, setTheme] = useState(water)
	// useEffect(() => {
	// 	setTheme(fire)
	// }, [])

	const theme = useSelector((state) => state.theme.themeObject)

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Routes />
		</ThemeProvider>
	)
}

export default App
