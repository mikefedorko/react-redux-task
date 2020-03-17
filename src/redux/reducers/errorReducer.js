import types from '../actionTypes';

export default function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST:
    case types.FETCH_SUCCESS:
      return null;

    case types.FETCH_ERROR:
      return payload;

    case types.LOG_IN_ERROR:
      return payload;

    default:
      return state;
  }
}
