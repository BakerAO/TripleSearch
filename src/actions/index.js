import axios from 'axios';

const API_KEY = 'AIzaSyB6CDWuIcIEmSaIg7nFz0Zt7HAyAZYT--w';
const CX = '009596185749625735805:sp0brtpgh0m';
const searchTerm = 'dogs';
const ROOT_URL = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&amp;cx=${CX}&amp;q=${searchTerm}`;

export const FETCH_GOOGLE = 'FETCH_GOOGLE';

export function fetchGoogle(term){
    const url = `${ROOT_URL}`;
    const results = axios.get(url);

    return {
        type: FETCH_GOOGLE,
        payload: results
    };
}