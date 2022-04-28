import React from 'react'

// props는 함수컴포넌트의 인자로 들어옴
// props 객체 => 구조분해할당

// 삼항연산자
// 조건 ? true코드 : false코드
// true일때만 필요하다면?
// true && true코드
const Props = ({ name, id }) => {
    return (
        <div>
            hello world!
            {name}
            {id}
        </div>
    )
}

export default Props;