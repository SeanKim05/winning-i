import React from 'react';
import styled from 'styled-components';
import BarChart from '../component/BarChart';
import LineChart from '../component/LineChart';
import PieChart from '../component/PieChart';
import SideMenu from '../component/SideMenu';

function Main() {
  return (
    <MainContainer>
      <SideMenu />
      <MainWrapper>
        <h1>Main Page</h1>
        <ChartContainer>
          <div className="chart_wrapper">
            <BarChart />
          </div>
          <div className="chart_wrapper">
            <LineChart />
          </div>
          <div className="chart_wrapper">
            <PieChart />
          </div>
        </ChartContainer>
        <ChartContainer>
          <div className="content_wrapper"></div>
        </ChartContainer>
      </MainWrapper>
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  margin-left: 10rem;
`;
const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  h1 {
    color: white;
    font-size: 30px;
    margin: 2rem;
  }
`;
const ChartContainer = styled.div`
  background-color: #ffffff30;
  border-radius: 10px;
  box-shadow: 5px 1px 5px #6b6e90;
  margin-left: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 20px;

  .chart_wrapper {
    width: 16rem;
    height: 17rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .content_wrapper {
    width: 100%;
    height: 25rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;
