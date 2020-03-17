// News
const getNews = (state) => state.news;
const getLoader = (state) => state.loader;
const getError = (state) => state.error;
// Auth
const getAuth = (state) => state.session.isAuthenticated;
const getUser = (state) => state.session.user;

export default { getNews, getLoader, getError, getAuth, getUser };
