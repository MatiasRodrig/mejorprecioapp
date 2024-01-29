import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import PerfilPage from './pages/Perfil';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path='/perfil' element={<PerfilPage/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
