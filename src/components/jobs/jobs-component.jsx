import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from '../job/job-component';

// Action stateless functional component for Jobs
const Jobs = ({Jobs}) => (
    <div className="jobs-list">
       <Typography variant="h1">
            SPAGO! Find Your Entry Level Engineering Job
       </Typography>
    </div>
);

export default Jobs;