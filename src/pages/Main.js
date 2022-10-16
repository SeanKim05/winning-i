import React from 'react';
import styled from 'styled-components';

function Main() {
  return (
    <MainContainer>
      <div>
        <p>Welcome!</p>
      </div>
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  color: black;
`;
