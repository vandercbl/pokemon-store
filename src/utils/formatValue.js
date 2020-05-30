export const formatValue = (value) =>
	Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
		value,
	)

export const formatValueNotCurrency = (value) =>
	Intl.NumberFormat('pt-BR', {
		style: 'decimal',
		minimumFractionDigits: 2,
	}).format(value)
