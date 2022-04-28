import React, { Component } from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import '../assets/comment.css'

class Comment extends Component {
    state = {
        list: [
            {
                idx: 1,
                id: 'hb',
                content: '안녕하세요1',
                date: '2022-04-21',
                updateFlag: true
            },
            {
                idx: 2,
                id: 'hb',
                content: '안녕하세요2',
                date: '2022-04-21',
                updateFlag: true
            },
            {
                idx: 3,
                id: 'hb',
                content: '안녕하세요3',
                date: '2022-04-21',
                updateFlag: true
            }
        ]
    }



    // componentDidMount() { // 처음 컴포넌트 렌더링 될 때 한번만 실행되는 함수 
    //     console.log('렌더끝')
    //     this.setState({
    //         ...this.state,
    //         list: [{ idx: 4, id: 'web7722', content: '새댓글', date: '2022-04-21', updateFlag: true }]
    //     })
    // }

    addList = (value) => {
        this.setState({
            ...this.state,
            list: [...this.state.list, { idx: 4, id: 'web7722', content: value, date: '2022-04-21', updateFlag: true }]
        })
    } // 얘는 form 컴포넌트에서 value말고 obj를 만들어서 인자를 obj로 받으면 더 쉬워짐

    updateList = list => {
        this.setState({
            ...this.state,
            list
        })
    }
    render() {
        return (
            <ul>
                <CommentForm addList={this.addList} />
                <CommentList list={this.state.list} updateList={this.updateList} />
            </ul>
        )
    }
}
export default Comment;