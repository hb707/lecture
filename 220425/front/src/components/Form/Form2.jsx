import React, { useState, useEffect } from 'react'

// 커스텀 훅 => onchange를 자동으로
const useInput = (defaultValue) => {
    const [value, setValue] = useState(defaultValue)
    const onChange = e => {
        setValue(e.target.value)
    }

    const change = newValue => { setValue(newValue) }

    return {
        value,
        onChange,
    }
}

// 폼 만들 때 넣는 거
// 폼체크! 
// 아이디 중복체크, 비밀번호 일치확인, 

const validate = ({ userid, password }) => {
    const errors = {}
    if (!userid) {
        errors.userid = "이메일이 입력되지 않았습니다."
    }
    // } else if (/^$/) {
    //     // 정규표현식
    //     /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}&/i
    // }
    if (!password) {
        errors.password = "비밀번호가 입력되지 않았습니다."
    }
    return errors
}

const Form = () => {
    const id = useInput('') // id.value, id.change('..') 으로 사용 가능함
    const pw = useInput('')
    const [submit, setSubmit] = useState(false)
    const [error, setError] = useState({})
    // error 객체에 에러메세지 담음. Error = { userid: '중복된 아이디임.', password: '패스워드는 8자리 이상이어야 함.'}

    const handleSubmit = e => {
        e.preventDefault()
        setSubmit(true)
        console.log('안녕서브밋')

        let obj = {}
        if (id.value.length < 8) {
            obj.userid = '아이디 8자 이상으로 해줘'
        }
        if (pw.value.length < 8) {
            obj.password = '패스워드 8자 이상으로 해줘'
        }
    }

    // 모든코드가 실행된 후 (렌더완료후) useEffect의 콜백 실행 (useEffect까지 실행 후 콜백은 백그라운드에 들어가있다가 2번째 인자인 실행조건이 만족되면)
    useEffect(() => {
        if (submit) {
            console.log('회원가입제출')
            const errArr = Object.keys(error) // ['userid', 'userpw']
            if (errArr.length === 0) {
                alert('회원가입이 정상적으로 완료되었습니다.')
                //axios 보냄
            }
            setSubmit(false)
        }
    }, [error])

    return (
        <form onSubmit={handleSubmit}>
            <h1>회원가입안녕</h1>
            <ul>
                <li>
                    <label htmlFor="userid">아이디</label>
                    <input type="text" name="userid" {...id} />
                    {error.userid && <span>{error.userid}</span>}
                </li>
                <li>
                    <label htmlFor="userpw">아이디</label>
                    <input type="password" name="userpw" {...pw} />
                    {error.password && <span>{error.password}</span>}
                </li>
                <li>
                    <input type="submit" value="가입" disabled={submit} />
                </li>
            </ul>
        </form >
    )
}

export default Form;