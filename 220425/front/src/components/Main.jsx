import React, { useState } from 'react'
import styled from 'styled-components'
import Form from './Form/Form3'
import View from './view/View'
import List from './list/List'




const Main = () => {

    const [viewFlag, setViewFlag] = useState(null)

    return (
        <div id="main">
            {viewFlag ? <View viewFlag={viewFlag} /> : <List setViewFlag={setViewFlag} />}
        </div>
    )
}

export default Main;