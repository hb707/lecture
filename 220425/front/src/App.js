import React, { useState } from 'react'
import State from './components/state/State.jsx'
import Effect from './components/state/Effect.jsx'
import Login from './components/login/Login'
import Props from './components/props/Props'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Reduce from './components/callback/Reduce'
import Comment from './components/comment/Comment'
import './assets/layout.css'


const App = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState({})

    return (
        <div className="App">
            <Header isLogin={isLogin} setIsLogin={setIsLogin} user={user} setUser={setUser} />
            <Comment />
            {/* <Main /> */}
            <Footer />
        </div>
    );
}

export default App;
