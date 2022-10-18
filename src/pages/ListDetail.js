import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SideMenu from '../component/SideMenu';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const ListDetail = () => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      setPosts(res.data.body);
      setLoading(false);
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
  height: 100rem;
  display: flex;
  flex-direction: column;

  h1 {
    color: white;
    font-size: 30px;
    margin: 2rem;
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
