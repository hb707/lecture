import React, { useState, createContext, useContext } from 'react'

const Store = createContext() // <Store /> 컴포넌트 생성됨
// 보통은 export const Store ...  해서 다른 파일로 빼놓고 불러와서 사용할 수 있게


const D = () => {
    // 2. useContext로 Store에 저장해둔 props 가져오기
    const value = useContext(Store)
    return (
        <>
            <h1>Hello!</h1>
        </>
    )
}

const C = () => {
    return (
        <>
            <D />
        </>
    )
}

const B = () => {
    return (
        <>
            <C />
        </>
    )
}

const A = () => {
    return (
        <>
            <B />
        </>
    )
}

const Context = () => {
    const [name, setName] = useState('hanbin')
    // 1. 최상단 컴포넌트 파일에서 Store를 import해 가져온 후 컴포넌트를 <Store.Provider> 컴포넌트로 감쌈
    return (
        <>
            <Store.Provider value={name}>
                <A />
            </Store.Provider>
        </>
    )
}

/*
    기존의 방식이라면 최상단 컴포넌트에서 props로 value를 계속 전달해줬어야함.
*/