const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:3001'
  : 'https://grimoriumverum.herokuapp.com';

export default {
  URL_BACKEND,
};
