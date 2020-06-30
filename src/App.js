import React from 'react';
import Jobs from './components/jobs/jobs-component';
import './App.css';

const testData = [
  { title: 'SWE 1', company: 'Google' },
  { title: 'SWE 2', company: 'Facebook' },
  { title: 'SWE 3', company: 'Apple' },
  { title: 'SWE 4', company: 'Amazon' },
  { title: 'SWE 5', company: 'Expensify' }
]
function App() {
  return (
    <div className="App">
      <Jobs jobs={testData} />
    </div>
  );
}

export default App;
