import React from 'react'

import { Container } from './styles'

function Message({ children, show }) {
	return <Container show={show}>{children}</Container>
}

export default Message
