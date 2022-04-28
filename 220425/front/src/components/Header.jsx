import React, { useState } from 'react'
import styled from 'styled-components'
import Login from './login/Login'

const HeaderDiv = styled.div`
    z-index: 5;
    width: 100vw;
    height: 100px;
    background: #aeaeae;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
`
const HeaderMenu = styled.div`
    z-index: 1;
    position: fixed;
    top: -300px;
    left: 0px;
    width: 100vw;
    height: 300px;
    background: #aeaeae;
    padding-top: 100px;
    opacity: 0;
    ${props => props.viewMenu && `transform: translateY(400px); opacity: 1; z-index: 2`};
    transition: all 2s ease;
    
`

const Header = ({ isLogin, setIsLogin, user, setUser }) => {
    const [viewMenu, setViewMenu] = useState(false)
    const [viewLoginModal, setViewLoginModal] = useState(false)

    const checkMenu = () => {
        setViewMenu(!viewMenu)
    }

    const modalLoginForm = () => {
        setViewLoginModal(!viewLoginModal)
    }

    return (
        <>
            <HeaderMenu viewMenu={viewMenu}>
                {/* 메뉴 리스트 생성 */}
                {isLogin && <div>{user.nickname} 님 환영합니다!</div>}
            </HeaderMenu>
            <HeaderDiv id="header">
                <div onClick={checkMenu}>메뉴</div>
                <h1><a href="/">LOGO</a></h1>
                {isLogin ? <div onClick={() => setIsLogin(false)}>로그아웃</div> : <div onClick={modalLoginForm}>로그인</div>}
            </HeaderDiv>
            {viewLoginModal && <Login isLogin={isLogin} setIsLogin={setIsLogin} user={user} setUser={setUser} />}
        </>
    )
}

export default Header;