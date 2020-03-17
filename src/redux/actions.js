import types from './actionTypes';

// Fetch: News
const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = news => ({
  type: types.FETCH_SUCCESS,
  payload: news,
});

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

// Auth: Log in
const signInRequest = () => ({
  type: types.LOG_IN_REQUEST,
});
const signInSuccesss = data => ({
  type: types.LOG_IN_SUCCESS,
  payload: data,
});
const signInError = error => ({
  type: types.LOG_IN_ERROR,
  payload: error,
});

export default {
  fetchRequest,
  fetchSuccess,
  fetchError,
  signInRequest,
  signInSuccesss,
  signInError,
};
