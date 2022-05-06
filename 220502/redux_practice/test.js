const { list } = require('nunjucks/src/filters')
const redux = require('redux')
const { createStore } = redux

const initialState = {
    user: {
        userid: 'web7722',
        username: 'ingoo'
    },
    comment: {
        list: [{ idx: 0, content: 'asdf', date: '2022-05-03' }]
    },
    category: {
        mainCd: [
            {
                idx: 0,
                name: 'board',
                subCate: [
                    {
                        idx: 0,
                        name: 'notice'
                    },
                    {
                        idx: 1,
                        name: 'freeboard'
                    },
                ]
            }
        ]
    },
}


const CHANGE_ID = 'CHANGE_NAME'
const changeId = (value) => ({ type: CHANGE_ID, payload: { id: value } })
const ADD_COMMENT = 'ADD_COMMNET'
const addComment = (value) => ({ type: ADD_COMMENT, payload: value }) // 객체로 받음
const ADD_MAINCG = 'ADD_MAINCG'
const addMainCg = value => ({ type: ADD_MAINCG, payload: value })
const ADD_SUBCG = 'ADD_SUBCG'
const addSubCg = value => ({ type: ADD_SUBCG, payload: value })


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ID:
            return {
                ...state,
                user: { ...state.user, userid: action.payload.id }
            }
        case ADD_COMMENT:
            return {
                ...state,
                comment: {
                    list: [...state.comment.list, action.payload]
                }
            }

        case ADD_MAINCG:
            const idx = state.category.mainCd.length
            const name = action.payload
            return {
                ...state,
                category: {
                    mainCd: [...state.category.mainCd, { idx, name, subCate: [] }]
                }
            }

        case ADD_SUBCG:
            const { mainIdx, subName } = action.payload
            const newSubCg = {}
            state.category.mainCd.forEach((v, i) => {
                let subIdx = 0
                if (i === mainIdx) {
                    // console.log(v.subCate)
                    subIdx = v.subCate.length
                    newSubCg.idx = subIdx
                    newSubCg.name = subName
                }
                v.subCate.push(newSubCg)

            })
            // console.log(state.category.mainCd[0])
            // const newSubList = [...state.category.mainCd[mainIdx].subCate, newSubCg]
            // const newMainList = [...state.category.mainCd]
            // newMainList[mainIdx].subCate = newSubList


            return {
                ...state
            }
    }
}




const store = createStore(reducer)

// console.log(store.getState())

store.dispatch(changeId('hbhb'))
// console.log(store.getState())

store.dispatch(addComment({ idx: 1, content: 'newComment~~', date: '2022-05-03' }))
// console.log(store.getState())
// console.log(store.getState().comment.list)

store.dispatch(addMainCg('메인카테고리new'))
// console.log(store.getState())
// console.log(store.getState().category.mainCd)


store.dispatch(addSubCg({
    mainIdx: 0,
    subName: 'QnA'
}))

console.log(store.getState())
console.log(store.getState().category.mainCd[0].subCate)

store.dispatch(addSubCg({
    mainIdx: 0,
    subName: '네번째'
}))

console.log(store.getState())
console.log(store.getState().category.mainCd[0].subCate)