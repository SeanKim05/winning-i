import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SideMenu from '../component/SideMenu';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const ListDetail = () => {
  const [posts, setPosts] = useState();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      setPosts(res.data.body);
    };
    fetchPosts();
  }, []);

  return (
    <ListContainer>
      <div className="main_container_width">
        <SideMenu />
        <ListWrapper>
          <h1>Detail</h1>
          <ListDetailContainer>
            <div className="content_wrapper">{posts}</div>
          </ListDetailContainer>
        </ListWrapper>
      </div>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  .main_container_width {
    margin-left: 10rem;
  }
  @media screen and (max-width: 768px) {
    .main_container_width {
      margin-left: 4rem;
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
      height: 5rem;
      width: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
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
  }
`;
