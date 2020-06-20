const fetch = require('node-fetch');
const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
// const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

// getAsync.then(console.log).catch(console.error);

// JSON data via url
const baseURL = 'https://jobs.github.com/positions.json'

async function fetchGithub() {
    let resultCount = 1, onPage = 0;
    const allJobs= [];

    while (resultCount > 0 ) {
        const res = await fetch(`${baseURL}?page=${onPage}`);
        const jobs = await res.json();
        allJobs.push(...jobs);
        resultCount = jobs.length;
        console.log('got', resultCount, 'jobs');
        onPage++
    }  
    console.log('got', allJobs.length, 'Total Jobs!');
    const success = await setAsync('github', JSON.stringify(allJobs));
    console.log({success});
}
// Calling results
// fetchGithub();

module.exports = fetchGithub;