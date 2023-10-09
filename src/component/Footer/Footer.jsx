import React from 'react'
import  '../../assets/css/style.css'
import './footer.css'

function Footer(){
    return (
        <>
        <section className="Footer">
            <footer className="footer">
    <div className="container">
    <img className='logo' src="https://cdn.discordapp.com/attachments/1154158862199435424/1154158885733675110/LOGOJORDAN_001.png" alt="" />

      <div className="row">
        <div className="col-md-3">
          <h5>Zapas Facheras</h5>
          <ul>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Carreras</a></li>
            <li><a href="#">Noticias</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Atención al cliente</h5>
          <ul>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Envíos y devoluciones</a></li>
            <li><a href="#">Términos y condiciones</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Seguinos</h5>
          <ul>
            <li  className="iconos"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li  className="iconos"><a href="#"><i className="fab fa-twitter"></i> </a></li>
            <li  className="iconos"><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>No te pierdas nada</h5>
          <p>Suscríbete para recibir nuestras últimas novedades.</p>
          <form>
            <input type="email" placeholder="Correo electrónico" required/>
            <button type="submit">Suscribirse</button>
          </form>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <p>Derechos de autor &copy; 2023 ZapasFacheras. Todos los derechos reservados.</p>
      </div>
    </div>
    </footer>
    
        </section>
        </>
    )

}

export default Footer;
