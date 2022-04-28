import React, { useState, useEffect } from 'react'

const UserInfo = ({ setIsLogin, user }) => {

    const clickHandle = () => {
        setIsLogin(false)
    }
    return (
        <>
            <p>{user.nickname}님 안녕하세요!</p>
            <button onClick={clickHandle}>로그아웃</button>
        </>
    )
}

export default UserInfo;