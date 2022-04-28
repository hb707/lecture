import React, { useState, useEffect } from 'react'
import validate from './validate'
import useForm from './useForm'

// useForm 훅 내의 useEffect에서 submit버튼 제출시에 이 함수를 실행하면서 values를 인자로 넘겨줌. 그러면 이 함수는 그 인자를 받아서 사용할 수 있게됨
const submitFunction = async (items) => {
    // 여기서 form submit 시에 요청 보내는 코드를 작성하고 이걸 useForm() 훅의 두번째 인자값으로 넘겨줌
    // setTimeㅐut으로 처리했지만 실제로는 axios보냄
    // 보내기 위해서는 input의 값들을 이 함수가 알고 있어야함
    const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, 1000)
    })
    alert(JSON.stringify(result))
}

const Form = () => {
    // 어제는 input박스만 커스텀훅으로
    // 이번에는 input이랑 submit까지

    // 1. 커스텀훅 파일 하나
    // 2. 폼체크 파일 하나
    const { userid, password, errors, submit, handleSubmit } = useForm({ userid: '', password: '' }, submitFunction, validate)
    // useForm객체는 다음과 같이 출력됨 + state만들어짐
    /*
    {
        userid: {
            value: values.userid,
            onChange
        },
        password: {
            value: values.password,
            onChange
        },
        // 다음이 추가됨
        errors: {},
        submit: boolean,
        handleSubmit: () => {} <= 이건 submit하는 페이지에 따라 서로 다른 요청을 보내야함. 인자값으로 이 처리함수를 넣어서 handleSubmit내에서 가변적으로 처리 가능하게끔 함.
    }
    */

    return (
        <form onSubmit={handleSubmit}>
            <h2>회원가입 27일</h2>
            <ul>
                <li>
                    <label htmlFor='userid'>아이디</label>
                    <input {...userid} type="text" name="userid" />
                    {errors.userid && <span>{errors.userid}</span>}
                </li>
                <li>
                    <label htmlFor='password'>패스워드</label>
                    <input {...password} type="password" name="password" />
                    {errors.password && <span>{errors.password}</span>}
                </li>
                <li><input type="submit" value="가입" disabled={submit} /></li>
            </ul>
        </form>
    )
}



export default Form