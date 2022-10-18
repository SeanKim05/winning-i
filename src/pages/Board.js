import React from 'react';
import SideMenu from '../component/SideMenu';
import styled from 'styled-components';

function Board() {
  return (
    <MainContainer>
      <div className="main_container_width">
        <SideMenu />
        <MainWrapper>
          <h1>Board Page</h1>
        </MainWrapper>
      </div>
    </MainContainer>
  );
}

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

export default Board;
