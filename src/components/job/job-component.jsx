import React from 'react';

// Action stateless functional component for Job
const Job = ({job}) => (
    <div className={'job'}>
       {job.title}
       {job.company}
    </div>
);

export default Job;