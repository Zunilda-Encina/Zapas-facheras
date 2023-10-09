import React, { useState } from 'react';
import './register.css';
// import NavBar from './Navbar/NavBar';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  favoritos: [],
};

const Register = () => {
  const [user, setUser] = useState(initialValues);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = user;
    if (firstName !== '' && lastName !== '' && email !== '' && password !== '') {
      localStorage.setItem('user', JSON.stringify(user));
      window.location = '/';
    } else {
      alert('Tienes que completar todos los campos');
    }
  };

  return (
    <>
    
      <form onSubmit={handleSubmit}>
      {/* <NavBar/> */}

        <label>
          Nombre:
          <input
            value={user.firstName}
            onChange={handleChange}
            name="firstName"
          />
        </label>
        {/* ... Otros campos de registro aquí */}
        <button type="submit">¡Regístrate!</button>
      </form>
    </>
  );
};

export default Register;