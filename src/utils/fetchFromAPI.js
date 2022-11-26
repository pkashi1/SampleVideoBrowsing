import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com/';



const options = {
    url: BASE_URL,
    params: { maxResults: '50' },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
        // '98f3f38d1dmsh7e4630c338013bbp10094bjsn3adc9c1afe4e',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data;
}
