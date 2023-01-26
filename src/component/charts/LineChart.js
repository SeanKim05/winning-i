import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { UserData } from '../../data/Data';

function LineChart() {
  const [userData] = useState({
    labels: UserData.map(data => data.year),
    datasets: [
      {
        label: '방문자 수',
        data: UserData.map(data => data.userVisited),
        backgroundColor: 'red',
        borderColor: 'red',
      },
    ],
  });
  return <Line data={userData} />;
}

export default LineChart;
