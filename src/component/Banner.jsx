import React from "react"
import  '../App.css'

function Banner() {
   
  return(
      <>
        <section className="hero">
        <div className="container">
          <h1 className="display-4">Descubre la nueva colección</h1>
          <a className="btn btn-primary btn-lg" href="/productos" role="button">Ver más</a>
        </div>
      </section>
      <a href="https://wa.link/d6u0uo" className="btn-wsp" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
      </>
    )
   
}
export default Banner;