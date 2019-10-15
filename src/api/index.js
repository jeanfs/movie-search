import axios from 'axios';

const BASE_URL = "http://www.omdbapi.com";
const API_KEY = "&apikey=afcc9cdf";

class Api {
    static get(uri) {
        return axios.get(`${BASE_URL}${uri}${API_KEY}`);
    }
}

export default Api;