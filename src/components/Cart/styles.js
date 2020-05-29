import styled, { css } from 'styled-components'

export const CartSummary = styled.div`
	border: 1px solid blue;
	min-width: 300px;

	display: none;

	${(props) =>
		props.show &&
		css`
			display: block;
		`}

	@media (min-width: 768px) {
		display: block;
		margin-left: 16px;
	}

	h2 {
		margin: 16px 0 0 16px;
	}
`
export const CartDetails = styled.div`
	padding: 16px;

	li {
		list-style: none;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px 0;

		& + li {
			border-top: 1px solid #ccc;
		}
	}

	.name-item {
		max-width: 70px;
		text-align: center;

		img {
			max-width: 40px;
			display: block;
			margin: 0 auto;
		}

		span {
			font-size: 0.8rem;
			display: block;
		}
	}

	.quantity {
		button {
			background: ${(props) => props.theme.colors.secundary};
			border: 0;
			color: #fff;
			border-radius: 100%;
			width: 24px;
			height: 24px;
			line-height: 22px;
			position: relative;

			&:nth-of-type(1) {
				left: 6px;
			}
			&:nth-of-type(2) {
				right: 6px;
			}
		}

		span {
			background: #fff;
			box-shadow: 0px 0px 2px 0px #ccc;
			display: inline-block;
			min-width: 40px;
			text-align: center;
			font-size: 0.9rem;
			padding: 1px 10px;
			font-weight: 500;
		}
	}

	.price {
		.currency {
			font-weight: 500;
			font-size: 0.7rem;
			margin-right: 2px;
		}
		.cost {
			font-weight: 500;
		}
	}
`
export const CartConclude = styled.div`
	.total {
		padding: 16px;
		margin-top: 8px;
		background: #30313c;
		color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 1.2rem;

		.price {
			.currency {
				font-weight: 500;
				font-size: 0.9rem;
				margin-right: 6px;
			}
			.cost {
				font-weight: 500;
				font-size: 1.2rem;
			}
		}
	}

	.buy {
		width: 100%;
		background: ${(props) => props.theme.colors.primary};
		color: #fff;
		border: 0;
		padding: 8px 16px;
		font-weight: 500;
		font-size: 1.4rem;
	}
`
