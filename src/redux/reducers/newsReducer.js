import types from '../actionTypes';

export default function newsReducer(state = [], { type, payload }) {
	switch (type) {
		case types.FETCH_SUCCESS:
			return payload;
		default:
			return state;
	}
}
