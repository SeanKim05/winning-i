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
          <h1>메인 페이지</h1>
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
            <div className="content_wrapper">
              <img src="https://images.unsplash.com/photo-1604931668626-ab49cb27d952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
            </div>
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
    height: 100vh;
  }
  @media screen and (max-width: 768px) {
    .main_container_width {
      margin-left: 4rem;
      height: 100vh;
    }
  }
`;
const MainWrapper = styled.div`
  width: 100%;
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
  padding: 13px;

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

  .content_wrapper {
    img {
      padding: 30px;
      height: 100%;
      width: 100%;
    }
  }
`;
