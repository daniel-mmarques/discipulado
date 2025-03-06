import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Buscar from './app/pages/buscar'
import Dados from './app/pages/dados'
import Home from './app/pages/home'
import Login from './app/pages/login'
import NotFoundPage from './app/pages/not-found-page'
import Turmas from './app/pages/turmas'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/notFoundPage" element={<NotFoundPage />} />
        <Route path="/turmas" element={<Turmas />} />
        <Route path="/dados" element={<Dados />} />
      </Routes>
    </BrowserRouter>
  )
}
