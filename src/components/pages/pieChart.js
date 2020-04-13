import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-labels';
import axios from 'axios';

export default class PieChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:{}
    }
  }

  componentDidMount() {
    this.getPieChartData();
  }

  getPieChartData() {
    axios.get('https://private-afe609-testefront.apiary-mock.com/anual-percentage')
      .then(res => {
        const pieData = res.data;
        let pieLabel = [];
        let pieValue = [];
        pieData.forEach(element => {
          pieLabel.push(element.label);
          pieValue.push(element.value);
        });
        this.setState({ 
          data: {
            labels: pieLabel,
            datasets:[
              {
                data: pieValue,
                borderWidth: 0,
                backgroundColor: ['#DBECF8', '#2C82BE', '#32B88B']
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
              align: 'end',
              labels: {
                padding: 15,
                backgroundColor: ['#ABE1FA', '#303F9F', '#2AB92E'],
                usePointStyle:true,
                fontColor: '#4A4A4A',
                boxWidth: 7
              }
            },
            scales: {
              xAxes: [{
                ticks: {
                  display: false
                },
                gridLines: {
                  display: false,
                  drawBorder: false
                },
              }],
              yAxes: [{
                ticks: {
                  display: false
                },
                gridLines: {
                  display: false,
                  drawBorder: false
                },
              }]
            },
            tooltips: {
              callbacks: {
                label: function(tooltipItem, data) {
                  return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
                }
              }
            },
            plugins: {
              labels: {
                fontColor: ['#303F9F', '#ffffff', '#ffffff']
              }
            }
          }
      });
    })
  }

  render() {
    return(
        <Pie data={this.state.data} width={100} height={60} options={this.state.options} />
    );
  }

}