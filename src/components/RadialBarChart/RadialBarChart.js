import React, { Component } from 'react';
import {
  PolarAngleAxis,
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer
} from 'recharts';

class RadialChart extends Component {
  constructor() {
    super();
    this.state = {
      chartWidth: null,
      chartHeight: null,
      chartDisplay: null,
      legendWidth: null,
      legendSpacing: null
    };
  }

  // ============================ LIFECYCLE METHODS =============================
  componentDidMount() {
    this.updateChartLayout();
    window.addEventListener('resize', this.updateChartLayout);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateChartLayout);
  }

  // ============================ RESPONSIVE DIMENSIONS =============================
  updateChartLayout = () => {
    if (window.innerWidth >= 600) {
      this.setState({
        chartWidth: '60%',
        chartHeight: '300px',
        chartDisplay: 'row',
        legendWidth: '40%',
        legendSpacing: '10px'
      });
    } else {
      this.setState({
        chartWidth: '100%',
        chartHeight: '400px',
        chartDisplay: 'column',
        legendWidth: '100%',
        legendSpacing: '0px'
      });
    }
  };

  // ============================ RENDERING =============================
  render() {
    let newData = this.props.data.map(item => {
      return item;
    });
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: this.state.chartDisplay,
          height: this.state.chartHeight
        }}
      >
        <div
          style={{
            height: '100px',
            width: this.state.legendWidth
          }}
        >
          {/* ============================ MAPPING OVER ITEMS ============================= */}

          {newData.reverse().map(item => {
            return (
              <div
                key={item.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '50px',
                  padding: this.state.legendSpacing
                }}
              >
                <div
                  style={{
                    width: '20px',
                    height: '15px',
                    backgroundColor: item.fill
                  }}
                />
                <div style={{ marginLeft: '10px' }}>{item.name}</div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            width: this.state.chartWidth,
            height: '300px'
          }}
        >
          {/* ============================ RENDERING RADIAL CHART ============================= */}

          <ResponsiveContainer width={'100%'} height={300}>
            <RadialBarChart
              innerRadius={20}
              outerRadius={120}
              data={this.props.data}
              startAngle={265}
              endAngle={-85}
            >
              <PolarAngleAxis type="number" domain={[0, 100]} />
              <RadialBar background dataKey="pv" />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default RadialChart;
