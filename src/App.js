import React from 'react';
import Jobs from './components/jobs/jobs-component';
import './App.css';

const testData = [
  {title: 'SWE 1', company: 'Google' },
  {title: 'SWE 2', company: 'Facebook' },
  {title: 'SWE 3', company: 'Apple' }
]
function App() {
  return (
    <div className="App">
      <Jobs jobs={testData} />
    </div>
  );
}

export default App;
