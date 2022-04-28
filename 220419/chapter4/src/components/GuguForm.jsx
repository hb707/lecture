import React, { Component } from 'react'

class GuguForm extends Component {
    render() {
        return (
            <>
                <h1>구구단 입력</h1>
                <form action="" onSubmit={this.props.onSubmit}>
                    <input type="number" name="gugu" placeholder='숫자를 입력하세요' />
                    <input type="submit" />
                </form>
            </>
        )
    }
}

export default GuguForm;