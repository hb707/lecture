import moment from 'moment'
// 이 상태에서는 사용불가능
// 1. npm i moment, npm i -D webpack webpack-cli (총 3개의 라이브러리 install)
// 1-1. npx webpack-cli ./src/index3.js (warning은 무시해도 ㄱㅊ)
// 2. 웹팩으로 index3.js + moment => dist폴더 내에 main.js (두개의 js파일을 합쳐서 하나의 js파일을 만듦)
// 3. index3.html 에서 js 넣어줄 때 해당 js파일(main.js) 을 넣어줌.

// 리액트도 마찬가지의 원리
// 여러 파일로 나눠진 컴포넌트를 한 파일에 모아서 실행 => SPA 구현!

// 조건을 걸거나, babel을 미리 세팅하거나, js,css,이미지,폰트 ...  어디까지 번들링을 할지도 선택 가능함

// webpack.config.js <- 여기에 번들링을 세팅

function currentTime() {
    return moment().format('H:m:s')
}

const div = document.createElement('div')
document.body.appendChild(div)

setInterval(() => {
    div.innerHTML = currentTime()
}, 1000)