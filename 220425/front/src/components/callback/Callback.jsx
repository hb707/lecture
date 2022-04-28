import { useCallback, useState, useEffect } from 'react'

const Callback = () => {
    const [hi, setHi] = useState(0)
    const [bye, setBye] = useState(0)

    const hiClick = useCallback(() => {
        console.log('hello')
        setHi(hi + 1)
    }, [hi])

    const byeClick = useCallback(() => {
        console.log('hello')
        setBye(bye + 1)
    }, [bye])

    // useCallback이 아닌 기존의 함수를 사용했다면 버튼을 눌러서 리랜더링 할 때마다 함수 내부가 새로 바뀌면서 최신화가 됨 (컴포넌트 내부의 모든 함수가 새로 쓰여짐)
    // useCallback을 사용하면 함수를 한번 저장해두고 컴포넌트 실행시에는 따로 힙에 저장하지 않음
    // 단, 두번째인자로 들어간 상태가 바뀌면 실행됨

    const result = useMemo(() => 10, [])

    return (
        <>
            {hi}
            {bye}
            <button onClick={hiClick}>HI</button>
            <button onClick={byeClick}>BYE</button>
        </>
    )
}