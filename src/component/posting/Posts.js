import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Posts(props) {
  const posts = props.posts;
  const navigate = useNavigate();
  const goPost = id => {
    navigate(`/detail/${id}`);
  };
  const postId = e => {
    goPost(e.target.id);
  };

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
            <div>{post.id}</div>
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
