import React, { Component } from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import '../assets/comment.css'

class Comment extends Component {
    state = {
        list: [
            {
                id: 'hb',
                content: '댓글댓글',
                date: '2022-04-25'
            },
            {
                id: 'hb',
                content: '댓글댓글2',
                date: '2022-04-25'
            },
            {
                id: 'hb',
                content: '댓글댓글3',
                date: '2022-04-25'
            },
        ]
    }

    addList = obj => {
        const newList = [...list, obj]
        this.setState({
            ...this.state,
            list: newList
        })
    }

    changeList = newList => {
        this.setState({
            ...this.state,
            list: newList
        })
    }

    render() {
        return (
            <>
                <CommentForm addList={this.addList} />
                <CommentList list={this.state.list} changeList={this.changeList} />
            </>
        )
    }
}
export default Comment;