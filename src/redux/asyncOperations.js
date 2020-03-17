import axios from 'axios';
import actions from './actions';

// news.org password - iBGNVwJ&V2rte/#

const API_KEY = 'bc187ca4b7ee428a866c2b4755b11411';

const fetchNews = () => (dispatch) => {
	dispatch(actions.fetchRequest());

	axios
		.get(`http://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}`)
		.then(({ data: { articles } }) => {
			dispatch(actions.fetchSuccess(articles));
		})
		.catch((error) => dispatch(actions.fetchError(error)));
};

// auth: https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

const logIn = (username, password) => (dispatch) => {
	const AUTH_API_KEY = 'AIzaSyBfjyAe-7JZg9nAlRdZDQMO0KaAcbiqh-o';
	dispatch(actions.signInRequest());

	axios
		.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${AUTH_API_KEY}`, {
			email: username,
			password,
			returnSecureToken: true
		})
		.then(({ data }) => {
			dispatch(actions.signInSuccesss(data));
		})
		.catch((error) => dispatch(actions.signInError(error)));
};

export default { fetchNews, logIn };
