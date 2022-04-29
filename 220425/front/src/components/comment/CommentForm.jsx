import { useContext, useState, useRef } from 'react'
import Store from './store/Context'
import { typeList } from './store/reducer'

const CommentForm = () => {
    const [content, setContent] = useState('') // input 값 바꾸는 건 훅 만들어서 하면 좋음
    const { state, dispatch } = useContext(Store) // object로 전역으로 만든 state와 그 state를 변경할 수 있는 dispatch를 받아옴

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({
            type: typeList.CREATE_COMMENT,
            payload: { userid: 'hb', content, date: '2022-04-29' }
        })
        setContent('')
        domElement.current.focus()
    }

    const domElement = useRef()
    // 이거는 변수의 사용 시점을 렌더링 완료 이후로 잡아야됨. useEffect 혹은 이벤트핸들함수에서!
    // 컴포넌트의 리턴값(object)이 렌더가 되면 결과물로 DOM 생성 => 그 전까지는 input이 undefined였다가 렌더가 완료돼야 input엘리먼트를 찾을 수 있어서
    // domElement.current => ref(domElement)를 props로 넣은 엘리먼트가 선택됨
    // domElement.current.focus() 같은 식으로 포커스를 쓸 수 있음

    const handleChange = e => {
        const { value } = e.target
        setContent(value)
    }





    return (
        <div>
            <h1>COMMENT</h1>
            <form onSubmit={handleSubmit}>
                <input ref={domElement} type="text" name="comment" placeholder="댓글을 입력해 주세요" value={content} onChange={handleChange} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default CommentForm