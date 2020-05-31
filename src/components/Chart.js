import React, { Component } from 'react';
import { Bar} from 'react-chartjs-2';

class Chart extends Component {
    chartData(){
        return({
                labels: this.props.labels,
                datasets:[
                    {
                        data: this.props.data,
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)'
                        ]
                    }
                ]
        })
    }
    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.chartData()}
                    options={{ 
                        title:{
                            display:true,
                            text:'Valor del dolar',
                            color:'white',
                            fontSize:25
                        },
                        legend:{
                            display:false
                        }
                    }}
                />
            </div>
        );
    }
}
export default Chart;