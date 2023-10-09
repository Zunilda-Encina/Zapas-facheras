import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { AppRouter } from './router';
import AppRoutes from './router.jsx'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ModelosDeZapatillas from './component/Api/zapasApi.jsx'; // Importa la API

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userValidate = JSON.parse(localStorage.getItem('user'));
    setUser(userValidate);
  }, []);

  return (

    <Router>
      
      <AppRoutes user={user} setUser={setUser} modelos={ModelosDeZapatillas} />
    </Router>
  );
}

export default App;
