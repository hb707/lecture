import React, { Component } from 'react'
import GuguForm from './GuguForm';
import GuguList from './GuguList';

// guguclass
// guguform
// gugulist

class GuguClass extends Component {
    state = {
        value: 2
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            ...this.state,
            value: parseInt(e.target.gugu.value)
        })
    }

    render() {
        return (
            <>
                <h1>구구단</h1>
                <GuguForm onSubmit={this.handleSubmit} />
                <GuguList
                    value={this.state.value}
                />
            </>
        )
    }
}

export default GuguClass;