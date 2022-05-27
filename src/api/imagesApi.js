import axios from "axios"

const imagesApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100',
    //baseURL: 'https://jsonplaceholder.typicode.com/photos'
});

export default imagesApi