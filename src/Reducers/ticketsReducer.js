import { FETCH_TICKETS_SUCCESS, FETCH_TICKETS_START, FETCH_TICKETS_FAILURE } from '../Actions/types'

const _initialState = {
	tickets: null,
	loading: false,
	error: null,
	filter: '',
	sortBy: ''
}

export default (state = _initialState, action) => {
	switch (action.type) {
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
