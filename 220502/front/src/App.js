import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/index'
import Comment from './pages/comment'
import Counter from './pages/counter'
import Login from './pages/login'
import Header from './components/common/header'
import './index.css'


function App() {
    return (
        <>
            <Router>
                {/* 헤더엘리먼트 */}
                <Header />
                {/* 스위치문처럼 헤더의 해당 html엘리먼트 누르면 Route의 path가 같은 애를 스위치문처럼 찾아서 해당하는 컴포넌트를 렌더링해줌 */}
                <Routes>
                    <Route path='/' index={true} element={<Index />} />
                    <Route path='/counter' element={<Counter />} />
                    <Route path='/comment' element={<Comment />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
