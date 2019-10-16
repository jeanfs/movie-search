import axios from 'axios';

import { API_URL, API_KEY } from '../constants'

class Api {
  static get(uri) {
    return axios.get(`${API_URL}${uri}${API_KEY}`);
  }
}

export default Api;
