import React, { Component } from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import '../assets/comment.css'

class Comment extends Component {


    render() {
        return (
            <ul>
                {this.props.children}
            </ul>
        )
    }
}
export default Comment;