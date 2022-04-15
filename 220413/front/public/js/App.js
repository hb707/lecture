class Header extends React.Component {
    render() {
        return (
            <div id="header">
                헤더
            </div>
        )
    }
}

class Main extends React.Component {
    render() {
        return (
            <div id="main">
                <Counter />
                <Tictactoe />
                <List />
            </div>
        )
    }
}

class Counter extends React.Component {
    state = { num: 0 }

    plus = () => {
        let increasedObj = { ...this.state, num: this.state.num + 1 }
        this.setState(increasedObj)
    }

    minus = () => {
        let decreasedObj = { ...this.state, num: this.state.num - 1 }
        this.setState(decreasedObj)
    }

    render() {
        // 렌더 내부에는 리턴 부분 외에 불필요한 함수 등은 넣지 않는게 좋음. 데이터가 바뀔때마다 매번 실행되기때문. 
        // 웬만하면 렌더함수 외부로 뺴고 this.함수명 으로 함수만 호출해서 사용!
        // 이렇게 호출할 때에는 익명함수가 불필요함. 그리고 ()를 뺴줘야
        return (
            <div id="counter">
                <button onClick={this.plus}>✚</button>
                <button onClick={this.minus}>➖</button>
                <div id="showNum">{this.state.num}</div>
            </div>
        )
    }
}

class Tictactoe extends React.Component {
    state = {
        player: false,
        squareArr: Array(9).fill(-1)
    }
    endGame = (arr) => {
        const answerArr = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
        ]
        const player0 = []
        const player1 = []
        arr.forEach((v, i) => {
            if (v === false) { player0.push(i) }
            else if (v === true) { player1.push(i) }
        })
        console.log(arr, player0, player1)
        if (arr.indexOf(-1) === -1) { alert('게임종료') }
    }

    selected = async (e) => {


        const newSquare = [...this.state.squareArr]
        newSquare[parseInt(e.target.value)] = this.state.player

        let changedPlayer = { ...this.state, player: !this.state.player, squareArr: newSquare }
        e.target.innerHTML = this.state.player ? '⭕️' : '❌'

        await this.setState(changedPlayer)
        this.endGame(this.state.squareArr)
    }

    render() {
        return (
            <div id="tictactoe">
                <span> 현재 플레이어 : {this.state.player ? '⭕️' : '❌'} </span>
                <ul id="boardUl">
                    <li className="board" value="0" onClick={this.selected}></li>
                    <li className="board" value="1" onClick={this.selected}></li>
                    <li className="board" value="2" onClick={this.selected}></li>
                    <li className="board" value="3" onClick={this.selected}></li>
                    <li className="board" value="4" onClick={this.selected}></li>
                    <li className="board" value="5" onClick={this.selected}></li>
                    <li className="board" value="6" onClick={this.selected}></li>
                    <li className="board" value="7" onClick={this.selected}></li>
                    <li className="board" value="8" onClick={this.selected}></li>
                </ul>
            </div>
        )
    }
}


//  
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
    makeNewList = () => {
        const list = this.props.boardLi.map((v, k) => {
            return (
                <li>
                    <span>{v.id}.{v.subject}</span>
                </li>
            )
        })
        return list
    }

    // 리스트를 매핑해서 JSX형태로 만들어 배열에 담아 render()에 주면 알아서 list length만큼 생성해줌

    render() {
        return (
            <ul>
                {this.makeNewList()}
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
            <div id="makeList">
                <Form changeValue={this.changeValue} value={this.state.value} />
                <Ul boardLi={this.state.board} />
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                푸터
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div id="wrap">
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))