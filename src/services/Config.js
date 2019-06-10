import axios from 'axios';

const BASE_URL = 'https://www.supervielle.com.ar/api/';

const API = axios.create ({
    baseURL: BASE_URL
})

export default API;