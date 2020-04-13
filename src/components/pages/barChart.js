import React from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

export default class BarChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:{}
    }
  }

  componentDidMount() {
    this.getBarChartData();
  }

  getBarChartData() {
    axios.get('https://private-afe609-testefront.apiary-mock.com/anual-result')
      .then(res => {
        const barData = res.data;
        let barLabel = [];
        let barValue = [];
        barData.forEach(element => {
          barLabel.push(element.label);
          barValue.push(element.value);
        });
        this.setState({ 
          data: {
            labels: barLabel,
            datasets:[
              {
                data: barValue,
                backgroundColor: '#03A9F4'
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                ticks: {
                  fontColor: '#4A4A4A'
                },
                gridLines: {
                  display: false
                },
              }],
              yAxes: [{
                ticks: {
                  fontColor: '#4A4A4A'
                },
                gridLines: {
                  drawBorder: false
                },
              }]
            },
            plugins: {
              labels: false
            }
          }
      });
    })
  }

  render() {
    return(
        <Bar data={this.state.data} width={100} height={70} options={this.state.options} />
    );
  }
}