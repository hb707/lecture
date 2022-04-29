import { createContext, useContext } from 'react';

export const initState = {
    commentItem: [],
    loadding: false, // input submit 버튼 활성화 조작
    errors: null
}
const Store = createContext()


// ES6 모듈 out
export default Store // import Store from '파일경로'
// export const Store2 = createContext() // import {Store2} from '파일경로' : 객체에 들어가서 export됨
// export const getStore = () => useContext(Store)
// NodeJS 모듈 out
// module.exports = ...