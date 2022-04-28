import React, { Component } from 'react'

class CommentForm extends Component {
    state = {
        value: ''
    }

    handleChange = (e) => {
        const { value } = { ...e.target }
        this.setState({
            value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addList(this.state.value)
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <li className='comment-form'>
                <form onSubmit={this.handleSubmit}>
                    <span className="ps_box">
                        <input
                            type="text"
                            className="int"
                            placeholder='댓글을 입력해주세요'
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </span>
                    <input type="submit" className='btn' value="입력" />
                </form>
            </li>
        )
    }
}

export default CommentForm;