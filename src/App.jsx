import { Link, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import './assets/styles/App.css'

function App() {
    return (
        <>
            <Link to="/">Go to Home</Link>
            <Link to="/login">Go to Login</Link>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}

export default App
