import React, { useState } from 'react'
import styled from 'styled-components'

/* CSS */
const BtnDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
`

const Button = styled.button`
    /* width: 100px; */
    margin: 50px;
    align-self: center;
    background-color: #fff;
    background-image: none;
    background-position: 0 90%;
    background-repeat: repeat no-repeat;
    background-size: 4px 3px;
    border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
    border-style: solid;
    border-width: 2px;
    box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
    box-sizing: border-box;
    color: #41403e;
    cursor: pointer;
    display: inline-block;
    font-family: Neucha, sans-serif;
    font-size: 1rem;
    line-height: 23px;
    outline: none;
    padding: .75rem;
    text-decoration: none;
    transition: all 235ms ease-in-out;
    border-bottom-left-radius: 15px 255px;
    border-bottom-right-radius: 225px 15px;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:hover {
    box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
    }

    &:focus {box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;}
`

const StyledLi = styled.li`
    width: 70vw;
    height: 40vh;
    margin: 100px auto;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    background: rgba(0, 0, 0, .1);
    transition: all 235ms ease-in-out;
    cursor: pointer;

    &:hover {
        width: 80vw;
        height: 45vh;
        transform: translate3d(0, -10px, 0);
    }
`

const List = ({ setViewFlag }) => {
    let list = Array(63).fill(0).map((v, i) => v = i)
    const [listNum, setListNum] = useState([0, 63])

    const handleList = (arr) => {
        setListNum(arr)
    }

    const items = () => list.slice(...listNum).map((v, i) => {
        return (
            <StyledLi key={i} onClick={() => { setViewFlag(v + 1) }}>

                <div><img src="" alt="" /></div>
                <div>
                    <h2>{v + 1} : 제목</h2>
                    <p>내용내용</p>
                    <ul>
                        <li>조회수</li>
                        <li>좋아요</li>
                        <li>댓글</li>
                    </ul>
                </div>
            </StyledLi>
        )
    })

    return (
        <>
            {/* <Form /> */}
            < BtnDiv >
                <Button onClick={() => handleList([0, 63])}>1</Button>
                <Button onClick={() => handleList([0, 11])}>2</Button>
                <Button onClick={() => handleList([11, 21])}>3</Button>
                <Button onClick={() => handleList([21, 41])}>4</Button>
                <Button onClick={() => handleList([41, 63])}>5</Button>
            </BtnDiv >
            <ul>
                {items()}
            </ul>
        </>
    )
}

export default List;