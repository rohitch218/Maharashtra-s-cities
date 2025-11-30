import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getCitiesCount } from '../data/maharashtraData';

const PopulationChart = () => {
  const data = getCitiesCount().map(item => ({
    district: item.district,
    population: (item.population / 1000000).toFixed(2) // Convert to millions
  }));

  return (
    <div className="card">
      <h2>Districts by Population (in Millions)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="district" 
            angle={-45}
            textAnchor="end"
            height={100}
            interval={0}
          />
          <YAxis />
          <Tooltip formatter={(value) => `${value}M`} />
          <Legend />
          <Bar dataKey="population" fill="#764ba2" name="Population (Millions)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PopulationChart;

