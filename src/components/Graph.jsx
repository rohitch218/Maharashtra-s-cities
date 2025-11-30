import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getCitiesCount } from '../data/maharashtraData';

const Graph = () => {
  const data = getCitiesCount();

  return (
    <div className="card">
      <h2>Districts by Number of Cities</h2>
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
          <Tooltip />
          <Legend />
          <Bar dataKey="citiesCount" fill="#667eea" name="Number of Cities" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;

