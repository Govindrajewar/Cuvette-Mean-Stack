import axios from 'axios';

const BACKEND_ORIGIN_URL = 'http://localhost:4000'

export const fetchJobs = async () => {
    try{
        const response = await axios.get(`${BACKEND_ORIGIN_URL}/job`);
        return response;
    } catch(error){
        throw new Error(`Error fetching jobs: ${error.message}`);
    }
}
