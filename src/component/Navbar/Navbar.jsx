import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/SearchBar.jsx';
import './navbar.css'
// import '../../App.css'
// import   '../../assets/css/style.css'
import ModelosDeZapatillas from '../Api/zapasApi.jsx';

const NavBar = ({ user, setUser, modelos }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
      <header > 
          <div className ="allNavBox" >
            
            <div className='logoBox'>
              <img className='imgLogo' src="https://cdn.discordapp.com/attachments/1154158862199435424/1154158885733675110/LOGOJORDAN_001.png" alt="LOGO" />
              <h1 className='titulo'>ZAPAS FACHERAS</h1>
            </div>

            <div className='navBox'>
              <ul className='ulNav'>
                <li className='listaNav'><Link to='/' className='itemNav' >Inicio </Link></li>
                <li className='listaNav'><Link to='/Productos' className="itemNav" > Productos</Link></li>
              </ul>
              {/* <Link to='/Login' className='itemNav'>Login</Link> */}
            </div>

            <div className={`search-bar ${isOpen ? 'open' : ''}`}>
              <SearchBar modelos={modelos} />
            </div> 
                   
          </div>
      </header>
  );
}

export default NavBar;
