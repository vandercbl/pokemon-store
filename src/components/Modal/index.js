import React from 'react'
import { useSelector } from 'react-redux'
// import { endModal } from '../../store/reducers/modal'

import { Container, Content } from './styles'

function Modal({ children }) {
	const modalShow = useSelector((state) => state.modal.show)
	// const dispatch = useDispatch()

	// const handleClose = useCallback(() => {
	// 	dispatch(endModal())
	// }, [dispatch])

	return (
		<Container show={modalShow}>
			<div className="overlay-close"></div>
			<Content>{children}</Content>
		</Container>
	)
}

export default Modal
