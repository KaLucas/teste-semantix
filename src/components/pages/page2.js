import React from 'react';
import LineChart from './lineChart';
import './section.css';

export default class Page2 extends React.Component {
  render(){
    return(
      <div className="linechart-area">
        <h1>Page 2</h1>
        <div className="linechart">
          <h2>Line Chart 2 Data</h2>
          <LineChart />
        </div>
      </div>
    );
  }
}