class Form extends React.Component {
    state = {
        value: ''
    }

    changeHandler = async (e) => {
        const { state } = this
        const { target: { value } } = e
        await this.setState({
            ...state,
            value
        }) //setState는 비동기임
        //console.log(this.state.value)
    }

    submitHandler = e => {
        e.preventDefault()
        const { changeValue } = this.props
        changeValue(this.state.value)
        this.state.value = ''
    }

    render() {
        const {
            state: { value },
            changeHandler,
            submitHandler
        } = this
        return (
            <form onSubmit={submitHandler}>
                내용 : <input type="text" value={value} onChange={changeHandler} />
                <input type="submit" value="확인" />
            </form>
        )
    }
}

class Ul extends React.Component {
    // 얘는 업데이트 되는 props를 못받아온다. 
    list = [...this.props.boardLi].map((v, k) => {
        return (
            <li>
                <span>{v.subject}</span>
            </li>
        )
    })
    // 리스트를 매핑해서 JSX형태로 만들어 배열에 담아 render()에 주면 알아서 list length만큼 생성해줌

    render() {
        // 왜 함수 안에 있을 때만 작동이 되냐
        const newlist = [...this.props.boardLi].map((v, k) => {
            return (
                <li>
                    <span>{v.subject}</span>
                </li>
            )
        })

        console.log([...this.list.length])
        console.log(newlist.length)

        return (
            <ul>
                {newlist}
            </ul>
        )
    }
}

class List extends React.Component {
    state = {
        board: [
            { id: 1, subject: '제목1' },
            { id: 2, subject: '제목2' },
            { id: 3, subject: '제목3' },
            { id: 4, subject: '제목4' },
        ]
    }

    changeValue = async (v) => {
        const newboardArr = [...this.state.board]
        newboardArr.push({ id: newboardArr.length + 1, subject: v })
        await this.setState({
            ...this.state,
            board: newboardArr
        })
    }
    render() {
        return (
            <div>
                <Form changeValue={this.changeValue} value={this.state.value} />
                <Ul boardLi={this.state.board} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))

// 인풋박스 onChange 이벤트, 폼 submit 이벤트