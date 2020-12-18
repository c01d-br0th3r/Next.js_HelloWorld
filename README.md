# Next.js_HelloWorld

First Next JS Project

### Install

```
npm init -y
npm i next react react-dom
```

- `package.json`에 scripts 추가

```
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
```

- `pages` 디렉토리 추가

---

`_app.js`: React의 최상위 App 컴포넌트와 비슷, `Component, pageProps` 받아서 하윜 컴포넌트 렌더링 가능

`_document.js`: HTML 메타 데이터 설정 가능, `styled-components` 서버사이드 렌더링 설정 적용


`pages` 폴더 내부 파일명이 라우팅 경로

SSR이기 때문에 데이터 Fetch를 `getInitialProps` 함수에서 호출
`getInitialProps` 함수는 `ctx` 객체를 props로 소유
내부에 `query` 가 존재하기 때문에 `query.id`로 URL 파라미터 전달 가능

Dynamic Routing은 `[id].jsx` 형태로 파일명 작성
