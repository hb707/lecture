class Header extends React.Component {
    render() {
        return (
            <div id="header">
                메인입니다.
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
    state = { player: 0 }

    selected = (e) => {
        console.log(e.target)
        let changedPlayer = { ...this.state, player: !this.state.player }
        e.target.innerHTML = this.state.player ? '⭕️' : '❌'
        this.setState(changedPlayer)
    }

    render() {
        return (
            <div id="tictactoe">
                <span> 현재 플레이어 : {this.state.player ? '⭕️' : '❌'} </span>
                <ul id="boardUl">
                    <li className="board" num="0" onClick={this.selected}></li>
                    <li className="board" num="1" onClick={this.selected}></li>
                    <li className="board" num="2" onClick={this.selected}></li>
                    <li className="board" num="3" onClick={this.selected}></li>
                    <li className="board" num="4" onClick={this.selected}></li>
                    <li className="board" num="5" onClick={this.selected}></li>
                    <li className="board" num="6" onClick={this.selected}></li>
                    <li className="board" num="7" onClick={this.selected}></li>
                    <li className="board" num="8" onClick={this.selected}></li>
                </ul>
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                푸터입니다.
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