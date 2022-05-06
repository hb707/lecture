import Button from "../../components/common/button";
import Responsive from "../../components/common/responsive";
import { useSelector, useDispatch } from "react-redux"; // 전역상태 Store에 접근가능한 메소드
import { up, down } from "../../reducers/counter";

const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter) // 인자값으로 콜백함수 : 콜백함수의 인자값 state = store 내의 모든 state => 필요한 것만 가져오게


    const onUp = () => {
        dispatch(up())
    }

    const onDown = () => {
        dispatch(down())
    }

    return (
        <Responsive>
            <h3> Counter : {counter.number} </h3>
            <button onClick={onUp}>+</button>
            <button onClick={onDown}>-</button>
        </Responsive>
    )
}

export default Counter;