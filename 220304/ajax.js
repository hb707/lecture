// Ajax : 비동기적 요청 처리 방식
// 브라우저에서 URL 입력 없이 요청/응답을 보내는 행위
// Json 이전에 사용하던 파일확장자
// <head>안녕</head>
// <div>안녕</div>

// JSON : { "dev": "nodemon server" }
// XML : <dev>nodemon server</dev>
// text양이 거의 1.5배 차이남

// Ajax의 x가 xml
// 현재는 json으로 대체됨

// 브라우저에는 3가지? 요청 방식 존재
// url
// post
// XMLHttpRequest : javascript 코드로 요청

// url 입력시에는 백엔드가 전체 페이지를 렌더링해서 제공
// ajax는? 내용을 받으면 그 내용을 브라우저가 렌더링 할 수 있도록 개발자가 자바스크립트로 그려줘야함 : html이 아닌 필요한 데이터만 받음

// 각각의 라우터를 별개로 만들어줘야함 (url용/ajax용) 서로의 요청을 알지못함 => 프론트서버와 백엔드서버로 나눠짐

// ajax는 비동기이므로 promise와 async,await을 잘 다뤄야함

// 프론트서버와 백서버를 나누는 방식
// = nunjucks 처리하는 서버와 db와 통신하는 서버를 나눔

// 페이지를 바꾸고 싶을 때는 프론트서버와 통신
// 데이터만 바꾸고 싶을 때는 백서버와 통신

// 쪼개는 걸 좋아한다!
// 프론트 서버 1    /    프론트 서버 2
// 백엔드 서버 1    /    백엔드 서버 2
// 모든 서버에서 매번 로그인검증? ㄴㄴ
// 로그인/인증 담당하는 서버를 또 따로 뻄 : OAuth2.0



// 2200303 작업내용에서 이어서 
// 통신이 비동기인 것과 코드가 비동기인 것...  사실 같은 의미지만 약간 구분해서 생각


// 프론트 백 나누기 : 서버구조, 배포에 대한 공포 해소하기위해서 + React 공포 해소하기 위해서
// 게시판 구현하기 ajax db
// api 사용해보기 Oauth2.0 개념