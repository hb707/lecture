import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const StyledForm = styled.form`
    display: fixed;
    top: -100px;
    left: 0;
    width: 100vw;
    height: 85vh;
    // background: rgba();
    background: transparent;
`

const StyledUl = styled.ul`
    background: #888888;
    display: flex;
    width: 40vw;
    padding: 40px;
    border-radius: 20px;
    margin: 13% auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`
const StyledLi = styled.li`
    margin-bottom: 20px;
`

const StyledLabel = styled.label`
    display: inline-block;
    width: 100px;
    height: 30px;
    font-size: 20px;
    text-align: center;
`

const StyledInput = styled.input`
    all: unset;
    background: #ffffff;
    padding: 7px 14px;
    font-size: 20px;
    border-radius: 5px;
    text-align: center;
`

const Btn = styled.input`
    /* all: unset;
    width: 300px;
    height: 50px;
    background: #333333;
    border-radius: 10px;
    text-align: center;
    color: #ffffff */
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 500;
  width: 350px;
  height: 3rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover{
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: .1s;
  }
`



const LoginInput = ({ setIsLogin, setUser }) => {
    const [values, setValues] = useState({ userid: '', userpw: '' })
    const [submit, setSubmit] = useState(true)
    const [loginError, setLoginError] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
        setSubmit(false) // 로그인버튼 활성화/비활성화 변경용
        // ❗️ 객체의 키값으로 [변수명] 을 써서 변수의 값으로 키명을 정할 수 있음
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmit(true)
        // 여기서 axios 비동기통신 일어남 => result로 불리언값을 받고 해당 값에 따라 성공/실패 나누어 성공이면 isLogin을 true로
        const options = {
            'Content-type': 'application/json',
            withCredentials: true
        }
        const response = await axios.post('http://localhost:4000/api/login', values, options)
        if (response.data[0] !== undefined) {
            setIsLogin(true)
            setUser(response.data[0])
        } else {
            setLoginError(true)
        }

    }
    return (
        <StyledForm action="" onSubmit={handleSubmit}>
            <StyledUl>
                <StyledLi>
                    <StyledLabel htmlFor="">아이디</StyledLabel>
                    <StyledInput type="text" placeholder='아이디를 입력해주세요' name="userid" onChange={handleChange} />
                </StyledLi>
                <StyledLi>
                    <StyledLabel htmlFor="">비밀번호</StyledLabel>
                    <StyledInput type="password" placeholder='비밀번호를 입력해주세요' name="userpw" onChange={handleChange} />
                </StyledLi>
                <li>
                    <Btn type="submit" value="로그인" disabled={submit} />
                </li>
                {loginError && <li>아이디와 비밀번호를 확인해주세요</li>}
            </StyledUl>
        </StyledForm>
    )
}

export default LoginInput;