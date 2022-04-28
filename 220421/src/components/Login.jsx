import React, { Component } from 'react'

class Login extends Component {

    render() {
        return (
            <form className="loginForm">
                <input type="text" className="userid" />
                <input type="text" className="userpw" />
                <input type="submit" className="btn" value="로그인" />
            </form>
        )
    }
}

export default Login;