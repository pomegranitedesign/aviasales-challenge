import {
	FETCH_TICKETS_SUCCESS,
	FETCH_TICKETS_START,
	FETCH_TICKETS_FAILURE,
	SET_SORT_BY,
	SET_FILTER
} from '../Actions/types'

const _initialState = {
	tickets: null,
	loading: false,
	error: null,
	filter: 'ALL',
	sortBy: ''
}

export default (state = _initialState, action) => {
	switch (action.type) {
		case SET_FILTER:
			return { ...state, filter: action.filter }

		case SET_SORT_BY:
			return { ...state, sortBy: action.sortBy }

		case FETCH_TICKETS_FAILURE:
			return { ...state, loading: false, error: action.error }

		case FETCH_TICKETS_SUCCESS:
			return { ...state, loading: false, tickets: action.tickets }

		case FETCH_TICKETS_START:
			return {
				...state,
				loading: true
			}

		default:
			return state
	}
}
