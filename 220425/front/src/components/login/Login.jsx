import React, { useState, useEffect } from 'react'
import UserInfo from './UserInfo'
import LoginInput from './LoginInput'

const Login = ({ isLogin, setIsLogin, user, setUser }) => {


    return (
        <>
            {!isLogin && <LoginInput setIsLogin={setIsLogin} setUser={setUser} />}
        </>
    )
}

export default Login;