import React, { Component } from "react";
import { RadialBarChart, RadialBar, Label, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "18-24", uv: 60, amt: 31.47, pv: 2400, fill: "#8884d8" },
  { name: "25-29", uv: 50, amt: 26.69, pv: 4500, fill: "#83a6ed" },
  { name: "30-34", uv: 30, amt: 15.69, pv: -1398, fill: "#8dd1e1" },
  { name: "35-39", uv: 59, amt: 8.22, pv: 2800, fill: "#82ca9d" },
  { name: "40-49", uv: 48, amt: 8.63, pv: 1908, fill: "#a4de6c" },
  { name: "50+", uv: 62, amt: 2.63, pv: -2800, fill: "#d0ed57" },
  { name: "unknow", uv: 38, amt: 6.67, pv: 4800, fill: "#ffc658" }
];

const initialState = { data };

export default class RadialChart extends Component {
  static displayName = "RadialBarChartDemo";

  state = initialState;

  render() {
    const { data } = this.state;
    const style = {
      position: "absolute",
      lineHeight: "20px",
      right: "16%",
      bottom: "7%"
    };

    const label = {
      orientation: "outer"
    };

    return (
      <div style={{ width: "100%", height: "50vh" }}>
        <ResponsiveContainer>
          <RadialBarChart
            innerRadius={20}
            outerRadius={160}
            data={data}
            startAngle={-90}
            endAngle={-360}
          >
            <RadialBar background dataKey="pv">
              <Label position="insideBottomRight" />
            </RadialBar>
            <Legend
              iconSize={16}
              width={120}
              height={140}
              layout="vertical"
              wrapperStyle={style}
            />
            {/* <Tooltip/> */}
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
