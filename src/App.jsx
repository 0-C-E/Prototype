import { Route, Routes } from 'react-router-dom'
import Authentication from './pages/Authentication'
import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './assets/styles/App.css'

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Authentication />} />
                </Routes>
            </main>
        </>
    )
}

export default App
