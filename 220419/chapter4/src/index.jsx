/*
const React = require('react')
const ReactDOM = require('react-dom/client')
const App = require('./App')
// 얘를 App.jsx로 별도의 파일로 뺌
/*
class App extends React.Component {
    state = {
        value: 'hello world'
    }
    render() {
        return (
            <>
                {this.state.value}
            </>
        )
    }
}


// 구 문법
// ReactDOM.render(<App />, document.querySelector('#root'))

// 새 문법
const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container)
root.render(<App />)
*/






// 220420
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container)
root.render(<App />)

