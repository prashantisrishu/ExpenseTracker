import React  from 'react';
import {Pie} from 'react-chartjs-2';


export default function PieChartCrebit(props){



    const data = {
        labels: [
            'Income',
            'Salary',
            'Profit'
        ],
        datasets: [{
            // data: [300, 50, 100],
            data: props.data,
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    }
    return (
      <div>
        <Pie data={data} 
        height={150}  
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}/>
      </div>
    );
};

