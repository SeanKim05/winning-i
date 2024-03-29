# 위닝아이 기업과제

## 1. 구현사항

#### 1-1 로그인 페이지 구현
  - 로그인 아이디 비밀번호 창에 정규식 적용으로 로그인 조건 달성시 로그인 버튼 활성 (-> 메인페이지 이동)
  - 아이디 및 비밀번호 형식 체크 메시지 삽입
  
#### 1-2 메인 페이지
  - Mock Data 생성 후 차트에 적용
  - Chart.js 사용으로 제시된 3개의 차트 (바, 그래프, 파이형)구현
  
#### 1-3 게시글 페이지
  - axios를 사용하여 외부 사이트에서 제공된 json 데이터 사용
  - bootstrap으로 게시글 리스트 및 이동영역 구현
  - 게시글 클릭 시 상세 내용으로 이동 가능
  - 게시글 등록 버튼 클릭 시 게시글 작성 페이지로 이동 가능
  
#### 1-4 슬라이드 바
  - 슬라이딩 기능 구현
  - 버튼 클릭으로 페이지 이동 가능

## 2. 사용기술
  - React.js, Scss, bootstrap, chart.js

## 3. 배포
  - 배포주소: https://winning-i-755c.vercel.app/
  - 이메일 형식에 맞는 아이디 + 특수기호 & 대소문자 알파벳 숫자 조합 & 길이 8글자 이상 입력시 로그인이 가능합니다
  - ex) ID: qwe@qwe.com, PW: @QWEqwe123
