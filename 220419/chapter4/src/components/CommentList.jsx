import React, { Component } from 'react'

class CommentList extends Component {


    items = () => {
        const list = this.props.list
        const newList = list.map((v, k) => {
            return (
                <ul className="comment-row" key={k}>
                    <li className="comment-id">{v.id}</li>
                    <li className="commnet-content">{v.content}</li>
                    <li className="comment-date">{v.date}</li>
                </ul>
            )
        })
        return newList
    }

    render() {
        return (
            <li>
                {this.items()}
            </li >
        )
    }
}

export default CommentList;