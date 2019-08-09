import React, {useState} from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import Display from './Components/Display/Display'
import './App.css';

function App() {
  const [atBat, setAtBat] = useState({hits: 0, strikes: 0, balls: 0, fouls: 0})
  return (
    <div className="App">
      <Display atBat={atBat} data-testid="display"/>
      <Dashboard atBat={atBat} setAtBat={setAtBat} data-testid="dashboard" />
    </div>
  );
}

export default App;
