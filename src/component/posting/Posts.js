import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Posts({ posts, loading }) {
  const navigate = useNavigate();
  const goPost = id => {
    navigate(`/detail/${id}`);
  };
  const postId = e => {
    goPost(e.target.id);
    // console.log(e.target);
  };

  if (loading) {
    return <h2>Loading</h2>;
  }
  console.log(posts);
  return (
    <PostContainer>
      <ul className="list-group mb-4">
        {posts.map(post => (
          <li
            id={post.id}
            key={post.id}
            className="list-group-item"
            onClick={e => {
              postId(e);
            }}
          >
            <div> {post.id}</div>
            {post.title}
          </li>
        ))}
      </ul>
    </PostContainer>
  );
}

export default Posts;

const PostContainer = styled.div`
  li {
    display: flex;
    div:first-child {
      margin-right: 1.5rem;
    }
  }
`;
