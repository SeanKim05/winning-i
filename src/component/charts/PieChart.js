import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { UserAge } from '../../data/UserAge';

function PieChart() {
  const [userData] = useState({
    labels: UserAge.map(data => data.age),
    datasets: [
      {
        label: 'Users Gained',
        data: UserAge.map(data => data.value),
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
