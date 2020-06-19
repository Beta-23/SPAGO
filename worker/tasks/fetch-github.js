const fetch = require('node-fetch');

// JSON data
const baseURL = 'https://jobs.github.com/positions.json'

module.exports = async function fetchGithub () {
    const res = await fetch(baseURL);
    const jobs = await res.json();
    console.log(jobs.length);
    console.log({jobs});
}

module.exports();