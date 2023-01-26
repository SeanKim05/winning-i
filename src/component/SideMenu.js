import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  IoMdClipboard,
  IoMdPower,
  IoMdMenu,
  IoMdClose,
  IoMdHome,
} from 'react-icons/io';

function SideMenu() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const go_login = () => {
    navigate('/');
  };
  const go_list = () => {
    navigate('/list');
  };
  const go_home = () => {
    navigate('/main');
  };

  const activateNav = () => {
    setActive(!active);
  };
  return (
    <SideMenuWrapper>
      <div className={active ? 'header' : 'header-mobile'}>
        <div className="menu_icon" onClick={activateNav}>
          {!active ? (
            <IoMdMenu className="menu" />
          ) : (
            <IoMdClose className="menu" />
          )}
        </div>
        <nav>
          <ul className={active ? 'ul-item' : 'ul-item oicon'}>
            <li>
              <IoMdHome className="icon" onClick={go_home} />
              <Link to="/main"> 홈</Link>
            </li>

            <li>
              <IoMdClipboard className="icon" onClick={go_list} />
              <Link to="/list">게시글 목록</Link>
            </li>

            <li>
              <IoMdPower onClick={go_login} className="icon" />
              <Link to="/">로그아웃</Link>
            </li>
          </ul>
        </nav>
      </div>
    </SideMenuWrapper>
  );
}

export default SideMenu;

const SideMenuWrapper = styled.div`
  .header {
    display: flex;
    position: fixed;
    flex-direction: column;
    color: white;
    inset: 0 87% 0 0;
    background-color: rgb(0, 0, 0, 0.2);
    font-size: 0.7rem;
    li:hover {
      background-color: rgb(0, 0, 0, 0.7);
      transition: 1s ease;
    }
  }
  .header-mobile {
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
    color: white;
    inset: 0 95% 0 0;
    background-color: rgb(0, 0, 0, 0.2);
  }
  nav {
    .ul-item {
      display: flex;
      flex-direction: column;
      list-style: none;
      li {
        width: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding-block: 1.5rem;
        .icon {
          margin-inline: 1rem;
          font-size: 1rem;
        }
      }

      li a {
        text-transform: uppercase;
        text-decoration: none;
        color: #fff;
        border-left: 1px solid white;
        padding-left: 0.5rem;
      }
    }
    .ul-item.oicon a {
      display: none;
      li::after {
        position: absolute;
        width: 1%;
        height: 4%;
        background-color: #fff;
        right: 0;
      }
    }
  }
  .menu_icon {
    margin-inline: 1rem;
    .menu {
      margin-block: 1rem;
      cursor: pointer;
      font-size: 30px;
    }
  }
  @media (max-width: 768px) {
    .header-mobile {
      inset: 0 95% 0 0;
      justify-content: center;
    }
    nav {
      .ul-item {
        display: none;
        li .icon {
          font-size: 1rem;
          margin-inline: 1rem;
        }
      }
      .ul-item.oicon {
        display: flex;
      }
      li {
        padding-block: 0.1rem;
      }
    }
    .menu_icon {
      display: none;
    }
  }
`;
