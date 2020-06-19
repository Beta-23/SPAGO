import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from '../job/job-component';

// Action stateless functional component for Jobs
const Jobs = ({jobs}) => (
    <div className="job">
       <Typography variant="h1">
            SPAGO! Find Your Entry Level Engineering Job
       </Typography>
       {
           jobs.map(
               job => <Job job={job} />
           )
       }
    </div>
);

export default Jobs;