import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { UserData } from '../data/Data';
import { Chart as ChartJS } from 'chart.js/auto';

function PieChart() {
  const [userData, setUserData] = useState({
    labels: UserData.map(data => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: UserData.map(data => data.userVisited),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
      },
    ],
  });

  return <Pie data={userData} />;
}

export default PieChart;
