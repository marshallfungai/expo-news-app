const api_url  = 'https://newsapi.org/v2';
const api_version = 'v2';
const api_key = '5a4d5ca48fed4fbcb73bb9cbc4bf1893';

const country_target = 'tr';

const newsAPI = 'https://newsapi.org/v2/top-headlines?' +'country='+ country_target +'&' +'apiKey='+api_key;

export {
    newsAPI,
    api_url,
    api_key,
    country_target
}