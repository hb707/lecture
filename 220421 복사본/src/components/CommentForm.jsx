import React, { Component } from 'react'

class CommentForm extends Component {
    render() {
        return (
            <form action="">
                <input type="text" placeholder='댓글을 입력하세요' />
                <input type="submit" />
            </form>
        )
    }
}

export default CommentForm;