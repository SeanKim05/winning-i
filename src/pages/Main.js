import React from 'react';
import styled from 'styled-components';
import BarChart from '../component/charts/BarChart';
import LineChart from '../component/charts/LineChart';
import PieChart from '../component/charts/PieChart';
import SideMenu from '../component/SideMenu';

function Main() {
  return (
    <MainContainer>
      <div className="main_container_width">
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
      </div>
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  .main_container_width {
    margin-left: 10rem;
  }
  @media screen and (max-width: 768px) {
    .main_container_width {
      margin-left: 4rem;
    }
  }
`;
const MainWrapper = styled.div`
  width: 100%;
  height: 100rem;
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
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;
