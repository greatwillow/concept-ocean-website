import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const colors = [
  "red",
  "green",
  "pink",
  "red",
  "green",
  "pink",
  "red",
  "green",
  "pink",
  "red",
  "green",
  "pink"
];

const data = [
  {
    name: "food",
    uv: 2000,
    pv: 2013,
    amt: 4500,
    time: 1,
    uvError: [100, 50],
    pvError: [110, 20]
  },
  { name: "cosmetic", uv: 3300, pv: 2000, amt: 6500, time: 2, uvError: 120, pvError: 50 },
  {
    name: "storage",
    uv: 3200,
    pv: 1398,
    amt: 5000,
    time: 3,
    uvError: [120, 80],
    pvError: [200, 100]
  },
  { name: "digital", uv: 2800, pv: 2800, amt: 4000, time: 4, uvError: 100, pvError: 30 }
];

const initialState = {
  data
};

export default class Demo extends Component {
  static displayName = "BarChartDemo";

  state = initialState;

  render() {
    const { data, data01, data02 } = this.state;

    return (
      <div style={{ width: "100%", height: "30vh" }}>
        <ResponsiveContainer>
          <BarChart
            width={700}
            height={100}
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            layout="vertical"
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Bar
              dataKey="uv"
              fill="#40c4b4"
              maxBarSize={20}
              label
              radius={[0, 5, 5, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
