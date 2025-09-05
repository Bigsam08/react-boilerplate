/**
 * This creates an Axios instance with the base URL and interceptors for handling authentication.
 */

import axios from 'axios';

const authAxios = axios.create({
    baseURL: import.meta.env.VITE_AUTH_API_URL,
    withCredentials: true,
});

export default authAxios;