const { default: axios } = require("axios");

const promise1 = axios.get('https://api.github.com/users/ptit9x')
const promise2 = axios.get('https://api.github.com/users/google')

Promise.all([promise1, promise2]) 
    .then (function (response) {
        console.log(response);
    });