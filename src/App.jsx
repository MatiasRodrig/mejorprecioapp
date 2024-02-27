import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import PerfilPage from './pages/Perfil';
import { AuthProvider } from './context/AuthContext';
import AddProductsPage from './pages/AddProductsPage';
import AddVentasPage from './pages/AddVentasPage';
import { ProtectedRoute } from './ProtectedRoutes';


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route />


            <Route element={<ProtectedRoute />}>
              <Route path='/perfil' element={<PerfilPage />} />
              <Route path='/agregarproducto' element={<AddProductsPage />} />
              <Route path='/agregarventa' element={<AddVentasPage />} />
            </Route>


          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
