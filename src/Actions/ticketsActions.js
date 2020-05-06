import axios from 'axios'

import {
	FETCH_TICKETS_FAILURE,
	FETCH_TICKETS_START,
	FETCH_TICKETS_SUCCESS,
	SET_SORT_BY,
	SET_FILTER
} from './types'

export const setFilter = (filter = '') => ({ type: SET_FILTER, filter })

export const setSortBy = (sortBy = '') => ({ type: SET_SORT_BY, sortBy })

export const fetchTickets = (filter = '', sortBy = '') => async (dispatch) => {
	dispatch({ type: FETCH_TICKETS_START })

	const searchID = await axios.get(
		'https://front-test.beta.aviasales.ru/search'
	)

	let response = await axios.get(
		`https://front-test.beta.aviasales.ru/tickets?searchId=${searchID.data
			.searchId}`
	)

	if (response.status === 404)
		response = await axios.get(
			`https://front-test.beta.aviasales.ru/tickets?searchId=${searchID
				.data.searchId}`
		)

	if (response.status === 200)
		dispatch({
			type: FETCH_TICKETS_SUCCESS,
			tickets: response.data.tickets
		})
	else
		dispatch({
			type: FETCH_TICKETS_FAILURE,
			error: 'There was an error fetching tickets'
		})
}
