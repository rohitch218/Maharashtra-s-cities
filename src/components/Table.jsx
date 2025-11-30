import React, { useState } from 'react';
import { maharashtraData, getAllCities } from '../data/maharashtraData';
import './Table.css';

const Table = () => {
  const [viewMode, setViewMode] = useState('districts'); // 'districts' or 'cities'

  const districtsData = maharashtraData.map(item => ({
    district: item.district,
    cities: item.cities.join(', '),
    citiesCount: item.cities.length,
    population: item.population.toLocaleString('en-IN')
  }));

  const citiesData = getAllCities().map(item => ({
    city: item.city,
    district: item.district,
    population: item.population.toLocaleString('en-IN')
  }));

  const dataToDisplay = viewMode === 'districts' ? districtsData : citiesData;

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>{viewMode === 'districts' ? 'Districts & Cities' : 'All Cities'}</h2>
        <div className="toggle-buttons">
          <button
            className={viewMode === 'districts' ? 'active' : ''}
            onClick={() => setViewMode('districts')}
          >
            Districts View
          </button>
          <button
            className={viewMode === 'cities' ? 'active' : ''}
            onClick={() => setViewMode('cities')}
          >
            Cities View
          </button>
        </div>
      </div>
      
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {viewMode === 'districts' ? (
                <>
                  <th>District</th>
                  <th>Cities</th>
                  <th>No. of Cities</th>
                  <th>Population</th>
                </>
              ) : (
                <>
                  <th>City</th>
                  <th>District</th>
                  <th>Population</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {dataToDisplay.map((row, index) => (
              <tr key={index}>
                {viewMode === 'districts' ? (
                  <>
                    <td><strong>{row.district}</strong></td>
                    <td>{row.cities}</td>
                    <td>{row.citiesCount}</td>
                    <td>{row.population}</td>
                  </>
                ) : (
                  <>
                    <td><strong>{row.city}</strong></td>
                    <td>{row.district}</td>
                    <td>{row.population}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

