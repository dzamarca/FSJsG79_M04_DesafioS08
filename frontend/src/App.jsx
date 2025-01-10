import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, LoginPage, RegistrerPages, Cart, Pizza } from './pages/index'
import { Footer, Navbar, NotFound, Profile } from './views/index';
import { UserContext } from "./context/UserContext";
import { useContext } from "react";


function App() {
  const {token} = useContext(UserContext)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={!token?<RegistrerPages />:<Navigate to='/'/>}/>
        <Route path="login" element={!token?<LoginPage />:<Navigate to='/'/>}/>
        <Route path="/profile" element={token?<Profile />:<Navigate to='/login'/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
