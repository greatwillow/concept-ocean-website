import React, { Component } from 'react';
import { Treemap, Tooltip } from 'recharts';
import DemoTreemapItem from './DemoTreemapItem';
import './tree-map.css';

class TreeMap extends Component {
  render() {
    const data = [
      {
        name: 'Front-End',
        size: 50
      },
      {
        name: 'Mobile',
        size: 30
      },
      {
        name: 'Back-End',
        size: 20
      }
    ];

    const colors = ['#00404e', '#00144e', '#006600'];

    return (
      <div className="chart-wrapper">
        <Treemap
          width={500}
          height={250}
          data={data}
          isAnimationActive={true}
          nameKey="name"
          dataKey="size"
          ratio={1}
          content={<DemoTreemapItem bgColors={colors} />}
        />
      </div>
    );
  }
}

export default TreeMap;
