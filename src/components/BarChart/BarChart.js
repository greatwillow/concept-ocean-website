import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default class Demo extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '400px' }}>
        <ResponsiveContainer>
          <BarChart
            data={this.props.data}
            margin={{ top: 20, right: 20, bottom: 20, left: 30 }}
            layout="vertical"
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Bar dataKey="pv" fill="#40c4b4" radius={[0, 5, 5, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
