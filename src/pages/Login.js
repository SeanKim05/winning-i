import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Login() {
  const pwdRef = useRef('');
  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);

  const emailRef = useRef('');
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  useEffect(() => {
    const PWD_REGEX =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,24}$/;
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    const EMAIL_REGEX = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  const navigate = useNavigate();
  const goMain = () => {
    navigate('/main');
  };

  return (
    <LoginContainer>
      <div className="login_wrapper">
        <h1 className="loginTitle">WINNING-I</h1>
        <div className="content_wrapper">
          <div>
            <input
              type="text"
              placeholder=" 이메일"
              ref={emailRef}
              onChange={e => {
                setEmail(e.target.value);
              }}
              aria-invalid={validEmail ? 'false' : 'true'}
              aria-describedby="emailnote"
            />
            <p
              id="emailnote"
              className={email && !validEmail ? 'cond_msg' : 'offscreen'}
            >
              올바르지 않은 이메일 형식입니다.
              <br />
              이메일 형식을 확인해 주십시오.
            </p>
            <input
              type="password"
              placeholder="비밀번호"
              ref={pwdRef}
              onChange={e => {
                setPwd(e.target.value);
              }}
            />
            <p
              id="pwdnote"
              className={pwd && !validPwd ? 'cond_msg' : 'offscreen'}
            >
              올바르지 않은 비밀번호 형식입니다.
              <br />
              비밀번호는 특수기호 알파벳 대소문자,숫자 조합입니다.
              <br />
            </p>
          </div>
          <button
            style={
              !validPwd || !validEmail
                ? { backgroundColor: '#ffffff30' }
                : { backgroundColorr: 'white' }
            }
            disabled={!validPwd || !validEmail ? true : false}
            onClick={goMain}
          >
            로그인
          </button>
        </div>
      </div>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .login_wrapper {
    background-color: #ffffff30;
    border-radius: 10px;
    box-shadow: 5px 1px 5px #6b6e90;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 40rem;
    height: 30rem;
    .loginTitle {
      color: white;
      font-weight: 700;
      text-align: center;
      font-size: 30px;
    }
    .content_wrapper {
      width: 100%;
      margin: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    input {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      height: 3rem;
      width: 20rem;
    }
    p.cond_msg {
      font-size: 0.75rem;
      border-radius: 0.5rem;
      border: 1px solid rgb(0, 0, 0);
      color: #000;
      padding: 0.25rem;
      position: relative;
      bottom: -0.5px;
      margin-bottom: 0.5rem;
      background-color: white;
    }

    p.offscreen {
      position: absolute;
      left: -9999px;
    }
    button {
      border: none;
      margin-right: 0.5rem;
      color: rgb(13, 110, 253);
      background-color: white;
      height: 3rem;
      width: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
    }
  }

  .cursorChange {
    &:hover {
      cursor: pointer;
    }
  }
`;
