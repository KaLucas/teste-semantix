import React from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

export default class LineChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: {
        labels : [],
        datasets: []
      }
    }
  }

  componentDidMount() {
    this.getLineChartData();
  }

  getLineChartData() {
    axios.get('https://private-afe609-testefront.apiary-mock.com/time-data')
    .then(res => {
      const lineToday = res.data.today;
      const lineYesterday = res.data.yesterday;
      let lineTodayLabel = [];
      let lineTodayValue = [];
      let lineYesterdayValue = [];
      lineToday.forEach(element => {
        lineTodayLabel.push(element.label);
        lineTodayValue.push(element.value);
      });
      lineYesterday.forEach(element => {
        lineYesterdayValue.push(element.value);
      });
      this.setState({
        data: {
          labels: lineTodayLabel,
          datasets:[
            {
              data: lineTodayValue,
              backgroundColor: '#303F9F',
              fill: false,
              label: 'Today',
              borderColor: '#303F9F',
              lineTension: 0,
              pointBackgroundColor: '#ffffff',
              pointBorderWidth: 2
            },
            {
              data: lineYesterdayValue,
              backgroundColor: '#BF3FFF',
              fill: false,
              label: 'Yesterday',
              borderColor: '#BF3FFF',
              lineTension: 0,
              pointBackgroundColor: '#ffffff',
              pointBorderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio:false,
          legend: {
            align: 'end',
            labels: {
              padding: 30,
              backgroundColor: ['#303F9F', '#BF3FFF'],
              usePointStyle:true,
              fontColor: '#4A4A4A',
              boxWidth: 5
            }
          },
          tooltips: {
            enabled: false
          }
        }
      });
    })
  }

  render() {
    return(
        <Line data={this.state.data} options={this.state.options} />
    );
  }
}