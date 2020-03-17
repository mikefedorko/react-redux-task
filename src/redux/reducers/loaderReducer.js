import types from '../actionTypes';

export default function loaderReducer(state = false, { type }) {
	switch (type) {
		case types.FETCH_REQUEST:
			return true;
		case types.FETCH_SUCCESS:
		case types.FETCH_ERROR:
			return false;
		default:
			return state;
	}
}
