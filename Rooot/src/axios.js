import axios from 'axios';
// requests will go to TMDB directly 
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

export default instance;