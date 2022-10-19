import React from 'react';
import SideMenu from '../component/SideMenu';
import styled from 'styled-components';

function Posting() {
  return (
    <MainContainer>
      <div className="main_container_width">
        <SideMenu />
        <ListWrapper>
          <h1>게시글 작성</h1>
          <ListDetailContainer>
            <div className="content_wrapper">
              <textarea placeholder="게시글 입력" />
            </div>
          </ListDetailContainer>
          <div className="detail_button">
            <button className="btn btn-default">완료</button>
          </div>
        </ListWrapper>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  .main_container_width {
    margin-left: 12rem;
    margin-right: 7rem;
  }
  @media screen and (max-width: 768px) {
    .main_container_width {
      margin-left: 6rem;
      margin-right: 0rem;
    }
  }
`;
const ListWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  h1 {
    color: white;
    font-size: 35px;
    font-weight: 600;
    margin: 2rem;
  }
  .detail_button {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;

    button {
      margin-right: 0.5rem;
      color: rgb(13, 110, 253);
      background-color: white;
      height: 3rem;
      width: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
    }
  }
`;
const ListDetailContainer = styled.div`
  background-color: #ffffff30;
  border-radius: 10px;
  box-shadow: 5px 1px 5px #6b6e90;
  margin-left: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;

  .content_wrapper {
    width: 100%;
    height: 40rem;
    display: flex;
    padding: 50px;
    align-items: flex-start;
    justify-content: center;
    font-size: 25px;
    textarea {
      padding: 1rem;
      font-size: 15px;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      border: none;
    }
  }
`;

export default Posting;
