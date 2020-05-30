import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'

import Loading from './components/Loading'

import GlobalStyle from './styles/global'
import Routes from './routes'

function App() {
	const theme = useSelector((state) => state.theme.themeObject)
	const loading = useSelector((state) => state.loading.show)
	const modalShow = useSelector((state) => state.modal.show)

	return (
		<ThemeProvider theme={theme}>
			{loading && <Loading />}

			<GlobalStyle modal={modalShow} />
			<Routes />
		</ThemeProvider>
	)
}

export default App
