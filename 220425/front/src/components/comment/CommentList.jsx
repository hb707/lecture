import { useContext, useState } from 'react'
import Store from './store/Context'
import { typeList } from './store/reducer'

const CommentList = () => {
    const [updateIdx, setUpdateIdx] = useState(null)
    const { state: { commentItem }, dispatch } = useContext(Store)

    const handleClick = k => {
        setUpdateIdx(k)
    }

    const handleUpdate = e => {
        if (e.key === 'Enter') {
            dispatch({
                type: typeList.UPDATE_COMMENT,
                payload: { idx: updateIdx, content: e.target.value }
            })
            setUpdateIdx(null)
        }
    }

    const list = () => commentItem.map((v, i) => {
        return (
            <li key={i}>
                <span>{v.userid}</span>
                {updateIdx === i
                    ? <div>
                        <input type="text" onKeyDown={handleUpdate} defaultValue={v.content} />
                    </div>
                    : <h3 onClick={() => { handleClick(i) }}>{v.content}</h3>
                }

                <p>{v.date}</p>
            </li>
        )
    })
    return (
        <div>
            <ul>
                {list()}
            </ul>
        </div>
    )
}

export default CommentList