import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  IoMdImages,
  IoMdClipboard,
  IoMdPower,
  IoMdMenu,
  IoMdClose,
  IoMdPerson,
  IoMdHome,
} from 'react-icons/io';

function SideMenu() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const go_detail = () => {
    navigate('/detail');
  };
  const go_list = () => {
    navigate('/list');
  };
  const go_home = () => {
    navigate('/');
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
              <Link to="/"> Home</Link>
            </li>
            <li>
              <IoMdPerson className="icon" />
              <Link to="/"> My info</Link>
            </li>
            <li>
              <IoMdClipboard className="icon" onClick={go_list} />
              <Link to="/detail">List</Link>
            </li>

            <li>
              <IoMdPower className="icon" />
              <Link to="/">Logout</Link>
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
    /* padding-top: 5%; */
    color: white;
    inset: 0 88% 0 0;
    background-color: rgb(0, 0, 0, 0.2);
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
        display: flex;
        align-items: center;
        cursor: pointer;
        padding-block: 1.5rem;
        .icon {
          margin-inline: 1.2rem;
          font-size: 30px;
        }
      }
      li:hover {
        background-color: rgb(0, 0, 0, 0.7);
      }
      li a {
        text-transform: uppercase;
        text-decoration: none;
        color: #fff;
        border-left: 1px solid white;
        padding-left: 0.5rem;
      }
      li:hover {
        transition: 1s ease;
      }
    }
    .ul-item.oicon a {
      display: none;
      li::after {
        content: '';
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
      inset: 0 90% 0 0;
      justify-content: center;
    }
    nav {
      .ul-item {
        display: none;
      }
      .ul-item.oicon {
        display: flex;
      }
      li .icon {
        font-size: clamp(1rem, 2vw + 1rem, 4rem);
      }
    }
    .menu_icon {
      display: none;
    }
  }
`;
