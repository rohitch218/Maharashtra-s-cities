import React from 'react';
import Graph from './components/Graph';
import PopulationChart from './components/PopulationChart';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Maharashtra Districts & Cities</h1>
        <p>Explore the districts and cities of Maharashtra with interactive charts and tables</p>
      </div>
      
      <div className="content">
        <Graph />
        <PopulationChart />
      </div>
      
      <Table />
    </div>
  );
}

export default App;

