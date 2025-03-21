import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from "react-router"
import RamKrishnaHari from './common/RamKrishnaHari.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ram" element={<RamKrishnaHari />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
