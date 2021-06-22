const { default: axios } = require("axios");

function getDataByPromise () {
    axios.get('https://api.github.com/users/ptit9x')
        .then (function (response) {
            console.log(response)
        })
        .catch (function (error) {
            console.log(error)
        });
}
// getDataByPromise();

async function getDataByAsync () {
    try {
        const response = await axios.get('https://api.github.com/users/ptit9x');
        console.log(response);
    }
    catch (error) {
        console.error(error);
    }
}
// getDataByAsync();