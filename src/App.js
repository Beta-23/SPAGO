import React from 'react';
import Jobs from './components/jobs/jobs-component';
import './App.css';

const testData = [
  {title: 'SWE 1', company: 'Google', }
]
function App() {
  return (
    <div className="App">
      <Jobs jobs={testData} />
    </div>
  );
}

export default App;
