import { createStore } from 'redux'
import rootReducer from '../reducers'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools())

const Store = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
// 기존에 useContext로 store만들었을 때는 
// <Store.Provider value={initialState}><Store.Provider>

export default Store