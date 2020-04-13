import React from 'react';
import BarChart from './barChart';
import PieChart from './pieChart';
import './section.css';

export default class Page1 extends React.Component {
  render() {
    return(
      <div> 
        <h1>Page 1</h1>
        <div className="flex">
          <div className="chart barschart">
            <h2>Bars Chart</h2>
            <BarChart />
          </div>
          <div className="chart piechart">
            <h2>Pie Chart</h2>
            <PieChart />
          </div>
        </div>
      </div>
    );
  }
}