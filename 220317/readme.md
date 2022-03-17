웹소켓

- server.js작성
- socket.js 작성 -> export : const wss = new webSocket.Server({ server })
- 브라우저측 js에 브라우저 내장객체 WebSocket 이용해서 통신 : const webSocket = new WebSocket('ws://localhost:3001')
----------
- 이상태만으로도 웹소켓통신은 일어남
- 이 이후로는 커넥션 이후의 이벤트에 대한 처리를 해주는 코드를 작성

- 네트워크 탭에서 보면 두개의 통신 연결을 확인할 수 있음
    - http와는 다르게 웹소켓은 헤더, 쿠키가 없고 메세지만 있음


- html 로드 완료 시 웹소켓 연결 (DOMContentLoaded 내부에 연결코드 작성하기)