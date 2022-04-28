import React, { Component } from 'react'

class CommentList extends Component {
    state = {
        value: '',
        update: null
    }

    input = React.createRef()

    // 생명주기함수 : 컴포넌트가 생겼을 때, 바뀔때, 죽을때의 시점을 잡기 위해 쓰는 함수

    componentDidMount() { console.log('첫 렌더링!') } //  최초로 컴포넌트가 렌더 완료시 : 소켓연결
    componentDidUpdate() { console.log('업데이트!') } // 컴포넌트가 리렌더링 되었을 때, 상위컴포넌트에서 componentDidMount같은 생명주기함수가 있으면 바로 변경되어 얘도 실행됨
    componentWillUnmount() { console.log('사라짐!') } // 컴포넌트가 사라질 때 : socket 할때 많이 씀 : 소켓종료

    handleClick = i => (e) => {
        const original = e.target.innerHTML
        // state에 original을 저장 -> input에 값을 넘겨줄 수 있게됨

        this.setState({
            ...this.state,
            value: original,
            update: i // 키값을 어떻게 넘기지??? : 고차함수 사용해서 인자값 넘겨주는 방법으로
        })
    }
    // 내부 함수 자리에 {} 생략한 건 return으로 따로 뺴지 않아도 return이 되도록

    // 하드코딩
    handleClick2 = i => {
        console.log(i)
        const eventClick = e => {
            console.log(e.target.innerHTML) // e는 어떻게 e인지 알지????? 
        }
        return eventClick
    }

    handleChange = e => {
        const { value } = e.target
        this.setState({
            ...this.state,
            value
        })
    }

    updateKeyDown = i => e => {
        if (e.key !== 'Enter') return
        const { updateList, list } = this.props
        const newList = [...list]
        newList[i].content = this.state.value
        this.setState({
            ...this.state,
            value: '',
            update: null
        })
        updateList(newList)
    }

    handleDelete = i => {
        const { updateList, list } = this.props
        const newList = [...list]
        newList.splice(i, 1)
        updateList(newList)
    }

    items = () => {
        const list = this.props.list
        const newList = list.map((v, k) => {
            return (
                <ul className="comment-row" key={k}>
                    <li className="comment-id">{v.id}</li>
                    <li className="commnet-content">
                        {
                            this.state.update !== k
                                ? <><span onClick={this.handleClick(k)}>{v.content}</span>
                                    <span
                                        className="comment-delete-btn"
                                        onClick={() => this.handleDelete(k)}
                                    >X</span>
                                </>
                                : <input
                                    type="text"
                                    value={this.state.value}
                                    className="int"
                                    onChange={this.handleChange}
                                    onKeyDown={this.updateKeyDown(k)}
                                />
                        }

                    </li>
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