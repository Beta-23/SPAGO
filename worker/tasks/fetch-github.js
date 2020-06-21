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

    // fetch all job pages
    while (resultCount > 0 ) {
        const res = await fetch(`${baseURL}?page=${onPage}`);
        const jobs = await res.json();
        allJobs.push(...jobs);
        resultCount = jobs.length;
        console.log('got', resultCount, 'jobs');
        onPage++;
    };

    console.log('got', allJobs.length, 'Total Jobs!')

    // filter related jobs algorithm
    const jrJobs = allJobs.filter(job => {
        const jobTitle = job.title.toLowerCase();

        // logic
        if (jobTitle.includes('senior') || 
            jobTitle.includes('manager') ||
            jobTitle.includes('sr.') ||
            jobTitle.includes('architect')
        ) {
           return false;
        }
        return true;
    })

    console.log('Data filtered to', jrJobs.length);

    // set in redis database
    const success = await setAsync('github', JSON.stringify(jrJobs));
    console.log({success});
};

// Calling results
// fetchGithub();

module.exports = fetchGithub;