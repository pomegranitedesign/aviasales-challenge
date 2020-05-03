import axios from 'axios'

import { FETCH_TICKETS_FAILURE, FETCH_TICKETS_START, FETCH_TICKETS_SUCCESS } from './types'

export const fetchTickets = (filter = '', sortBy = '', searchID = '') => async (dispatch) => {
	dispatch({ type: FETCH_TICKETS_START })
	try {
		const res = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=2h542`)
		dispatch({ type: FETCH_TICKETS_SUCCESS, tickets: res.data.tickets })
	} catch (error) {
		dispatch({ type: FETCH_TICKETS_FAILURE, error })
	}
}
