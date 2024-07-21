import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
// import './App.css'

import Home from './pages/Home'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </>
    )
}

export default App
