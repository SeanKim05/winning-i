import { useState, useEffect } from 'react';
import SideMenu from '../component/SideMenu';
import styled from 'styled-components';
import axios from 'axios';
import Posts from '../component/posting/Posts';
import { Pagination } from '../component/posting/Pagination';

function List() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfLastPosts = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPosts - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPosts);

  const paginate = pagNumber => setCurrentPage(pagNumber);

  return (
    <MainContainer>
      <div className="main_container_width">
        <SideMenu />
        <MainWrapper>
          <div className="container mt-5">
            <h1 className="test_primary mb-3">게시글 목록</h1>
            <Posts posts={currentPosts} laoding={loading} />
            <section className="bottom_buttons">
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
              />
            </section>
          </div>
        </MainWrapper>
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
      margin-left: 3rem;
      margin-right: 0rem;
    }
  }
`;
const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  div .container mt-5 {
    background-color: #ffffff30;
    border-radius: 10px;
    box-shadow: 5px 1px 5px #6b6e90;
    padding: 5rem;
    height: 70%;
  }

  h1 {
    color: white;
    font-size: 1.5rem;
    margin: 2rem;
  }
  .bottom_buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      color: rgb(13, 110, 253);
      background-color: white;
      height: 1.7rem;
      display: flex;
      align-items: center;
      font-size: 0.7rem;
    }
  }
`;

export default List;
