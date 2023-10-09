import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Register from './component/Register/Register.jsx';
import Home from './component/Home/Home.jsx'; 
import Productos from './component/producto/Productos.jsx';
import SearchBar from './component/search/SearchBar.jsx'; // Importa SearchBar
import ProductDetail from './component/productDetail/ProductDetail.jsx';
import Navbar from './component/Navbar/Navbar.jsx';
import Footer from './component/Footer/Footer.jsx';


// import Login from './component/Login/Login.jsx'; 

const AppRoutes = ({ user, setUser, modelos }) => {
  return (
    <>
    <Navbar />
        <Routes>
          
          <Route
            path="/"
            element={<Home user={user} setUser={setUser} modelos={modelos} />}
          />
          <Route path="/registeruser" element={<Register />} />
          <Route path="/Productos" element={<Productos modelos={modelos} />} />
          <Route path="/Productos/:id"  element={<ProductDetail modelos={modelos} />} />

           {/* Agrega la ruta para el componente Login */}
           {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
    <Footer /> 
    </>
  );
};
export default AppRoutes;
