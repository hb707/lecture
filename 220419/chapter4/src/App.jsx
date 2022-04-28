/*
const React = require('react')
const { Component } = React

// import React, {Component} from 'react'

// require와 import의 차이 
// 기능적으로는 다르지 않다. 만들어진 시기가 다름.
// require <- node 나오면서 디폴트로 나온 애. 먼저 나옴.
// import <-- 나중에 나옴. ES6+ 문법임. 노드js 외에도 그냥 브라우저에서도 자바스크립트 문법을 사용하면 그냥 돌아감.

class App extends Component {
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
*/

import React, { Component } from 'react'
import './assets/a.css' // from 없이 이걸로 css파일 가져오는방법. 별도로 변수명을 지정해줄 필요가 없을 때
import styles from './assets/App.modules.css'
import styless from './assets/test.modules.css'

// styled-components 라이브러리 사용해서 css 넣는 방법
import styled from 'styled-components'

import GuguClass from './components/GuguClass'
import Comment from './components/Comment'
import CommentForm from './components/CommentForm'
import CommentList from './components/CommentList'

const Button = styled.button`
    background: #000;
    border:none;
    color:#fff;
    padding:7px 14px
`
// 처음엔 그냥 스트링으로 다 나옴. vs확장프로그램에서 vscode-styled-components 설치
// 장점 : 컴포넌트 내에서 바로 css를 작업한 내용을 만들 수 있다. 다른 사람의 컴포넌트를 가져와서 작업할 때 style이 먹힌 상태로 편하게 가져올 수 있음.
// 장점2 : 기존 컴포넌트의 style에서 새 컴포넌트를 만들 때 편리

// 기존 css 먹힌 컴포넌트를 가져와서 확장
const HoverButton = styled(Button)`
    background:#aeaeae;
    :hover{
        background: #888888
    }
`

// const ActiveButton = styled(Button)`
//     background:${(props) => props.background},
//     display${() => {
//         let flag
//         if (props.background === '#333') flag = 'none';
//         return flag
//     }}
// `

class App extends Component {
    state = {
        list: [
            {
                idx: 1,
                id: 'hb',
                content: '안녕하세요1',
                date: '2022-04-21'
            },
            {
                idx: 2,
                id: 'hb',
                content: '안녕하세요2',
                date: '2022-04-21'
            },
            {
                idx: 3,
                id: 'hb',
                content: '안녕하세요3',
                date: '2022-04-21'
            }
        ]
    }



    componentDidMount() { // 처음 컴포넌트 렌더링 될 때 한번만 실행되는 함수 
        console.log('렌더끝')
        this.setState({
            ...this.state,
            list: [{ idx: 4, id: 'web7722', content: '새댓글', date: '2022-04-21' }]
        })
    }

    addList = (value) => {
        this.setState({
            list: [...this.state.list, { idx: 4, id: 'web7722', content: value, date: '2022-04-21' }]
        })
    }

    render() {
        return (
            <>
                {/* <span className="color">{this.state.value}</span> */}
                {/* <span className={styles.color}>{this.state.value}</span> */}
                {/* <span className={styless.color}>{this.state.value}</span> */}
                {/* 모두 css내 이름은 .color로 동일하지만 module을 사용하면 해시로 변환되어 각각이 구분이 됨 */}
                {/* <Button>버튼입니당</Button> */}
                {/* <HoverButton>호버가 되는 버튼입니당</HoverButton> */}
                {/* <ActiveButton background="#333"></ActiveButton> */}
                {/* <GuguClass /> */}

                {/* <Comment /> */}
                {/* 위에꺼 대신 */}
                <Comment>
                    <CommentForm addList={this.addList} />
                    <CommentList list={this.state.list} />
                </Comment>
            </>
        )
    }
}

export default App;