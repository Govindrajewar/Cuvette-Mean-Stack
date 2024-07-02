import axios from 'axios';

const BACKEND_ORIGIN_URL = 'http://localhost:4000'


export const Login = async (email, password) => {
    try {
        const response = await axios.post(`${BACKEND_ORIGIN_URL}/user/login`, { email, password });
        return response.data;
    } catch (error) {
        throw new Error(`Error logging in: ${error.message}`);
    }
}


export const Register = async (name, email, password) => {
    try {
        const response = await axios.post(`${BACKEND_ORIGIN_URL}/user/register`, { name, email, password });
        return response.data;
    } catch (error) {
        throw new Error(`Error registering: ${error.message}`);
    }
}

