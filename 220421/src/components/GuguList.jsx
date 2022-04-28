import React, { Component } from 'react'

class GuguList extends Component {
    list = (
        <ul>
            <li>2단 입니다.</li>
            <li>2*1=2</li>
            <li>2*2=4</li>
            <li>2*3=6</li>
            <li>2*4=8</li>
            <li>2*5=10</li>
        </ul>
    )

    list = n => {
        let arr = Array(9).fill(null)
        const result = arr.map((v, i) => {
            return <li key={i}>{n}*{i + 1}={n * (i + 1)}</li>
        }) // 반복문 돌 때는 key값이 필요
        return (
            <ul>
                {result}
            </ul>
        )
    }
    render() {
        console.log(this.list(this.props.value))
        return (
            <>
                <h1>구구단리스트</h1>
                <h1>구구단 {this.props.value}단</h1>
                {this.props.value === null ? '몇단을 구해볼까?' : this.list(this.props.value)}
            </>
        )
    }
}

export default GuguList;