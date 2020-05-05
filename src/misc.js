import moment from 'moment'

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('tickets')
		if (!serializedState) return undefined
		return JSON.parse(serializedState)
	} catch (error) {
		return undefined
	}
}

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state)
		localStorage.setItem(serializedState)
	} catch (error) {
		// Handle an error
		console.error('An error occured while saving the state')
	}
}

export const minutesToHours = (mins = 0) => {
	const hours = (mins / 60) | 0
	const minutes = (mins % 60) | 0
	return [
		moment.utc().hours(hours).minutes(minutes).format('HHч MMм'),
		moment.utc().hours(hours).minutes(minutes).format('HH:MM')
	]
}

export const formatPrice = (price = '') => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'RUB',
		minimumFractionDigits: 2
	})

	return formatter.format(price)
}
