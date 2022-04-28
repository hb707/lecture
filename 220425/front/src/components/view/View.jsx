import React, { useState } from 'react'
import styled from 'styled-components'

/* CSS */
const BtnDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
`

const View = ({ viewFlag }) => {
    // viewFlag로 axios 보내서 해당 회차 정보 가져옴: 필요없....

    return (
        <>
            <h1>글번호: {viewFlag} view페이지입니다.</h1>

        </>
    )
}


export default View;