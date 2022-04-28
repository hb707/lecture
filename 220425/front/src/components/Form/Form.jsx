import React, { useState } from 'react'

// 커스텀 훅 => onchange를 자동으로
const useInput = (defaultValue) => {
    const [value, setValue] = useState(defaultValue)
    const onChange = e => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange
    }
}

const Form = () => {
    const id = useInput('')
    const pw = useInput('')

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>회원가입안녕</h1>
            <ul>
                <li>
                    <label htmlFor="userid">아이디</label>
                    <input type="text" name="userid" {...id} />
                </li>
                <li>
                    <label htmlFor="userpw">아이디</label>
                    <input type="password" name="userpw" {...pw} />
                </li>
                <li>
                    <input type="submit" value="가입" />
                </li>
            </ul>
        </form >
    )
}

export default Form;