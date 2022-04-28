// 커스텀훅
import React, { useState, useEffect } from 'react'

// 1. input 상태
// 2. submit 실행내용
// 3. 폼체크

// defaultValue : {userid: '', password: ''}

const useForm = (defaultValue, onSubmit, validate) => {
    const [values, setValues] = useState(defaultValue)
    const [submit, setSubmit] = useState(false)
    const [errors, setErrors] = useState({})

    const onChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setSubmit(true)
        setErrors(validate(values))
    }

    // useEffect() 내에서 비동기함수를 사용하고 싶은 경우 🔥
    // useEffect의 콜백함수 자체에 async를 붙이면 오류터짐
    // 콜백함수 내부에 init함수를 만들고 여기에다가 async를 붙여서 실행하면 됨!!

    useEffect(() => {
        // errors의 업데이트에 따라 실행되는 sideEffect
        if (submit) {
            // submit이 true인 경우 = form이 submit 된 경우만. 처음 렌더링 된 경우를 제외하기 위함
            if (Object.keys(errors).length === 0) {
                // 에러없음. 폼체크 성공적
                console.log('성공적')
                onSubmit(values) // 인자로 받은 axios코드가 있는 함수에 values를 넘겨주어 서버에 input의 value를 전달 할 수 있다.
            }
            setSubmit(false)
        }
    }, [errors])
    return {
        ...Object.keys(defaultValue).reduce((acc, v) => {
            acc[v] = {
                value: values[v],
                onChange,
                handleSubmit
            }
            return acc
        }, {}),
        errors,
        submit,
        handleSubmit
    }
}
export default useForm