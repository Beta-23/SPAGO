var CronJob = require('cron').CronJob;

const fetchGithub = require('./tasks/fetch-github');

// fetch Github jobs every minute via cron
var job = new CronJob('* * * * *', 
fetchGithub, null, true, 'America/Los_Angeles');
job.start();
console.log('You will see this message every minute');


