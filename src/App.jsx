import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
// import './App.css'

import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </>
    )
}

export default App
