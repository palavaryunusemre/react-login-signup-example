import axios from 'axios';

const BASE_URL = "http://localhost:9090/dev/v1/auth/";

export const login = (userData) => {
    return axios.post(BASE_URL+'login', {
        userName: userData.userName,
        password: userData.password
    });
};

export const register = (userData) => {
    return axios.post(BASE_URL+'register', userData);
};

